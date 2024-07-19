
import Heading from '@/components/Heading'
import { Button } from '@/components/ui/button'
import { generateSQLQuery } from '@/lib/sqlQueyGenerator'
import { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { LuCopy, LuCopyCheck } from 'react-icons/lu'
import { useParams } from 'react-router-dom'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Loader2 } from "lucide-react";
import ViewUserTable from '@/components/Table/ViewUserTable'
import { userColumns } from '@/components/Table/UserColumn'
import { RENDER_LINK } from '@/routes'
const TestRuleDetails = () => {
    const { toast } = useToast()
    const [buttonState, setButtonState] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [userData, setUserData] = useState([{}])
    const [SQLQuery, setSQLQuery] = useState('')
    const { id } = useParams()

    useEffect(() => {
        const countRules = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${RENDER_LINK}/rule/get-rule-by-id/${id}`);
                const fetchedData = await res.json();
                setData(fetchedData);

                // Generate SQL query
                const SQLQuery = generateSQLQuery(fetchedData);
                setSQLQuery(SQLQuery);

                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };

        countRules();
    }, [id]);

    const [copyStatus, setCopyStatus] = useState(true); // To indicate if the text was copied

    const onCopyText = () => {
        setCopyStatus(false);
        setTimeout(() => setCopyStatus(true), 2000); // Reset status after 2 seconds
    };

    function successToast() {
        toast({
            title: "Rule Successfully Tested",
            variant: "success",
            className: "bg-white",
        })
    }

    function errorToast() {
        toast({
            title: "Error creating rule! Please try again.",
            variant: "destructive",

        })
    }
    function noSQLError() {
        toast({
            title: "No SQL Query generated, try again after going back.",
            variant: "destructive",

        })
    }
    const TestButtonHandler = async () => {
        // console.log('Testing rule')
        try {
            if (SQLQuery === '') {
                noSQLError()
                return;
            }
            setButtonState(true)
            const response = await fetch(`https://decision-driver-3869.vercel.app/userdata/${SQLQuery}`)
            const data = await response.json()
            setUserData(data)
            setButtonState(false)
            console.log(data);
            if (response.ok) {
                successToast()
                setButtonState(false)

            } else {

                errorToast()
                setButtonState(false)
            }
        } catch (err) {
            errorToast()
            setButtonState(false)
        }
    }

    return (
        <>

            <div className='p-8 w-full'>
                <Heading>
                    Test Rule Details
                </Heading>
                Test rule details :{id}
                <div className='p-4 border-2 w-full bg-muted rounded-md flex justify-between items-center'>
                    <p className='text-base'>
                        {SQLQuery}
                    </p>
                    <CopyToClipboard text={SQLQuery} onCopy={onCopyText}>
                        <Button variant="ghost" className=" border-2 hover:scale-105" >
                            {copyStatus ? <LuCopy size={20} /> : <LuCopyCheck size={20} />}
                        </Button>
                    </CopyToClipboard>
                </div>
                <div className='mt-8 flex justify-between'>

                    <Button type="submit" disabled={buttonState} onClick={TestButtonHandler} >
                        {buttonState ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        {buttonState ? "Testing Rule" : "Test Rule"}
                    </Button>
                    {userData.length > 0 ? (
                        <Button>
                            Mark as tested
                        </Button>
                    ) : ""}

                </div>

                {loading ? (
                    "Loading..."
                ) : userData.length > 0 ? (
                    <ViewUserTable columns={userColumns} data={userData} />
                ) : (
                    "No user with that data"
                )}
            </div>
            <Toaster />
        </>
    )
}

export default TestRuleDetails
