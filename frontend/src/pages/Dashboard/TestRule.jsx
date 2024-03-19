import { columns } from "@/components/Column"
import Heading from "@/components/Heading"
import ViewRuleTable from "@/components/ViewRuleTable"
import { useEffect, useState } from "react"

const TestRule = () => {
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState([])

    const countRules = async () => {
        try {
            setLoading(true)
            const res = await fetch('http://localhost:5002/rule/get-all-rules')
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        countRules();
    }, [])

    return (
        <>
            <div className="w-full p-8">
                <Heading>Test Rule</Heading>
                <p>Select rule to test</p>
            </div>


            {loading ? "Loading..." :
                <ViewRuleTable columns={columns} data={data} />}

        </>
    )
}

export default TestRule
