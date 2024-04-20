# HTML
*hipertext*
-leva para a referencia do link (usam muito em site de fofoca)

```js 
DATAS:
//biblioteca de terceiros
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/relativeTime.js"></script>
<script>dayjs.extend(window.dayjs_plugin_relativeTime)</script>

<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/pt-br.js"></script>
<script>dayjs.locale('pt-br')</script>
```

*markup(marcação)*
- tag
- atributo

#CSS
Cascading StyleSheet

```css
/*declarações*/
body {
  font: 16px sans-serif;
  background-color: #cfcae1;
  color: #d75c5c;
}
```


# JavaScript
```js
// variaveis= para usar mais de uma vez a uma variavel
const mensagem = 'oi, tudo bem?'
//tipos de dados
 //number
 //string
//função
alert(mensagem)

//objeto javascript={}
const participante = {
  nome: 'Maria Burkhardt',
  email: 'maria@gmail.com',
  dataInscrição: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

//array []
let participantes = [
  {
  nome: 'Maria Burkhardt',
  email: 'maria@gmail.com',
  dataInscrição: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
},
]

  //estrutura de repetição - loop
  for(let participante of participantes){
  //faça alguma coisa aqui
  //enquanto tiver participantes nessa lista
    output = output + criarnovoparticipante(participante)
  }

<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/relativeTime.js"></script>
<script>dayjs.extend(window.dayjs_plugin_relativeTime)</script>

<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/pt-br.js"></script>
<script>dayjs.locale('pt-br')</script>

```