class Seguidores {

    constructor() {
        this.quemSeguir = document.querySelector("#quemseguir")
    }

    mostraQuemSeguir(dados){
        let cardSeguidores = ''
        dados.followers.map((seguir) => {
            console.log(seguir)

            cardSeguidores += `
            <ol class="tweet-list">
                <li class="tweet-card">
                  <div class="tweet-content">
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                    <div class="tweet-header">
                      <span class="fullname">
                        <strong>${seguir.nome}</strong>
                      </span>
                      <span class="username">${seguir.usuario}</span>
                    </div>
                    <button class="btn btn-follow">Follow</button>
                  </div>
                </li>
            </ol>
            `
        })
        this.quemSeguir.innerHTML = cardSeguidores
    }
}

class UsuarioFinal {
    constructor() {
        this.infosUsuario = document.querySelector("#informacoes-do-usuario")
        this.dadosUsuario = document.querySelector("#perfil-do-usuario")
        this.nomeUsuario = document.querySelector("#nome-usuario")
    }

    mostraInfos(dados) {
        let novoCardInfos
        console.log("olha os dados",dados)
        novoCardInfos = `
        <ul>
            <li class="profile-stats-item-active">
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Tweets</span>
                  <span class="profile-stats-item profile-stats-item-number">${dados[0].quantidade_tweets}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Following</span>
                  <span class="profile-stats-item profile-stats-item-number">${dados[0].seguindo}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Followers</span>
                  <span class="profile-stats-item profile-stats-item-number">${dados[0].seguidores}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Likes</span>
                  <span class="profile-stats-item profile-stats-item-number">${dados[0].likes}</span>
                </a>
              </li>
        </ul>
        `
        this.infosUsuario.innerHTML = novoCardInfos
    }

    mostraDados(dados) {
        let novoCardDados
        console.log("olha de novo",dados)

        localStorage.setItem("nome", dados[0].nome)
        this.nomeUsuario.innerHTML = localStorage.getItem("nome")

        novoCardDados = `
            <h2 class="profile-element">
                <a>&#64;${dados[0].usuario}</a>
            </h2>
            <a class="profile-element profile-website" hrerf="">
                <i class="octicon octicon-location"></i>&nbsp;${dados[0].local}
            </a>
            <h2 class="profile-element"><i class="octicon octicon-calendar"></i>${dados[0].cadastro}</h2>
            <button class="btn btn-search-bar tweet-to-btn">Tweet to ${dados[0].nome}</button>
        `
        this.dadosUsuario.innerHTML += novoCardDados
    }
}


class MontarTweets {
    constructor() {
        this.listaTweets = document.querySelector("#tweets")
    }

    mostraTweets(dados) {
        let cardTweet = ''
        dados.tweets.map((twitar) => {
            cardTweet += `
            <li class="tweet-card">
              <div class="tweet-content">
                <div class="tweet-header">
                  <span class="fullname">
                    <strong>${twitar.nome}</strong>
                  </span>
                  <span class="username">${twitar.usuario}</span>
                  <span class="tweet-time">- ${twitar.data}</span>
                </div>
                <a>
                  <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                </a>
                <div class="tweet-text">
                  <p class="" lang="es" data-aria-label-part="0">${twitar.mensagem}</p>
                </div>
                <div class="tweet-footer">
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span>${twitar.comentarios}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span>${twitar.compartilhamentos}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span>${twitar.likes}</span>
                  </a>
                </div>
              </div>
            </li>
            `
        })
        this.listaTweets.innerHTML = cardTweet
    }
}