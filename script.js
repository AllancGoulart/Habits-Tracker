const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button") //pega o button que esta dentro do header

button.addEventListener("click", add) //adiciona um funcão que vai ficar ouvindo o evento
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso🛑")
    return
  }

  alert("Adicionado com sucesso✔")
  nlwSetup.addDay(today)
} //function que add dia atual e verifica se não está repetindo

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
} //save o status atual da aplicação ao atualizar

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //pegou do localStorage e transformou em objeto
nlwSetup.setData(data)
nlwSetup.load()

// const data = {
//   run: ["01-01", "01-02", "01-06"],
//   water: ["01-03", "01-05", "01-05"],
//   food: ["01-01", "01-02", "01-06"],
// }
