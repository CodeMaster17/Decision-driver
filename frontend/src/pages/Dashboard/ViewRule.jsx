/* eslint-disable react/prop-types */

import { RENDER_LINK } from "@/routes";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const ConditionSchemaDisplay = ({ schema }) => {
    return (
        <div>
            {schema.map((condition, index) => (
                <div key={index} className="p-4 rounded-lg" style={{ marginLeft: `${20 * condition.conditionSchema?.length}px` }}>
                    <span>{condition.property} {condition.operator} {condition.value}</span>
                    {condition.conditionSchema && (
                        <div>
                            <span>{condition.connectedBy}</span>
                            <ConditionSchemaDisplay schema={condition.conditionSchema} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const ViewRule = () => {
    console.log("component rerender")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [conditionSchema, setConditionSchema] = useState([{}])
    const { id } = useParams()
    // console.log(id)
    const countRules = async () => {
        try {
            console.log("inside try catch")
            setLoading(true)
            const res = await fetch(`${RENDER_LINK}/rule/get-rule-by-id/${id}`)
            const data = await res.json()
            setData(data)
            setConditionSchema(data.conditionSchema)
            console.log(data.conditionSchema.length)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        countRules()
    }, [])
    // console.log(data)
    return (
        <>
            {!loading ? <section className="w-full p-8">
                <div className="w-full border-2 rounded-lg" >
                    <div className="bg-info-block text-lg  rounded-lg  flex justify-between items-center">
                        <div className="px-4 bg-white p-2 h-full rounded-lg">
                            Name
                        </div>
                        <div className="mr-3">
                            {/* {loading ? "" : data.name} */}
                            {data.name}
                        </div>
                    </div>
                </div >
                <br />
                <div className="w-full border-2 rounded-lg">
                    <div className="bg-info-block text-lg  rounded-lg  flex justify-between items-center">
                        <div className="px-4 bg-white p-2 h-full rounded-lg">
                            Description
                        </div>
                        <div className="mr-3">
                            {/* {data.description ? data.description : ""} */}
                            {data.description}
                        </div>
                    </div>
                </div>
                <br />
                <div className="bg-info-block">
                    <ConditionSchemaDisplay schema={conditionSchema} />
                </div>
            </section > : "Loading"}
        </>
    )
}

export default ViewRule
