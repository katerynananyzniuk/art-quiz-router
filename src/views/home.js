import Type from "@modules/Type"
import Router from "@js/Router"

const artists =  new Type('artists')
const pictures = new Type('pictures')

const types = [ 
  artists, 
  pictures
]

let type = undefined; 

function renderHome(){
  const wrapper = document.createElement("div")
  wrapper.classList.add('home')
  wrapper.classList.add('page')
  wrapper.innerHTML = `
  <h2>Hello from home.js</h2>
  <button class="page-btn" data-btn="type">${artists.title}</button>
  <button class="page-btn" data-btn="type">${pictures.title}</button>
  `
  
  const app = document.getElementById('app')
  app.innerHTML = ''
  app.append(wrapper)
  console.log('Hello from home.js');

  document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    if (btnType === 'type') {
      type = event.target.innerText
      console.log("Chosen type is", type);
      Router.modules.categories().then(module => module.renderCategories());
    }
  })
}

export { type, renderHome }