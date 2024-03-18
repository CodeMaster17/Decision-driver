
const Guide = () => {
    return (
        <>
            <div className="w-full leading-loose p-10">
                <h1 className="text-2xl font-bold">Guide</h1>
                <p className="text-lg font-semibold mt-6">Problem statement</p>
                <p className="mt-5">You’ ve been hired by a Bank to create a Decision Management Hub for all automated decisions made in bank.</p>
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

                        Business Analysts should be able to create rules within DecisionHub without knowing programming.
                        DecisionHub should support intricate logical structures that are required for their Decision Strategies.</li>
                        <li><h3 className="font-semibold">Real-Time Rule Execution</h3>

                        In DecisionHub, Business Analysts should be able to run their Decision Strategy with sample input values.
                        In this process, the application should intelligently ask Analysts to enter the required inputs to run the rules.</li>
                        <li><h3 className="font-semibold">Rule Storage and Retrieval</h3>

                        DecisionHub should be able to persist the rules written in the application in an SQL database. There should
                        be a provision for retrieving the rules. Having a clear visual representation of the rules would be useful to
                        Business Analysts so they can quickly read and find issues in the rules.

                        By encapsulating these functionalities, DecisionHub should be able to deliver a user-centric and versatile Rule Builder
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


        </>
    )
}

export default Guide
