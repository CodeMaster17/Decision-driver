

import ViewRuleTable from "@/components/ViewRuleTable"
import { columns } from '@/components/Column'
import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const ViewAllRules = () => {

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
            {loading && <p>Loading...</p>}
            <ViewRuleTable columns={columns} data={data} />
        </>
    )
}

export default ViewAllRules
