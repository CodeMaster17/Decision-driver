
import ActivityCard from "@/components/ActivityCard"
import Heading from "@/components/Heading"
import ActivityCardSkeleton from "@/components/Skeletons/ActivityCardSkeleton"
import RuleCardSkeleton from "@/components/Skeletons/RuleCardSkeleton"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { propertyImportFromDB } from "@/lib/propertyImportFromDB"
import { RENDER_LINK } from "@/routes"
import { useEffect, useState } from "react"



import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import CreateRuleInformation from "@/components/CreateRuleInformation"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
})



const DashboardHome = () => {
  const [loading, setLoading] = useState(true)
  const [rulesNumber, setRulesNumber] = useState([])
  const [propertyNumber, setPropertyNumber] = useState(0)
  const [data, setData] = useState([])
  const [switchStatus, setSwitchStatus] = useState(false);

  const countRules = async (sortOrder) => {
    try {
      setLoading(true)
      const res = await fetch(`${RENDER_LINK}/rule/get-all-rules/?sortOrder=${sortOrder}`)
      const data = await res.json()
      setData(data)
      setRulesNumber(data.length)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }
  const propertyFromDB = async (sortOrder) => {
    setLoading(true)
    const property = await propertyImportFromDB(sortOrder)
    setPropertyNumber(property.length)
    setLoading(false)
    // console.log(property)
  }

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
    },
  })

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  useEffect(() => {
    propertyFromDB('asc');
    if (!switchStatus) {
      countRules('asc');
    } else {
      countRules('desc');
    }
  }, [switchStatus])

  return (
    <>
      <div className="border-2 w-full p-8">
        <Heading>
          Dashboard Home
        </Heading>
        <br />

        <CreateRuleInformation />
        <br />
        <br />

        {
          loading ? <ActivityCardSkeleton /> :
            <div className="flex w-4/5 gap-4 ">
              <Card className="w-[20vw] shadow-lg">
                <CardHeader>
                  <CardTitle>{rulesNumber}</CardTitle>
                  <CardDescription>Total rules</CardDescription>
                </CardHeader>
              </Card>
              <Card className="w-[20vw] shadow-lg">
                <CardHeader>
                  <CardTitle>{propertyNumber}</CardTitle>
                  <CardDescription>Total property </CardDescription>
                </CardHeader>
              </Card>
            </div>
        }
        <div className="w-full mt-8">
          <div className="w-full flex justify-between items-center">
            <Heading>
              Recent Activity
            </Heading>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                  <div>
                    <FormField
                      control={form.control}
                      name="marketing_emails"
                      render={({ field }) => (
                        <FormItem className="">
                          <div className="">
                            <FormLabel className="text-base">
                              Latest first
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked); // Update the form state
                                console.log(checked)
                                setSwitchStatus(checked); // Store in local state
                              }}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
            </div>
          </div>
          <br />
          {
            loading ? <RuleCardSkeleton /> :
              <div className="w-full mt-8 flex gap-4 flex-wrap">
                {data.map((rule, index) => (
                  <ActivityCard key={index} title={rule.name} testStatus={rule.tested} description={rule.description} id={rule._id} />
                ))}
              </div>
          }
        </div>

      </div>
    </>
  )
}

export default DashboardHome
