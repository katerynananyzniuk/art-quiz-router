import { type } from '@views/home.js'
import Category from '@modules/Category.js'
import Router from "@js/Router"

let category = undefined

let portrait = new Category(type, 'portrait', 1)
let landscape = new Category(type, 'landscape', 2)
let stillLife = new Category(type, 'still-life', 3)
let graphic = new Category(type, 'graphic', 4)
let antique = new Category(type, 'antique', 5)
let avantGarde = new Category(type, 'avant-garde', 6)
let renaissane = new Category(type, 'renaissane', 7)
let surrealism = new Category(type, 'surrealism', 8)
let kitch = new Category(type, 'kitch', 9)
let minimalism = new Category(type, 'minimalism', 10)
let avangard = new Category(type, 'avangard', 11)
let industrial = new Category(type, 'industrial', 12)

const categories = [
  portrait,
  landscape,
  stillLife,
  graphic,
  antique,
  avantGarde,
  renaissane,
  surrealism,
  kitch,
  minimalism,
  avangard,
  industrial
]

function renderCategories(){
  console.log('Hello from categories.js');
  const wrapper = document.createElement("div")
  wrapper.classList.add('categories')
  wrapper.classList.add('page')
  wrapper.innerHTML = `
  <h2>Hello from categories.js</h2>

  <button class="page-btn" data-btn="category">${portrait.title} <span>${portrait.number}</span></button>
  <button class="page-btn" data-btn="category">${landscape.title} <span>${landscape.number}</span></button>
  <button class="page-btn" data-btn="category">${stillLife.title} <span>${stillLife.number}</span></button>
  <button class="page-btn" data-btn="category">${graphic.title} <span>${graphic.number}</span></button>
  <button class="page-btn" data-btn="category">${antique.title} <span>${antique.number}</span></button>
  <button class="page-btn" data-btn="category">${avantGarde.title} <span>${avangard.number}</span></button>
  <button class="page-btn" data-btn="category">${renaissane.title} <span>${renaissane.number}</span></button>
  <button class="page-btn" data-btn="category">${surrealism.title} <span>${surrealism.number}</span></button>
  <button class="page-btn" data-btn="category">${kitch.title} <span>${kitch.number}</span></button>
  <button class="page-btn" data-btn="category">${minimalism.title} <span>${minimalism.number}</span></button>
  <button class="page-btn" data-btn="category">${avangard.title} <span>${avangard.number}</span></button>
  <button class="page-btn" data-btn="category">${industrial.title} <span>${industrial.number}</span></button>
  `
  const app = document.getElementById('app')
  app.innerHTML = ''
  app.append(wrapper)

  document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    if (btnType === 'category') {
      let categoryNumber = event.target.innerText.toLowerCase().split(' ')[1]
      let categoryTitle = event.target.innerText.toLowerCase().split(' ')[0]

      console.log("Chosen category is "+categoryTitle+". Category number is "+categoryNumber+".")
      category = new Category(type, categoryTitle, categoryNumber)
      Router.modules.question().then(module => module.renderQuestion());
    }
  })
}

export { category, renderCategories }

