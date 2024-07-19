import CreateRuleInformation from "@/components/CreateRuleInformation";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { actionImportFromDB } from "@/lib/actionImportFromDB";
import { RENDER_LINK } from "@/routes";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BooleanValue, connectedBy, operator } from "../../constants";
import { propertyImportFromDB } from "../../lib/propertyImportFromDB";
const CreateRule = () => {
    const { toast } = useToast()
    const [buttonState, setButtonState] = useState(false)
    const [ruleFormData, setRuleFormData] = useState({
        name: '',
        description: "",
        tested: false,
        conditionSchema: [
            {
                property: 'income',
                operator: 'Not_Equal',
                value: '10000',
                connectedBy: 'AND',
                conditionSchema: []
            }
        ],
        // actionSchema: [
        //     {
        //         property: 'income',
        //         result: 'Not_Equal',
        //         connectedBy: 'AND',
        //         actionSchema: []
        //     }
        // ]
        actionSchema: [
            {
                property: 'loan',
                result: true,
                connectedBy: 'AND',
                actionSchema: []
            }
        ]
    });

    // adding initial values for ondition schema
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

    // adding initial values to actions
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

    const [property, setProperty] = useState([])
    const [actionProperty, setActionProperty] = useState([])
    // get property from db
    const propertyFromDB = async () => {
        const property = await propertyImportFromDB()
        setProperty(property)
    }

    // get action property from DB
    const actionFromDB = async () => {
        const actions = await actionImportFromDB()
        setActionProperty(actions)
        // const actionProperty = await 
    }

    useEffect(() => {
        propertyFromDB()
        actionFromDB()
    }, [])

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
    const currentDateTime = new Date();

    // Format the date and time as a string in a specific locale and format
    const formattedDateTime = currentDateTime.toLocaleString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    });
    function successToast() {
        toast({
            title: "Rule Created",
            variant: "success",
            className: "bg-white",
            description: formattedDateTime,
        })
    }

    function errorToast() {
        toast({
            title: "Error creating rule! Please try again.",
            variant: "destructive",
            description: formattedDateTime,
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(ruleFormData);

        setButtonState(true)
        try {
            const response = await fetch(`${RENDER_LINK}/rules/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ruleFormData)
            });
            setButtonState(false)
            console.log(response);
            if (response.ok) {
                successToast()

            } else {

                errorToast()
            }
        } catch (err) {
            errorToast()
        }
    };

    return (
        <section className="p-8">

            <CreateRuleInformation />
            <form onSubmit={submitHandler} className="mt-8">
                <Heading >Create Rules</Heading>
                <div className="w-full flex gap-4">
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" id="name" placeholder="Rule Name" className=" input-styles " name="name" value={ruleFormData.name} onChange={(e) => setRuleFormData({ ...ruleFormData, name: e.target.value })} />
                        <br />
                    </div>
                    <div>

                        <label htmlFor="description">Description</label>
                        <br />
                        <input type="text" id="description" className=" w-[30vw] input-styles" name="description" value={ruleFormData.description} placeholder="Description" onChange={(e) => setRuleFormData({ ...ruleFormData, description: e.target.value })} />
                    </div>
                    {/* <div className="w-1/3">
                        <label htmlFor="tested">Tested</label>
                        <br />
                        <input type="checkbox" id="tested" name="tested" checked={ruleFormData.tested} onChange={(e) => setRuleFormData({ ...ruleFormData, tested: e.target.checked })} />
                    </div> */}
                </div>

                <h1 className="text-xl font-bold mt-8">Rules</h1>
                {/* dynamic form */}
                {ruleFormData.conditionSchema.map((item, index) => (
                    <>
                        {index > 0 ? <div className="w-1/4">
                            <label htmlFor={`connectedBy-${index}`}>Connected By</label>
                            <br />
                            <select className="input-styles w-full" name={`connectedBy-${index}`} id={`connectedBy-${index}`} onChange={(e) => handleSchemaChange("conditionSchema", index, 'connectedBy', e.target.value)}>
                                {connectedBy.map((op, index) => {
                                    return (
                                        <option key={index} value={op.value}>{op.name}</option>
                                    );
                                })}
                            </select>
                        </div> : ""}
                        <div key={index} className="w-full flex gap-4 justify-center items-end ">
                            <div className="w-1/4 ">
                                <label htmlFor={`property-${index}`}>Property</label>
                                <br />
                                <select className="input-styles w-full" name={`property-${index}`} id={`operator-${index}`} onChange={(e) => handleSchemaChange("conditionSchema", index, 'property', e.target.value)}>
                                    {property.map((op, index) => {
                                        return (
                                            <option key={index} value={op.value}>{op.name}</option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="w-1/4">
                                <label htmlFor={`operator-${index}`}>Operator</label>
                                <br />
                                <select className="input-styles w-full" name={`operator-${index}`} id={`operator-${index}`} onChange={(e) => handleSchemaChange("conditionSchema", index, 'operator', e.target.value)}>
                                    {operator.map((op, index) => {
                                        return (
                                            <option key={index} value={op.value}>{op.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="w-1/4">
                                <label htmlFor={`value-${index}`}>Value</label>
                                <br />
                                <input className="input-styles w-full" type="text" id={`value-${index}`} name={`value-${index}`} value={item.value} onChange={(e) => handleSchemaChange("conditionSchema", index, 'value', e.target.value)} />

                            </div>


                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button type="button" onClick={addFieldsConditionSchema} className=" text-white"> <IoMdInformationCircleOutline size={20} /> &nbsp; Add Fields +</Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add more fileds to combine conditions.</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <Button type="button" disabled variant="destructive" onClick={addFieldsConditionSchema} className=" text-white">Delete Fields </Button>

                            {/* button for nesting conditions */}
                            <Button disabled type="button">Combine conditions</Button>
                        </div>

                    </>
                ))}
                <br />
                <br />
                <br />

                <h1 className="text-xl font-bold">Actions</h1>

                {/* for action schema */}
                {ruleFormData.actionSchema.map((item, index) => {
                    return (
                        <div key={index} className="w-full flex gap-4 justify-center items-end ">
                            <div className="w-1/3">
                                <label htmlFor={`property-${index}`}>Property</label>
                                <br />
                                <select className="input-styles w-full" name={`property-${index}`} id={`operator-${index}`} onChange={(e) => handleSchemaChange("actionSchema", index, 'property', e.target.value)}>
                                    {actionProperty.map((op, index) => {
                                        return (
                                            <option key={index} value={op.value}>{op.name}</option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="w-1/3">
                                <label htmlFor={`result-${index}`}>Decision</label>
                                <br />
                                {/* <input type="text" id={`result-${index}`} className=" input-styles w-full" name={`result-${index}`} value={item.result} onChange={(e) => handleSchemaChange("actionSchema", index, 'result', e.target.value)} /> */}

                                <select className="input-styles w-full" name={`result-${index}`} id={`result-${index}`} onChange={(e) => handleSchemaChange("actionSchema", index, 'result', e.target.value)}>
                                    {BooleanValue.map((op, index) => {
                                        return (
                                            <option key={index} value={op.value}>{op.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="w-1/3">
                                <label htmlFor={`connectedBy-${index}`}>Connected By</label>
                                <br />

                                <select className="input-styles w-full" name={`connectedBy-${index}`} id={`connectedBy-${index}`} onChange={(e) => handleSchemaChange("actionSchema", index, 'connectedBy', e.target.value)}>
                                    {connectedBy.map((op, index) => {
                                        return (
                                            <option key={index} value={op.value}>{op.name}</option>
                                        );
                                    })}
                                </select>
                            </div>

                            <Button type="button" onClick={addFieldsActionSchema} className=" text-white">Add Fields +</Button>

                            {/* button for nesting actions */}
                            <Button disabled type="button">Combine actions</Button>
                        </div>
                    )
                })}


                <br />
                <br />
                <Button type="submit" disabled={buttonState} >
                    {buttonState ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {buttonState ? "Creating Rule" : "Create Rule"}
                </Button>
            </form>
            <Toaster />
        </section>
    );
}

export default CreateRule;
