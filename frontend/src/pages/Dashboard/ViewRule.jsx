import dummyData from '../../../dummy.json'

const ViewRule = (data, level = 0) => {
    return (
        <>
            {data.map((item, index) => {
                const { property, operator, value, connectedBy, conditionSchema, actionSchema } = item
                let output = []
                // Process the current item
                output.push(
                    <div key={index} style={{ marginLeft: `${level * 20}px` }}>
                        <p>Property: {property}</p>
                        <p>Operator: {operator}</p>
                        <p>Value: {value}</p>
                        <p>Connected By: {connectedBy}</p>
                    </div>
                );

                // Recursively process nested conditions or actions
                if (conditionSchema) {
                    output.push(ViewRule(conditionSchema, level + 1));
                }
                if (actionSchema) {
                    output.push(ViewRule(actionSchema, level + 1));
                }

                return output;
            })}
        </>
    )
}
const RuleComponent = () => {
    return (
        <div>
            <h1>Rule: {dummyData.name}</h1>
            <p>Description: {dummyData.description}</p>
            <p>Tested: {dummyData.tested ? 'Yes' : 'No'}</p>
            <p>Created At: {dummyData.createdAt}</p>
            <p>Updated At: {dummyData.updatedAt}</p>
            <h2>Conditions</h2>
            {ViewRule(dummyData.conditionSchema)}
            <h2>Actions</h2>
            {ViewRule(dummyData.actionSchema)}
        </div>
    );
};
ViewRule(dummyData.conditionSchema, 0)
export default RuleComponent