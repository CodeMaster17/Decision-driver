

import ViewRuleTable from "@/components/ViewRuleTable"
import { columns } from '@/components/Column'
import { useEffect, useState } from "react"
import ErrorComponent from "./ErrorComponent"
import TableSkeleton from "@/components/Skeletons/TableSkeleton"
import Heading from "@/components/Heading"

// eslint-disable-next-line react/prop-types
const ViewAllRules = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    const countRules = async () => {
        try {
            setLoading(true)
            const res = await fetch('https://decision-driver.onrender.com/rule/get-all-rules')
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (err) {
            // console.log(err)
            setError(error)
        }
    }


    useEffect(() => {
        countRules();
    }, [])


    return (
        <>
            <div className="w-full p-8">

                <Heading>
                    Here is the list of all created rules.
                </Heading>
            </div>
            {error ? <ErrorComponent /> : ""}
            {loading ? <TableSkeleton />
                : <ViewRuleTable columns={columns} data={data} />
            }

        </>
    )
}

export default ViewAllRules
