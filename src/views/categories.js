import { type } from '../views/home.js'
import Category from '../modules/Category.js'

function renderCategories(){
  let c = document.createElement("div")
  c.innerHTML = `
  <h2>Hello from categories.js</h2>

  <button class="page-btn">${portrait.number} ${portrait.name}</button>
  <button class="page-btn">${landscape.number} ${landscape.name}</button>
  <button class="page-btn">${stillLife.number} ${stillLife.name}</button>
  <button class="page-btn">${graphic.number} ${graphic.name}</button>
  <button class="page-btn">${antique.number} ${antique.name}</button>
  <button class="page-btn">${avangard.number} ${avantGarde.name}</button>
  <button class="page-btn">${renaissane.number} ${renaissane.name}</button>
  <button class="page-btn">${surrealism.number} ${surrealism.name}</button>
  <button class="page-btn">${kitch.number} ${kitch.name}</button>
  <button class="page-btn">${minimalism.number} ${minimalism.name}</button>
  <button class="page-btn">${avangard.number} ${avangard.name}</button>
  <button class="page-btn">${industrial.number} ${industrial.name}</button>
  `
  c.classList.add('categories')
  c.classList.add('page')
  let app = document.querySelector('#app')
  app.innerHTML = ''
  app.append(c)
  console.log('Hello from categories.js');
}

let portrait = new Category(type.type, 'portrait', 1)
let landscape = new Category(type.type, 'landscape', 2)
let stillLife = new Category(type.type, 'still-life', 3)
let graphic = new Category(type.type, 'graphic', 4)
let antique = new Category(type.type, 'antique', 5)
let avantGarde = new Category(type.type, 'avant-garde', 6)
let renaissane = new Category(type.type, 'renaissane', 7)
let surrealism = new Category(type.type, 'surrealism', 8)
let kitch = new Category(type.type, 'kitch', 9)
let minimalism = new Category(type.type, 'minimalism', 10)
let avangard = new Category(type.type, 'avangard', 11)
let industrial = new Category(type.type, 'industrial', 12)

let category = portrait
console.log(category.questions[0]);

export { category, renderCategories }

