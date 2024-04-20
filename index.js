let participantes = [
  {
  nome: "Maria Burkhardt",
  email: "maria@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: 'Joana Jesus',
    email: 'joane@gmail.com',
    dataInscricao: new Date(2024, 1, 16, 18, 40),
    dataCheckIn: null
  },
 {
    nome: 'Pedro Souza',
    email: 'pedro@gmail.com',
    dataInscricao: new Date(2024, 0, 10, 17, 15),
    dataCheckIn: new Date(2024, 0, 20, 21, 30)
  },
  {
    nome: 'Ana Silva',
    email: 'ana@gmail.com',
    dataInscricao: new Date(2024, 3, 5, 14, 10),
    dataCheckIn: new Date(2024, 3, 15, 18, 25)
  },
  {
    nome: 'Lucas Santos',
    email: 'lucas@gmail.com',
    dataInscricao: new Date(2024, 4, 12, 13, 5),
    dataCheckIn: null
  },
  {
    nome: 'Mariana Costa',
    email: 'mariana@gmail.com',
    dataInscricao: new Date(2024, 6, 18, 10, 55),
    dataCheckIn: new Date(2024, 6, 28, 15, 10)
  },
  {
    nome: 'Gustavo Oliveira',
    email: 'gustavo@gmail.com',
    dataInscricao: new Date(2024, 8, 3, 9, 50),
    dataCheckIn: new Date(2024, 8, 13, 14, 5)
  },
  {
    nome: 'Carla Ferreira',
    email: 'carla@gmail.com',
    dataInscricao: new Date(2024, 10, 20, 8, 45),
    dataCheckIn: new Date(2024, 10, 30, 13, 0)
  },
  {
    nome: 'Ricardo Almeida',
    email: 'ricardo@gmail.com',
    dataInscricao: new Date(2024, 7, 28, 7, 40),
    dataCheckIn: null
  },
  {
    nome: 'Juliana Pereira',
    email: 'juliana@gmail.com',
    dataInscricao: new Date(2024, 11, 15, 6, 35),
    dataCheckIn: null
  }
];

const criarnovoparticipante = (participante) => {
   const dataInscricao = dayjs(Date.now())
   .to(participante.dataInscricao)
   
   let dataCheckIn = dayjs(Date.now())
   .to(participante.dataCheckIn)
   
   //condicional
   if(participante.dataCheckIn == null){
    dataCheckIn = `
    <button
      data-email='${participante.email}'
      onclick='fazerCheckIn(event)'
    >
      Confirmar check-in
    </button>
    `
   }
   return `
   <tr>
       <td>
         <strong>
           ${participante.nome}
         </strong>
         <br>
         <small>
           ${participante.email}
         </small>
       </td>
       <td>${dataInscricao}</td>
       <td>${dataCheckIn}</td>
     </tr>
   `
}

const atualizarLista = (participantes) => {
  let output = ''
  //estrutura de repetição - loop
  for(let participante of participantes){
    output = output + criarnovoparticipante(participante)
  }

  //substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}
atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosFormulario = new FormData(event.target)

  const participante = {
    nome: dadosFormulario.get('nome'),
    email: dadosFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null    
  }

  //verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste){
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value=""
  event.target.querySelector('[name="email"]').value=""
}

const fazerCheckIn = (event) => {
  //confirmar se realmenter quer checkin
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  
  if(confirm(mensagemConfirmacao) == false) {
    return
  }
   

  //econtrar participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  )

  //atualizar o checkin do participante
  participante.dataCheckIn = new Date ()

  //atualizar a lista de participantes
  atualizarLista(participantes)
}