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

  ${mixAnswers(rightAnswer(item), wrongAnswer(images), wrongAnswer(images), wrongAnswer(images))}
  `

  function rightAnswer(el) {
    return `<button class="page-btn right" data-btn="answer">${(type === 'artists')
    ?`${el.author}`:`${el.name}`}</button>`;
  }
  function wrongAnswer(imgs) {
    return `<button class="page-btn wrong" data-btn="answer">${(type === 'artists')
    ?`${imgs.map(el=>el.author)[generateRandomNumber(0,240)]}`:`${imgs.map(el=>el.name)[generateRandomNumber(0,240)]}`}</button>`;
  }
  function generateRandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  function mixAnswers(rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
    let index = generateRandomNumber(1, 4)
    switch(index) {
      case 1: return `${rightAnswer} ${wrongAnswer1} ${wrongAnswer2} ${wrongAnswer3}`
      break
      case 2: return `${wrongAnswer1} ${rightAnswer} ${wrongAnswer2} ${wrongAnswer3}`
      break
      case 3: return `${wrongAnswer1} ${wrongAnswer2} ${rightAnswer} ${wrongAnswer3}`
      break
      case 4: return `${wrongAnswer1} ${wrongAnswer2} ${wrongAnswer3} ${rightAnswer}`
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

  document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    if (btnType === 'answer') {
      if (event.target.classList.contains('right')) {
        console.log(event.target.innerHTML + ' right');
        alert('right!')
        // let response = true
        // let result = new Result(response, )
        // Router.modules.result().then(module => module.renderResult());
      } else if (event.target.classList.contains('wrong')) {
        console.log(event.target.innerHTML + ' wrong');
        alert('wrong!')
        // let response = false
        // let result = new Result(response, )
        // Router.modules.result().then(module => module.renderResult());
      }
    }
  })
}


export { question, arr, renderQuestion }