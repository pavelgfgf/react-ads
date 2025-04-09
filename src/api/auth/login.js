import { host } from "../const"


export const login = async (email, password) => {
    const response = await fetch(`${host}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password})
    })
    const data = await response.json()
    localStorage.setItem('token', data.token)
    return data
}