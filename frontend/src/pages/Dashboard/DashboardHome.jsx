
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { propertyImportFromDB } from "@/lib/propertyImportFromDB"
import { useEffect, useState } from "react"
const DashboardHome = () => {

  const [rulesNumber, setRulesNumber] = useState(0)
  const [propertyNumber, setPropertyNumber] = useState(0)

  const countRules = async () => {
    try {
      const res = await fetch('http://localhost:5002/rule/count')
      const data = await res.json()
      setRulesNumber(data)
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
    <div className="border-2 w-full p-8">
      Dashboard Home
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
    </div>
  )
}

export default DashboardHome
