import Type from "../modules/Type.js"

function renderHome(){
  let h = document.createElement("div")
  h.innerHTML = `
  <h2>Hello from home.js</h2>
  <button class="page-btn">Artists</button>
  <button class="page-btn">Pictures</button>
  `
  h.classList.add('home')
  h.classList.add('page')
  let app = document.querySelector('#app')
  app.innerHTML = ''
  app.append(h)
  console.log('Hello from home.js');
}

let type = new Type('artists') // pictures

export { type, renderHome }