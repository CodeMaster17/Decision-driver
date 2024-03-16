
import CreateRule from "./CreateRule"
import { useState } from "react"


const ManageRule = () => {
    const [tab, setTab] = useState('create')



    return (
        <div className="w-full border-2">

            {/* <Tabs defaultValue="create" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger className="w-1/3" value="create">Create Rule</TabsTrigger>
                    <TabsTrigger className="w-1/3" value="raw">View Raw</TabsTrigger>
                    <TabsTrigger className="w-1/3" value="graph">View Graph</TabsTrigger>
                </TabsList>
                <TabsContent value="create">
                    <CreateRule/>   
                </TabsContent>
                <TabsContent value="raw">Change your password here.</TabsContent>
                <TabsContent value="graph">Change your password here.</TabsContent>
            </Tabs> */}
            <div>
                <button onClick={(e) => { e.preventDefault; setTab('create') }}>Create Rule</button>
                <button onClick={(e) => { e.preventDefault; setTab('raw') }}>View Raw</button>
                <button onClick={(e) => { e.preventDefault; setTab('graph') }}>View Graph</button>
            </div>
            <div>
                {tab === 'create' && <CreateRule />}
                {tab === 'raw' && <h1>Raw</h1>}
                {tab === 'graph' && <h1>Graph</h1>}
            </div>
        </div>
    )
}

export default ManageRule
