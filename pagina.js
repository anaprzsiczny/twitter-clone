const novoSeguidor = new Followers()
const cardNovoSeguidor = new Seguidores()

novoSeguidor.quemSeguir()
    .then(resposta => {
        resposta.json()
        .then(dados => {
            cardNovoSeguidor.mostraQuemSeguir(dados)
        })
    })


const usuario = new User()
const cardUsuario = new UsuarioFinal()

usuario.dadosDoUsuario()
    .then(resposta => {
        resposta.json()
        .then(dados => {
            console.log(dados)
            cardUsuario.mostraInfos(dados)
            cardUsuario.mostraDados(dados)
        })
    })


const novoTweet = new Tweets()
const novoCardTweet = new MontarTweets()

novoTweet.dadosDoTweet()
    .then(resposta => {
        resposta.json()
        .then(dados => {
            console.log(dados)
            novoCardTweet.mostraTweets(dados)
        })
    })