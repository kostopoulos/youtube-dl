// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {remote} = require('electron')
const {Menu, MenuItem} = remote

const menu = new Menu()
console.log('start menu append')
menu.append(new MenuItem({label: 'MenuItem1', click() { console.log('item 1 clicked') }}))
menu.append(new MenuItem({type: 'separator'}))
menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}))
console.log('appended menu')

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  console.log('addEventListener')
  menu.popup(remote.getCurrentWindow())
}, false)