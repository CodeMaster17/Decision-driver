import { RENDER_LINK } from '@/routes'
export const actionImportFromDB = async () => {
    const res = await fetch(`${RENDER_LINK}/get-actions`)
    const data = await res.json()
    console.log(data)
    return data
}
