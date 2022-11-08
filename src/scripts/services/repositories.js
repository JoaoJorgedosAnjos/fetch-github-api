import { baseUrl, repositoreisQuantity } from "/src/scripts/variables.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoreisQuantity}`)
    return await response.json()
}

console.log(await getRepositories("devemdobro"))
export { getRepositories }