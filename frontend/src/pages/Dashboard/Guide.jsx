import { AiOutlineExclamationCircle } from "react-icons/ai"

const Guide = () => {
    return (
        <>
            <div className="w-full leading-loose p-10">
                <h1 className="text-2xl font-bold">Guide</h1>
                {/* <p className="text-lg font-semibold mt-6">Problem statement</p> */}
                <p className="mt-5">Banks need to create a Decision Management Driver for all automated decisions made in bank.</p>
                <p>In this DecisionDriver, analysts should be able to:
                    <ol className="list-decimal ml-14 font-semibold">
                        <li>Write and modify rules</li>
                        <li>Check that the rules run correctly</li>
                        <li>Debug every calculation in the rules</li>
                    </ol>
                </p>
                <p>This is an example of the challenges analysts face today.</p>
                <p>Most Business Analysts do not know programming languages and are not tech-savvy.</p>
                <p> They need a no-code
                    rule-writing experience
                    where they can focus on
                    penning down their
                    business knowledge
                    without technology
                    getting in the way.
                </p>
                <div className="bg-[#f0f8ff] p-4 mt-5 rounded-lg">
                    <p>
                        Conditions in the rule can use comparison operators like: &lt;, &gt;, &le;, &ge;, ==, &ne;, etc.

                    </p>

                    <p>

                        Conditions can also use basic arithmetic expressions like annual_income / 12 &lt; 1000000
                    </p>
                    <p>

                        Conditions can be chained together using boolean operators:
                        CONDITION1 and CONDITION2
                    </p>
                </div>

            </div>
            <div className="w-full leading-loose p-10">
                <p className="text-lg font-semibold">Features</p>
                <p className="mt-5">
                    The envisioned application seeks to provide users with a comprehensive User
                    Interface, empowering them with the following capabilities:
                    <ol className="list-decimal ml-5">
                        <li><h3 className="font-semibold">Rule Creation and Nesting</h3>

                            Business Analysts should be able to create rules within DecisionDriver without knowing programming.
                            DecisionDriver should support intricate logical structures that are required for their Decision Strategies.</li>
                        <li><h3 className="font-semibold">Real-Time Rule Execution</h3>

                            In DecisionDriver, Business Analysts should be able to run their Decision Strategy with sample input values.
                            In this process, the application should intelligently ask Analysts to enter the required inputs to run the rules.</li>
                        <li><h3 className="font-semibold">Rule Storage and Retrieval</h3>

                            DecisionDriver should be able to persist the rules written in the application in an SQL database. There should
                            be a provision for retrieving the rules. Having a clear visual representation of the rules would be useful to
                            Business Analysts so they can quickly read and find issues in the rules.

                            By encapsulating these functionalities, DecisionDriver should be able to deliver a user-centric and versatile Rule Builder
                            environment. This not only empowers Analysts to construct and test rules intuitively but also ensures that the
                            execution and debugging processes are transparent and accessible through a sophisticated User Interface.</li>

                        <li><h3 className="font-semibold">Flexible Rule Processing</h3>

                            The choice of whether rule processing and execution occur in the backend or frontend is left to the participants discretion. However,
                            irrespective of the chosen approach, the applications UI should dynamically display the results of rule execution.
                            Business Analysts should be able to opt for a debug mode. In the debug mode, the application should provide a detailed breakdown of
                            calculation steps for each node, enhancing transparency and aiding in troubleshooting. Having a step-by-step debugger would be useful
                            too.</li>
                    </ol>

                </p>
            </div>
            <hr />
            <br />
            <div className="w-full p-8">
                <p>
                    This is an example of how things work in <b>Decision Driver.</b>
                </p>
                <br />
                <br />
                <p className="text-lg">
                    Step 1: <b>Create a Rule</b>
                </p>
                <p>
                    Go to <a className="bg-[#20273D] text-white rounded-md px-1 text-sm py-1" href="/dashboard/create-rule">Create rule page</a> where you can create a rule manually.
                </p>
                <span className="text-base font-light" >

                    In this DecisionDriver, you have to enter following details to create a rule:
                    <ul>
                        <li >
                            1. <span className="font-semibold">Name :</span> Name of the rule
                            For eg, &quot;Under-age and high income.&quot;
                        </li>
                        <li>
                            2. <span className="font-semibold">Description :</span> Description about the rule.
                            For eg, &quot;Applicant is not under-age, and has a high income.&quot;
                        </li>
                        <li>
                            3. <span className="font-semibold">Set Property:</span> Select a property or variable to base the rule on.
                        </li>
                        <li>
                            3. <span className="font-semibold">Set Operator:</span> Select a operator to compare the value.
                        </li>
                        <li>
                            4. <span className="font-semibold">Set Value:</span> Write the numeric value to compare.
                        </li>
                    </ul>
                </span>
                <br />
                <div className="w-4/5">
                    <img src="/create-rule.jpeg" alt="Create rule png" />
                </div>

                <br />
                <p className="text-lg">
                    Step 2: <b>View Rules</b>
                </p>
                <p>
                    Click on <a className="bg-[#20273D] text-white rounded-md px-1 text-sm py-1" href="/dashboard/view-rule">View Rules</a> button to get all the rules.
                </p>
                <br />
                <div className="w-4/5">
                    <img src="/view-rules.jpeg" alt="Create rule png" />
                </div>
                <br />
                <p>
                    Click on the 3 dots button on the right side of the rule to view that particular rule&apos;s details.
                </p>
                <br />
                <div className="w-4/5">
                    <img src="/view-rules-button.jpeg" alt="Create rule png" />
                </div>
                <br />
                <p className="text-lg">
                    Step 3: <b>Understanding the rule created</b>
                    <ul>
                        <li>1. View Rule</li>
                        <li>1. View in raw format</li>
                        <li>1. View SQL generated from rule</li>
                    </ul>
                </p>
                <p>
                    1. View rule
                </p>
                <div className="w-4/5">
                    <img src="/view-rule-about.jpeg" alt="Create rule png" />
                </div>
                <br />
                <p>
                    2. View in raw format
                </p>
                <br />
                <div className="w-4/5">
                    <img src="/view-rules-raw.jpeg" alt="Create rule png" />
                </div>
                <br />
                <p>
                    3. View SQL generated from rule
                </p>
                <br />
                <div className="w-4/5">
                    <img src="/view-rules-sql.jpeg" alt="Create rule png" />
                </div>
                <p>Here you can copy the rule to test the rule in your terminal as well.</p>
                <br />
                <p className="text-lg">
                    Step 4: <b>Test Rule</b>
                    <div className="w-full">

                        <div className="bg-red-300 flex items-center gap-2 p-4 rounded-lg">
                            <AiOutlineExclamationCircle color="white" size={24} /> <span className="text-white">This feature is currently in aplha testing mode, and will be released soon.</span>
                        </div>
                    </div>
                </p>
            </div>




        </>
    )
}

export default Guide
