

// This function takes a JSON object as input and returns a SQL query string.
export function generateSQLQuery(json) {
    const conditions = json.conditionSchema || [];
    let query = "SELECT * FROM your_table_name WHERE ";
    let isFirstCondition = true;

    function processCondition(condition) {
        if (condition.conditionSchema && condition.conditionSchema.length > 0) {
            // Process nested conditions
            let nestedQuery = "(";
            condition.conditionSchema.forEach((nestedCondition, index) => {
                nestedQuery += processCondition(nestedCondition);
                if (index < condition.conditionSchema.length - 1) {
                    nestedQuery += " " + condition.connectedBy + " ";
                }
            });
            nestedQuery += ")";
            return nestedQuery;
        } else {
            // Process simple condition
            let operator = condition.operator.toLowerCase();
            switch (operator) {
                case "Greater_Than":
                    operator = ">";
                    break;
                case "less_than":
                    operator = "<";
                    break;
                case "Equal":
                    operator = "=";
                    break;
                case "Not_Equal":
                    operator = "<>";
                    break;
                case "Less_Than":
                    operator = "<";
                    break;
                case "Greater_Than_or_Equal":
                    operator = ">=";
                    break;
                case "Less_Than_or_Equal":
                    operator = "<=";
                    break;
                default:
                    operator = "=";
            }
            return `${condition.property} ${operator} '${condition.value}'`;
        }
    }

    conditions.forEach((condition, index) => {
        if (!isFirstCondition) {
            query += " " + condition.connectedBy + " ";
        }
        query += processCondition(condition);
        isFirstCondition = false;
    });

    return query;
}



// const ruleData =
// {
//     "name": "UserEligibilityRule",
//     "description": "Determines if a user is eligible based on age, location, and subscription status.",
//     "tested": true,
//     "createdAt": "2024-03-15T00:00:00Z",
//     "updatedAt": "2024-03-15T00:00:00Z",
//     "conditionSchema": [
//         {
//             "property": "age",
//             "operator": "greaterThan",
//             "value": "18",
//             "connectedBy": "AND",
//             "conditionSchema": [
//                 {
//                     "property": "location",
//                     "operator": "equals",
//                     "value": "US",
//                     "connectedBy": "AND",
//                     "conditionSchema": [
//                         {
//                             "property": "subscriptionStatus",
//                             "operator": "equals",
//                             "value": "active",
//                             "connectedBy": "AND"
//                         }
//                     ]
//                 }
//             ]
//         }
//     ],
//     "actionSchema": [
//         {
//             "property": "status",
//             "result": "eligible",
//             "connectedBy": "AND",
//             "actionSchema": [
//                 {
//                     "property": "sendEmail",
//                     "result": "Eligibility Confirmation",
//                     "connectedBy": "AND"
//                 }
//             ]
//         }
//     ]

// };
