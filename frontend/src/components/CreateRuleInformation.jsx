

const CreateRuleInformation = () => {
    return (
        <div className="w-full bg-[#f0f8ff] rounded-lg p-8 flex justify-start items-start gap-4">
            <div>
                <img src="/idea-bulb.png" alt="" className="w-10 h-10" />
            </div>
            <div>
                <p className="text-lg font-light">This page is for creating the rules mannually.
                </p>
                <br />
                <p className="text-lg font-light">

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
                </p>
            </div>
        </div>
    )
}

export default CreateRuleInformation
