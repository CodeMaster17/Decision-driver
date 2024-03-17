import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


import CreateRule from './CreateRule'
import { useEffect, useState } from 'react'
import { propertyImportFromDB } from '@/lib/propertyImportFromDB'
import ViewRaw from './ViewRaw'
import { useParams } from 'react-router-dom'
import ViewSQL from './ViewSQL'




const RuleComponent = () => {
    const [loading, setLoading] = useState(false)
    const [propertyNumber, setPropertyNumber] = useState(0)
    const [data, setData] = useState()
    const { id } = useParams()
    const countRules = async () => {
        try {
            setLoading(true)
            const res = await fetch(`http://localhost:5002/rule/get-rule-by-id/${id}`)
            const data = await res.json()
            setData(data)
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


    const [tab, setTab] = useState('create')
    return (
        <>
            <div className="w-full border-2 p-8">
                <Tabs defaultValue="create" className="w-full">
                    <TabsList className="w-full">
                        <TabsTrigger className="w-1/3" value="create"> Rule</TabsTrigger>
                        <TabsTrigger className="w-1/3" value="raw">View Raw</TabsTrigger>
                        <TabsTrigger className="w-1/3" value="graph">View SQL</TabsTrigger>
                    </TabsList>
                    <TabsContent value="create">
                        <CreateRule />
                    </TabsContent>
                    <TabsContent value="raw">
                        <ViewRaw json={data} />
                    </TabsContent>
                    <TabsContent value="graph">
                        <ViewSQL data={data} />
                    </TabsContent>
                </Tabs>
            </div>


            {/* <div>
                <button onClick={(e) => { e.preventDefault; setTab('create') }}>Create Rule</button>
                <button onClick={(e) => { e.preventDefault; setTab('raw') }}>View Raw</button>
                <button onClick={(e) => { e.preventDefault; setTab('graph') }}>View Graph</button>
            </div>
            <div>
                {tab === 'create' && <CreateRule />}
                {tab === 'raw' && <ViewRaw />}
                {tab === 'graph' && <h1>Graph</h1>}
            </div> */}
        </>

    );
};
export default RuleComponent