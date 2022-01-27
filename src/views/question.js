import { type } from '../views/home.js'
import { category } from '../views/categories.js'
import Question from '../modules/Question.js'


function renderQuestion(){
  let q = document.createElement("div")
  q.innerHTML = `
  <h2>Hello from question.js</h2>
  <hr>
  <h3>${(type.type === 'artists')?`Кто автор данной картины "${category.questions[0]}"?`:`Какую картину написал "${category.questions[0]}"?`}</h3>
  `
  q.classList.add('question')
  q.classList.add('page')
  let app = document.querySelector('#app')
  app.innerHTML = ''
  app.append(q)
  console.log('Hello from question.js');
}

let question = 'question'
export { question, renderQuestion }