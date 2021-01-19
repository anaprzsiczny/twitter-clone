class Followers {
    quemSeguir() {
      return fetch("./follow.json")
    }
}

class Tweets {
    dadosDoTweet() {
        return fetch("./tweets.json")
    }
}

class User {
    dadosDoUsuario() {
        return fetch("./usuario.json")
    }
}