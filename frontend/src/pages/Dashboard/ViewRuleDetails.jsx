import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect, useState } from 'react'
import ViewRaw from './ViewRaw'
import { useParams } from 'react-router-dom'
import ViewSQL from './ViewSQL'
import ViewRule from './ViewRule'
import { RENDER_LINK } from '@/routes'




const RuleComponent = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const { id } = useParams()
    const countRules = async () => {
        try {
            setLoading(true)
            const res = await fetch(`${RENDER_LINK}/rule/get-rule-by-id/${id}`)
            const data = await res.json()
            setData(data)
            // console.log(data)
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
            <div className="w-full border-2 p-8">
                <Tabs defaultValue="create" className="w-full">
                    <TabsList className="w-full">
                        <TabsTrigger className="w-1/3" value="create"> Rule</TabsTrigger>
                        <TabsTrigger className="w-1/3" value="raw">View Raw</TabsTrigger>
                        <TabsTrigger className="w-1/3" value="sql">View SQL</TabsTrigger>
                    </TabsList>
                    <TabsContent value="create">
                        {loading ? "Loading..." : <ViewRule />}
                    </TabsContent>
                    <TabsContent value="raw">
                        {loading ? "Loading..." : <ViewRaw json={data} />}
                    </TabsContent>
                    <TabsContent value="sql">
                        {loading ? "Loading..." : <ViewSQL data={data} />}
                    </TabsContent>
                </Tabs>
            </div>
            {/* {loading ? "Loading..." : <ViewRule />} */}

        </>

    );
};
export default RuleComponent