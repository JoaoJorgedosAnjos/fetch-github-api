import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { getEvents } from "./services/events.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById("btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value;
    
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById("input-search").addEventListener("keyup", (event) => {
    const userName = event.target.value;
    const key = event.which || event.keyCode
    const insEnterKeyPressed = key === 13;
    
    if(validateEmptyInput(userName)) return
       
    if (insEnterKeyPressed) {
        getUserData(userName)
    }
})

async function getUserData(userName) {
    const userResponse = await getUser(userName)

    if(userResponse.message ==="Not Found"){
        screen.renderNotFound()
        return
    }

    const repositoiresResponse = await getRepositories(userName)
    const eventResponse = await getEvents (userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoiresResponse)
    user.setEvents(eventResponse)
    
    screen.renderUser(user)    
}

function validateEmptyInput(userName){
    if(userName.length ===0){
        alert("Preecha o campo o nome do usuário do GitHub ")
        return true
    }
}
