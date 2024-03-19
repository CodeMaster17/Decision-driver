import ViewUserTable from "@/components/Table/ViewUserTable"
import { userColumns } from "@/components/Table/UserColumn"
import { useEffect, useState } from "react"
import ErrorComponent from "./ErrorComponent"
import TableSkeleton from "@/components/Skeletons/TableSkeleton"
import Heading from "@/components/Heading"


const Users = () => {
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const countRules = async () => {
        try {
            setLoading(true)
            console.log("fetching data")
            const res = await fetch('http://localhost:5040/userdata')
            const data = await res.json()
            console.log(data)
            setData(data)
            setLoading(false)
        } catch (err) {
            setError(error)
        }
    }


    useEffect(() => {
        countRules();
    }, [])
    return (
        <>
            {error ? <ErrorComponent /> : ""}
            <div className="w-full p-8">
                <Heading>
                    Here is list of all users.
                </Heading>

            </div>
            <div>
                {!loading ? <ViewUserTable columns={userColumns} data={data} /> : <TableSkeleton />}

            </div>
        </>
    )
}

export default Users
