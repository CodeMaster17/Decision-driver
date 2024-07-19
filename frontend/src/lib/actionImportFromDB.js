import { LOCAL_HOST } from '@/routes'
export const actionImportFromDB = async () => {
    const res = await fetch(`${LOCAL_HOST}/get-actions`)
    const data = await res.json()
    console.log(data)
    return data
}
