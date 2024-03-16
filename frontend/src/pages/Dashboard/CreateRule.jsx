import { useState } from "react";

const CreateRule = () => {
    const [ruleFormData, setRuleFormData] = useState({
        name: '',
        description: "",
        tested: false,
        conditionSchema: [
            {
                property: '',
                operator: '',
                value: '',
                connectedBy: '',
                conditionSchema: []
            }
        ],
        actionSchema: [
            {
                property: '',
                result: '',
                connectedBy: '',
                actionSchema: []
            }
        ]
    });

    const addFieldsConditionSchema = () => {
        setRuleFormData(prevState => ({
            ...prevState,
            conditionSchema: [
                ...prevState.conditionSchema,
                {
                    property: '',
                    operator: '',
                    value: '',
                    connectedBy: '',
                    conditionSchema: []
                }
            ]
        }));
    };

    const addFieldsActionSchema = () => {
        setRuleFormData(prevState => ({
            ...prevState,
            actionSchema: [
                ...prevState.actionSchema,
                {
                    property: '',
                    result: '',
                    connectedBy: '',
                    actionSchema: []
                }
            ]
        }));
    };

    // const handleConditionChange = (index, field, value) => {
    //     setRuleFormData(prevState => ({
    //         ...prevState,
    //         conditionSchema: prevState.conditionSchema.map((item, i) => {
    //             if (i === index) {
    //                 return { ...item, [field]: value };
    //             }
    //             return item;
    //         })
    //     }));
    // };

    const handleSchemaChange = (schemaType, index, field, value) => {
        setRuleFormData(prevState => ({
            ...prevState,
            [schemaType]: prevState[schemaType].map((item, i) => {
                if (i === index) {
                    return { ...item, [field]: value };
                }
                return item;
            })
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(ruleFormData);
        // submitting the form to api using fetch
        try {
            const response = await fetch('http://localhost:5002/rules/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ruleFormData)
            });
            console.log(response);
        } catch (err) {
            console.log(err);
        }


    };

    return (
        <section>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="border-2" name="name" value={ruleFormData.name} onChange={(e) => setRuleFormData({ ...ruleFormData, name: e.target.value })} />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" className="border-2" name="description" value={ruleFormData.description} onChange={(e) => setRuleFormData({ ...ruleFormData, description: e.target.value })} />
                <label htmlFor="tested">Tested</label>
                <input type="checkbox" id="tested" name="tested" checked={ruleFormData.tested} onChange={(e) => setRuleFormData({ ...ruleFormData, tested: e.target.checked })} />

                {/* dynamic form */}
                {ruleFormData.conditionSchema.map((item, index) => (
                    <div key={index}>
                        <label htmlFor={`property-${index}`}>Property</label>
                        <input type="text" id={`property-${index}`} className="border-2" name={`property-${index}`} value={item.property} onChange={(e) => handleSchemaChange("conditionSchema", index, 'property', e.target.value)} />
                        <label htmlFor={`operator-${index}`}>Operator</label>
                        <input type="text" id={`operator-${index}`} className="border-2" name={`operator-${index}`} value={item.operator} onChange={(e) => handleSchemaChange("conditionSchema", index, 'operator', e.target.value)} />
                        <label htmlFor={`value-${index}`}>Value</label>
                        <input type="text" id={`value-${index}`} className="border-2" name={`value-${index}`} value={item.value} onChange={(e) => handleSchemaChange("conditionSchema", index, 'value', e.target.value)} />
                        <label htmlFor={`connectedBy-${index}`}>Connected By</label>
                        <input type="text" id={`connectedBy-${index}`} className="border-2" name={`connectedBy-${index}`} value={item.connectedBy} onChange={(e) => handleSchemaChange("conditionSchema", index, 'connectedBy', e.target.value)} />
                        <button type="button" onClick={addFieldsConditionSchema} className="border-2 bg-gray-600 p-2 text-white">Add Fields</button>
                        {/* button for nesting conditions */}
                        <button type="button">Combine conditions</button>
                    </div>
                ))}

                {/* for action schema */}
                {ruleFormData.actionSchema.map((item, index) => {
                    return (
                        <div key={index}>
                            <label htmlFor={`property-${index}`}>Property</label>
                            <input type="text" id={`property-${index}`} className="border-2" name={`property-${index}`} value={item.property} onChange={(e) => handleSchemaChange("actionSchema", index, 'property', e.target.value)} />
                            <label htmlFor={`result-${index}`}>Result</label>
                            <input type="text" id={`result-${index}`} className="border-2" name={`result-${index}`} value={item.result} onChange={(e) => handleSchemaChange("actionSchema", index, 'result', e.target.value)} />
                            <label htmlFor={`connectedBy-${index}`}>Connected By</label>
                            <input type="text" id={`connectedBy-${index}`} className="border-2" name={`connectedBy-${index}`} value={item.connectedBy} onChange={(e) => handleSchemaChange("actionSchema", index, 'connectedBy', e.target.value)} />
                            <button type="button" onClick={addFieldsActionSchema} className="border-2 bg-gray-600 p-2 text-white">Add Fields</button>
                            {/* button for nesting actions */}
                            <button type="button">Combine actions</button>
                        </div>
                    )
                })}



                <button type="submit" className="border-2">Create Rule</button>
            </form>
        </section>
    );
}

export default CreateRule;
