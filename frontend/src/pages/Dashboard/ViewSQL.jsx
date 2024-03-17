import { executeSqlQueryAndPerformActions } from '../../lib/sqlQueyGenerator';

// eslint-disable-next-line react/prop-types
const ViewSQL = ({ data }) => {


    const SQLQuery = executeSqlQueryAndPerformActions(data)

    return (
        <div className='p-4 border-2 w-full bg-muted rounded-md '>
            <p className='text-base'>
                {SQLQuery}
            </p>
        </div>
    )
}

export default ViewSQL
