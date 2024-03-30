export const propertyImportFromDB = async () => {
    const res = await fetch('https://decision-driver.onrender.com/get-property')
    const data = await res.json()
    return data
}
