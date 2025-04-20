import { host } from "../const"

export const getAds = async () => {
    const response = await fetch(`${host}/ads`)
    const data = await response.json()
    return data
}


export const setAds = async (form_data) => {
    const response = await fetch(`${host}/ads`, {
        method: 'POST',
        body: form_data
    })
    const data = await response.json()
    console.log(JSON.stringify(data));
    return data
}