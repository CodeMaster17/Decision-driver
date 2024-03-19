import { useState } from 'react';
import { generateSQLQuery } from '../../lib/sqlQueyGenerator';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { LuCopy } from "react-icons/lu";
import { Button } from '@/components/ui/button';
import { LuCopyCheck } from "react-icons/lu";
// eslint-disable-next-line react/prop-types
const ViewSQL = ({ data }) => {


    const SQLQuery = generateSQLQuery(data)
    const [copyStatus, setCopyStatus] = useState(true); // To indicate if the text was copied

    const onCopyText = () => {
        setCopyStatus(false);
        setTimeout(() => setCopyStatus(true), 2000); // Reset status after 2 seconds
    };

    return (
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
    )
}

export default ViewSQL
