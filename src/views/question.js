export default function question(){
  let q = document.createElement("div")
  q.innerHTML = `
  <h2>Hello from question.js</h2>
  `
  q.classList.add('question')
  q.classList.add('page')
  let body = document.querySelector('body')
  body.append(q)
}