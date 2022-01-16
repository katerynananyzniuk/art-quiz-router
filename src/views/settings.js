export default function settings(){
  let s = document.createElement("div")
  s.innerHTML = `
  <h2>Hello from settings.js</h2>
  `
  s.classList.add('page')
  s.classList.add('settings')
  let body = document.querySelector('body')
  body.append(s)
}