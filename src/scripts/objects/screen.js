const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        console.log(user)
        this.userProfile.innerHTML = `<div class ="info">
                              <img src ="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                             <div class = "data">
                                 <h1>${user.name ?? "não possui nome cadastrado 🥲"}</h1>
                                 <p>${user.bio ?? "não possui bio cadastrada 🥲"}</p>
                                 <p>Seguidores: ${user.followers}</p>
                                 <p>Seguindo: ${user.following}</p>
                             </div>
                         </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += 
        `<li><a href="${repo.html_url}" target="_blank">${repo.name} <br><br>      
                                        <span>🍴${repo.forks}</span>
                                        <span>⭐️${repo.stargazers_count}</span>
                                        <span>👀${repo.watchers_count}</span>
                                        <span>👨🏾‍💻${repo.language??"❌"}</span>
                                        </a> </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class ="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = "";
        user.events.forEach(events => {
            if (events.payload.commits !== undefined) {
                eventsItens += `<li><h3>${events.repo.name}</h3><p> -${events.payload.commits[0].message}</p></li>`
            } else {
                eventsItens += `<li><h3>${events.repo.name}</h3><p> - no commit</p></li>`
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class ="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                                </div>`
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }