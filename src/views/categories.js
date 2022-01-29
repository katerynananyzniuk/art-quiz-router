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
  const wrapper = document.createElement("div")
  wrapper.classList.add('categories')
  wrapper.classList.add('page')
  wrapper.innerHTML = `
  <h2>Hello from categories.js</h2>

  <button class="page-btn" data-btn="category"><span>${portrait.number}</span> ${portrait.title}</button>
  <button class="page-btn" data-btn="category"><span>${landscape.number}</span> ${landscape.title}</button>
  <button class="page-btn" data-btn="category"><span>${stillLife.number}</span> ${stillLife.title}</button>
  <button class="page-btn" data-btn="category"><span>${graphic.number}</span> ${graphic.title}</button>
  <button class="page-btn" data-btn="category"><span>${antique.number}</span> ${antique.title}</button>
  <button class="page-btn" data-btn="category"><span>${avangard.number}</span> ${avantGarde.title}</button>
  <button class="page-btn" data-btn="category"><span>${renaissane.number}</span> ${renaissane.title}</button>
  <button class="page-btn" data-btn="category"><span>${surrealism.number}</span> ${surrealism.title}</button>
  <button class="page-btn" data-btn="category"><span>${kitch.number}</span> ${kitch.title}</button>
  <button class="page-btn" data-btn="category"><span>${minimalism.number}</span> ${minimalism.title}</button>
  <button class="page-btn" data-btn="category"><span>${avangard.number}</span> ${avangard.title}</button>
  <button class="page-btn" data-btn="category"><span>${industrial.number}</span> ${industrial.title}</button>
  `
  const app = document.getElementById('app')
  app.innerHTML = ''
  app.append(wrapper)
  console.log('Hello from categories.js');

  document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    if (btnType === 'category') {
      let categoryNumber = event.target.innerText.split(' ')[0]
      let categoryTitle = event.target.innerText.split(' ')[1]
      console.log("Chosen category is", categoryTitle,"category number is", categoryNumber, "category title is", categoryTitle)
      category = new Category(type, categoryTitle, categoryNumber)
      Router.modules.question().then(module => module.renderQuestion());
    }
  })
}

export { category, renderCategories }

