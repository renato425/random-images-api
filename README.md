# Random Images API
Imagens aleatórias para seu gosto!

API mais focada em imagens de neko e nsfw. Mas, também temos imagens de doguinhos e gatinhos 😻🐶

# O Que eu vou encontrar aqui?
* Documentação da API
* Exemplos

# Exemplos
Nekos.life
```javascript
const riapi = require("random-images-api")

riapi.nekos("meow").then(url => console.log(url))
```
Loveyou
```js
riapi.loveyou("boobs").then(url => console.log(url))
```
Dog.ceo
```js
riapi.dog().then(url => console.log(url))
```
TheCatAPI
```js
riapi.cat().then(url => console.log(url))
```

# Documentação
Nekos.life
```js
const riapi = require("random-images-api")
riapi.nekos("endpoint").then(url => /**seu código**/)
```
EndPoints
EndPoint | Imagens
---------|---------
femdom | [Imagem Exemplo](https://cdn.nekos.life/femdom/femdom20.jpg)
tickle | [Imagem Exemplo](https://cdn.nekos.life/tickle/tickle_015.gif)
classic | [Imagem Exemplo](https://cdn.nekos.life/classic/classic288.gif)
ngif | [Imagem Exemplo](https://cdn.nekos.life/ngif/neko_076.gif)
erofeet | [Imagem Exemplo](https://cdn.nekos.life/erofeet/erofeet56.jpg)
meow | [Imagem Exemplo](https://cdn.nekos.life/meow/0398A.jpg)
erok | [Imagem Exemplo](https://cdn.nekos.life/erok/ero_kitsune_017.png)
poke | [Imagem Exemplo](https://cdn.nekos.life/poke/poke_018.gif)
les | [Imagem Exemplo](https://cdn.nekos.life/les/OnlyG112.gif)
hololewd | [Imagem Exemplo](https://cdn.nekos.life/hololewd/lewd_holo_03.jpg)
lewdk | [Imagem Exemplo](https://cdn.nekos.life/lewdk/lewd_kitsune030.jpg)
keta | [Imagem Exemplo](https://cdn.nekos.life/keta/ke-ta_181.png)
feetg | [Imagem Exemplo](https://cdn.nekos.life/feetg/Feet43.gif)
nsfw_neko_gif | [Imagem Exemplo](https://cdn.nekos.life/nsfw_neko_gif/H_neko03.gif)
