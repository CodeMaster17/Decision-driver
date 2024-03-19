
const Examples = () => {
    return (
        <section className="w-full p-8">
            <p className="text-2xl font-bold " >Examples</p>
            <br />
            <hr />
            <br />
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

        </section>
    )
}

export default Examples
