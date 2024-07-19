import { columns } from "@/components/Column"
import Heading from "@/components/Heading"
import TableSkeleton from "@/components/Skeletons/TableSkeleton";
import ViewRuleTable from "@/components/ViewRuleTable"
import { useEffect, useState } from "react"
import { AiOutlineExclamationCircle } from "react-icons/ai";
import ErrorComponent from "./ErrorComponent";
import { RENDER_LINK } from "@/routes";
const TestRule = () => {
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const countRules = async () => {
        try {
            setLoading(true)
            const res = await fetch(`${RENDER_LINK}/rule/get-all-rules`)
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (err) {
            setError(error)
            // console.log(err)
        }
    }


    useEffect(() => {
        countRules();
    }, [])

    return (
        <>
            {error ? <ErrorComponent /> : ""}
            <div className="w-full p-8">
                <Heading>Test Rule</Heading>
                <br />
                <p className="font-bold">Select from rules action to test the rule</p>
                <div className="bg-red-300 flex items-center gap-2 p-4 rounded-lg">
                    <AiOutlineExclamationCircle color="white" size={24} /> <span className="text-white">This feature is currently in aplha testing mode, and will be released soon.</span>
                </div>
            </div>
            {loading ? <TableSkeleton />
                : <ViewRuleTable columns={columns} data={data} />
            }

        </>
    )
}

export default TestRule
