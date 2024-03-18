
const Guide = () => {
    return (
        <>
            <div className="w-full border-2 p-8">
                <h1>Guide</h1>
                <p>Problem statement</p>
                <p>You’ ve been hired by a Bank to create a Decision Management Hub for all automated decisions made in bank.</p>
                <p>In this DecisionDriver, analysts should be able to:
                    1. Write and modify rules
                    2. Check that the rules run correctly
                    3. Debug every calculation in the rules</p>
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

                <p>
                    {/* Conditions in the rule can use comparison operators like: &st; , &gt; ,<=,>=,==,!=, etc. */}

                </p>

                <p>

                    {/* Conditions can also use basic arithmetic expressions like annual_income / 12 < 1000000 */}
                </p>
                <p>

                    Conditions can be chained together using boolean operators:
                    CONDITION1 and CONDITION2
                </p>

            </div>
            <div>
                <p>Features</p>
                <p>
                    The envisioned application seeks to provide users with a comprehensive User
                    Interface, empowering them with the following capabilities:
                    1. Rule Creation and Nesting

                    Business Analysts should be able to create rules within DecisionHub without knowing programming.
                    DecisionHub should support intricate logical structures that are required for their Decision Strategies.
                    2. Real-Time Rule Execution

                    In DecisionHub, Business Analysts should be able to run their Decision Strategy with sample input values.
                    In this process, the application should intelligently ask Analysts to enter the required inputs to run the rules.
                    3. Rule Storage and Retrieval

                    DecisionHub should be able to persist the rules written in the application in an SQL database. There should
                    be a provision for retrieving the rules. Having a clear visual representation of the rules would be useful to
                    Business Analysts so they can quickly read and find issues in the rules.

                    By encapsulating these functionalities, DecisionHub should be able to deliver a user-centric and versatile Rule Builder
                    environment. This not only empowers Analysts to construct and test rules intuitively but also ensures that the
                    execution and debugging processes are transparent and accessible through a sophisticated User Interface.

                    4. Flexible Rule Processing

                    The choice of whether rule processing and execution occur in the backend or frontend is left to the participants discretion. However,
                    irrespective of the chosen approach, the applications UI should dynamically display the results of rule execution.
                    Business Analysts should be able to opt for a debug mode. In the debug mode, the application should provide a detailed breakdown of
                    calculation steps for each node, enhancing transparency and aiding in troubleshooting. Having a step-by-step debugger would be useful
                    too.
                </p>
            </div>


        </>
    )
}

export default Guide
