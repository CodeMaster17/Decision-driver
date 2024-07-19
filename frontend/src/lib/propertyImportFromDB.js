import { RENDER_LINK } from "@/routes"

export const propertyImportFromDB = async () => {
    const res = await fetch(`${RENDER_LINK}/get-property`)
    const data = await res.json()
    return data
}
