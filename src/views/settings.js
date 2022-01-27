function renderSettings(){
  let s = document.createElement("div")
  s.innerHTML = `
  <h2>Hello from settings.js</h2>
  `
  s.classList.add('page')
  s.classList.add('settings')
  let app = document.querySelector('#app')
  app.innerHTML = ''
  app.append(s)
  console.log('Hello from settings.js');
}

export { renderSettings }