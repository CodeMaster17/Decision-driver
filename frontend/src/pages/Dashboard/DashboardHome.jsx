
import ActivityCard from "@/components/ActivityCard"
import Heading from "@/components/Heading"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,

} from "@/components/ui/card"
import { propertyImportFromDB } from "@/lib/propertyImportFromDB"
import { useEffect, useState } from "react"
const DashboardHome = () => {
  const [loading, setLoading] = useState(false)
  const [rulesNumber, setRulesNumber] = useState([])
  const [propertyNumber, setPropertyNumber] = useState(0)
  const [data, setData] = useState([])

  const countRules = async () => {
    try {
      setLoading(true)
      const res = await fetch('http://localhost:5002/rule/get-all-rules')
      const data = await res.json()
      setData(data)
      setRulesNumber(data.length)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }
  const propertyFromDB = async () => {
    const property = await propertyImportFromDB()
    setPropertyNumber(property.length)
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
        {
          loading ? "Loading..." :
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
          {
            loading ? "Loading..." :
              <div className="w-full mt-8 flex gap-4 flex-wrap">
                {data.slice(5).map((rule, index) => (
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
