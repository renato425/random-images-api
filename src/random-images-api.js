/*
    Agora sim! O Código fonte do módulo!
    Bom... aqui não tem muita coisa... mas, se quiser olhar ;)
*/
const axios = require("axios")

const riapi = {
    async nekos(endpoint) {
        return new Promise(async (resolve, reject) => {
            if (!endpoint) return reject("[RIAPI] Erro, EndPoint não encontrado!")

            await axios.get(`https://nekos.life/api/v2/img/${endpoint}`).then(function(response) {
                resolve(response.data.url)
            }).catch(err => {
                return reject(err)
            })
        })
    },
    async loveyou(endpoint) {
        return new Promise(async (resolve, reject) => {
            if (!endpoint) return reject("[RIAPI] Erro, EndPoint não encontrado!")

            await axios.get(`https://love-you.xyz/api/v2/${endpoint}`).then(function(response) {
                resolve(response.data.url)
            }).catch(err => {
                return reject(err)
            })
        })
    },
    async dog() {
        return new Promise(async (resolve, reject) => {
            await axios.get(`https://dog.ceo/api/breeds/image/random`).then(function(response) {
                resolve(response.data.message)
            }).catch(err => {
                return reject(err)
            })
        })
    },
    async cat() {
        return new Promise(async (resolve, reject) => {
            await axios.get(`https://api.thecatapi.com/v1/images`).then(function(response) {
                resolve(response.data.url)
            }).catch(err => {
                return reject(err)
            })
        })
    }
}
module.exports = riapi
