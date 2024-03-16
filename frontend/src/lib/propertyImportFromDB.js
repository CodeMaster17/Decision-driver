export const propertyImportFromDB = async () => {
    const res = await fetch('http://localhost:5002/get-property')
    const data = await res.json()
    return data
}
