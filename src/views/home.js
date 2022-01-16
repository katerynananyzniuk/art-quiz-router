export default function home(){
  let h = document.createElement("div")
  h.innerHTML = `
  <h2>Hello from home.js</h2>
  `
  h.classList.add('home')
  h.classList.add('page')
  let body = document.querySelector('body')
  body.append(h)
}