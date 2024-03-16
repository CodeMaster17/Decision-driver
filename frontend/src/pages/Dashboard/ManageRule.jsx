import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CreateRule from "./CreateRule"


const ManageRule = () => {
    return (
        <div className="w-full border-2">

            <Tabs defaultValue="create" className="w-full">
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
            </Tabs>
        </div>
    )
}

export default ManageRule
