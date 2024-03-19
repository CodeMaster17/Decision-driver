
import { useParams } from 'react-router-dom'

const TestRuleDetails = () => {
    const { id } = useParams()

    return (
        <div>
            Test rule details :{id}
        </div>
    )
}

export default TestRuleDetails
