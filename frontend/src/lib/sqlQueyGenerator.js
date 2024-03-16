

function buildSqlWhereClause(conditions) {
    let whereClause = '';
    conditions.forEach((condition, index) => {
        const { property, operator, value, connectedBy } = condition;
        if (index > 0) {
            whereClause += ` ${connectedBy.toUpperCase()} `;
        }
        whereClause += `${property} ${operator} '${value}'`;
        if (condition.conditionSchema) {
            whereClause += ` (${buildSqlWhereClause(condition.conditionSchema)})`;
        }
    });
    return whereClause;
}
function executeSqlQueryAndPerformActions(ruleData) {
    const whereClause = buildSqlWhereClause(ruleData.conditionSchema);
    console.log(`SELECT * FROM users WHERE ${whereClause};`);

    // Simulate query execution and action based on results
    // In a real scenario, you would execute the SQL query here and perform actions based on the results
    console.log('Actions based on query results would be performed here.');
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