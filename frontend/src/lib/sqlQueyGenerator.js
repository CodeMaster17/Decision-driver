

// switch case according to value
function valueToOperator(value) {
    switch (value) {
        case "Equal":
            return "==";
        case "Not_Equal":
            return "!=";
        case "Greater_Than":
            return ">";
        case "Less_Than":
            return "<";
        case "Greater_Than_or_Equal":
            return ">=";
        case "Less_Than_or_Equal":
            return "<=";
        default:
            return "==";
    }
}



function buildSqlWhereClause(conditions) {
    let whereClause = '';
    if (conditions) {
        conditions.forEach((condition, index) => {
            const { property, operator, value, connectedBy } = condition;
            if (index > 0) {
                whereClause += ` ${connectedBy.toUpperCase()} `;
            }
            const operatorValue = valueToOperator(operator);
            whereClause += `${property} ${operatorValue} '${value}'`;
            if (condition.conditionSchema && condition.conditionSchema.length != 0) {
                whereClause += ` (${buildSqlWhereClause(condition.conditionSchema)})`;
            }
        });
    }
    return whereClause;
}
export function executeSqlQueryAndPerformActions(ruleData) {
    const whereClause = buildSqlWhereClause(ruleData.conditionSchema);
    console.log(`SELECT * FROM users WHERE ${whereClause};`);
    const answer = `SELECT * FROM users WHERE ${whereClause};`
    return answer;

}

const ruleData =
{
    "name": "UserEligibilityRule",
    "description": "Determines if a user is eligible based on age, location, and subscription status.",
    "tested": true,
    "createdAt": "2024-03-15T00:00:00Z",
    "updatedAt": "2024-03-15T00:00:00Z",
    "conditionSchema": [
        {
            "property": "age",
            "operator": "greaterThan",
            "value": "18",
            "connectedBy": "AND",
            "conditionSchema": [
                {
                    "property": "location",
                    "operator": "equals",
                    "value": "US",
                    "connectedBy": "AND",
                    "conditionSchema": [
                        {
                            "property": "subscriptionStatus",
                            "operator": "equals",
                            "value": "active",
                            "connectedBy": "AND"
                        }
                    ]
                }
            ]
        }
    ],
    "actionSchema": [
        {
            "property": "status",
            "result": "eligible",
            "connectedBy": "AND",
            "actionSchema": [
                {
                    "property": "sendEmail",
                    "result": "Eligibility Confirmation",
                    "connectedBy": "AND"
                }
            ]
        }
    ]

};

executeSqlQueryAndPerformActions(ruleData);