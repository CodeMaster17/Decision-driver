import { RENDER_LINK } from "@/routes"

export const propertyImportFromDB = async (sortOrder = 'asc') => {
    const res = await fetch(`${RENDER_LINK}/get-property/?sortOrder=${sortOrder}`)
    const data = await res.json()
    return data
}
