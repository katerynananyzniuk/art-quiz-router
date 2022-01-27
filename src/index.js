
import renderHome from '@views/home'
import Route from '@js/Route'
import Router from '@js/Router'
import '@styles/styles.css'
import Category from '@modules/Category'


function init() {
  let router = new Router([
    new Route('home', 'home.js', true),            
    new Route('settings', 'settings.js'),
    new Route('categories', 'categories.js'),
        new Route('question', 'question.js'),
      ]);
      return router
}
init();

console.log('Hello from the Home entry point!');
// Router.modules.home().then(module => module.printMessage());
// Router.modules.categories().then(module => module.printMessage());
// Router.modules.question().then(module => module.printMessage());
// Router.modules.settings().then(module => module.printMessage());

let portrait = new Category('artists', 'portrait', 1)
portrait.questions


let h = document.getElementById('home')
h.addEventListener('click', homeHandler)

let c = document.getElementById('categories')
c.addEventListener('click', categoriesHandler)

let q = document.getElementById('question')
q.addEventListener('click', questionHandler)

let s = document.getElementById('settings')
s.addEventListener('click', settingsHandler)

function homeHandler() {
  Router.modules.home().then(module => module.renderHome());
}

function categoriesHandler() {
  Router.modules.categories().then(module => module.renderCategories());
}

function questionHandler() {
  Router.modules.question().then(module => module.renderQuestion());
}

function settingsHandler() {
  Router.modules.settings().then(module => module.renderSettings());
}