import JsonFormatter from 'react-json-formatter'

const jsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' }
}
// eslint-disable-next-line react/prop-types
const ViewRaw = ({ json }) => {

    return (
        <>
            <JsonFormatter json={json} tabWith={4} jsonStyle={jsonStyle} />
        </>
    )
}

export default ViewRaw
