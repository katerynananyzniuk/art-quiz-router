
export default function categories(){
  let c = document.createElement("div")
  c.innerHTML = `
  <h2>Hello from categories.js</h2>
  `
  c.classList.add('categories')
  c.classList.add('page')
  let body = document.querySelector('body')
  body.append(c)
}