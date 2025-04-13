import { host } from "../const"
import { login } from "./login"

export const register = async (email, password) => {
    await fetch(`${host}/registration`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ email, password })
    }).then(() => {
        login(email, password)
    })
}