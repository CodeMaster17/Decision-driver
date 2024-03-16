function flattenNestedJson(obj) {
    const simpleObj = {};

    function destructure(obj, prefix = '') {
        for (let key in obj) {
            const value = obj[key];
            const type = typeof value;
            const newKey = prefix ? `${prefix}.${key}` : key;

            if (['string', 'boolean', 'number'].includes(type)) {
                simpleObj[newKey] = value;
            } else if (type === 'object' && value !== null) {
                destructure(value, newKey);
            }
        }
    }

    destructure(obj);
    return simpleObj;
}
const result = flattenNestedJson(dummyData);