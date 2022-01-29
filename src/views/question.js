import { type } from '@views/home' 
import { category } from '@views/categories'
import Category from '@modules/Category'
import Question from '@modules/Question'

// const toHTML = question => `
//   <h2>Hello from question.js</h2>
//   <hr>
//   <h3>${(type === 'artists')?`Кто автор данной картины "${category.arrForQuestions[0].name}"?`:`Какую картину написал "${category.arrForQuestions[0].author}"?`}</h3>
//   <button class="page-btn" data-btn="question">1</button>
// `
let question;

function renderQuestion(){
  
  question = new Question(type, category)
  console.log(question);

  let wrapper = document.createElement("div")
  wrapper.classList.add('question')
  wrapper.classList.add('page')
  wrapper.innerHTML = `
  <h2>Hello from question.js</h2>
  <hr>
  <h3>${(type === 'artists')?`Кто автор данной картины "${category.arrForQuestions[0].name}"?`:`Какую картину написал "${category.arrForQuestions[0].author}"?`}</h3>
  <button class="page-btn" data-btn="question">1</button>
   `

  const app = document.getElementById('app')
  app.innerHTML = ''
  app.append(wrapper)
  console.log('Hello from question.js');
}


export { question, renderQuestion }