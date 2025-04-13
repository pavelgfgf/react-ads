import { host } from "../const"

export const getAds = async () => {
    const response = await fetch(`${host}/ads`)
    const data = await response.json()
    return data
}

export const setAds = async (name, description, price, image) => {
    const response = await fetch(`${host}/ads`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description, price, image})
    })
    const data = await response.json()
    return data
}