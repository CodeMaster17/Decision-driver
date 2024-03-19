import ViewUserTable from "@/components/Table/ViewUserTable"
import { userColumns } from "@/components/Table/UserColumn"
import { useEffect, useState } from "react"

const Users = () => {
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState([])

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
            console.log(err)
        }
    }


    useEffect(() => {
        countRules();
    }, [])
    return (
        <div>
            {!loading ? <ViewUserTable columns={userColumns} data={data} /> : " Loading... "}

        </div>
    )
}

export default Users
