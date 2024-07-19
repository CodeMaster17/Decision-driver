
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
const DashboardHome = () => {
  const [loading, setLoading] = useState(true)
  const [rulesNumber, setRulesNumber] = useState([])
  const [propertyNumber, setPropertyNumber] = useState(0)
  const [data, setData] = useState([])

  const countRules = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${RENDER_LINK}/rule/get-all-rules`)
      const data = await res.json()
      setData(data)
      setRulesNumber(data.length)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }
  const propertyFromDB = async () => {
    setLoading(true)
    const property = await propertyImportFromDB()
    setPropertyNumber(property.length)
    setLoading(false)
    // console.log(property)
  }

  useEffect(() => {
    countRules();
    propertyFromDB();
  }, [])



  return (

    <>

      <div className="border-2 w-full p-8">
        <Heading>
          Dashboard Home
        </Heading>
        <br />

        <div className="w-full bg-[#f0f8ff] rounded-lg p-8 flex justify-start items-start gap-4">
          <div>
            <img src="/idea-bulb.png" alt="" className="w-10 h-10" />
          </div>
          <div>
            <p className="text-lg font-light">Youve been hired by a Bank to create a Decision Management Hub for all automated decisions made in bank.
            </p>
            <br />
            <p className="text-lg font-light">

              In this DecisionDriver, analysts are able to:
              <ul>
                <li >
                  1. Write and modify rules
                </li>
                <li>
                  2. Check that the rules run correctly
                </li>
                <li>
                  3. Debug every calculation in the rules
                </li>
              </ul>
            </p>
          </div>
        </div>
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
          <Heading>
            Recent Activity
          </Heading>
          <br />
          {
            loading ? <RuleCardSkeleton /> :
              <div className="w-full mt-8 flex gap-4 flex-wrap">
                {data.slice().reverse().slice(0, 6).map((rule, index) => (
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
