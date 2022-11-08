import { baseUrl , commitsQuantatity  } from "../variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${commitsQuantatity}`)
    return await response.json()
}

export { getEvents }

