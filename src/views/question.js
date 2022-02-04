import { type } from '@views/home' 
import { category } from '@views/categories'
import Router from "@js/Router"
import Question from '@modules/Question'
import images from '@assets/images'
 
let question
let arr

function renderQuestion(){
  console.log('Hello from question.js');
  
  question = new Question(type, category)
  arr = question.arrForQuestions

  const toHTML = item => `
  <h3>${(type === 'artists')
  ?`Кто автор данной картины "${item.name}"?`
  :`Какую картину написал ${item.author}?`}</h3>

  ${mixAnswers(rightAnswer(item), otherAnswer(images), otherAnswer(images), otherAnswer(images))}
  `

  function rightAnswer(el) {
    return `<button class="page-btn right" data-btn="answer">${(type === 'artists')
    ?`${el.author}`:`${el.name}`}</button>`;
  }
  function otherAnswer(imgs) {
    return `<button class="page-btn other" data-btn="answer">${(type === 'artists')
    ?`${imgs.map(el=>el.author)[generateRandomNumber(0,240)]}`:`${imgs.map(el=>el.name)[generateRandomNumber(0,240)]}`}</button>`;
  }
  function generateRandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  function mixAnswers(rightAnswer, otherAnswer1, otherAnswer2, otherAnswer3) {
    let index = generateRandomNumber(1, 4)
    switch(index) {
      case 1: return `${rightAnswer} ${otherAnswer1} ${otherAnswer2} ${otherAnswer3}`
      break
      case 2: return `${otherAnswer1} ${rightAnswer} ${otherAnswer2} ${otherAnswer3}`
      break
      case 3: return `${otherAnswer1} ${otherAnswer2} ${rightAnswer} ${otherAnswer3}`
      break
      case 4: return `${otherAnswer1} ${otherAnswer2} ${otherAnswer3} ${rightAnswer}`
    }
  }

  const html =  arr.map(toHTML).join('')
 
  let wrapper = document.createElement("div")
  wrapper.classList.add('question')
  wrapper.classList.add('page')
  wrapper.innerHTML = html

  const app = document.getElementById('app')
  app.innerHTML = ''
  app.append(wrapper)
}


export { question, arr, renderQuestion }