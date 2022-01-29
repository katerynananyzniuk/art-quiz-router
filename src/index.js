import Router from '@js/Router'
import '@styles/styles.css'
import Category from '@modules/Category'


// function init() {
//   let router = new Router([
//     new Route('home', 'home.js', true),            
//     new Route('settings', 'settings.js'),
//     new Route('categories', 'categories.js'),
//         new Route('question', 'question.js'),
//       ]);
//       return router
// }
// init();

console.log('Hello from the Home entry point!');

let portrait = new Category('artists', 'portrait', 1)
portrait.questions


const home = document.getElementById('home')
home.addEventListener('click', homeHandler)

function homeHandler() {
  Router.modules.home().then(module => module.renderHome());
}



// const categories = document.getElementById('categories')
// categories.addEventListener('click', categoriesHandler)
// function categoriesHandler() {
//   Router.modules.categories().then(module => module.renderCategories());
// }

// const question = document.getElementById('question')
// question.addEventListener('click', questionHandler)
// function questionHandler() {
//   Router.modules.question().then(module => module.renderQuestion());
// }

// const settings = document.getElementById('settings')
// settings.addEventListener('click', settingsHandler)
// function settingsHandler() {
//   Router.modules.settings().then(module => module.renderSettings());
// }