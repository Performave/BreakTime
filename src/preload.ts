import { Titlebar, Color } from 'custom-electron-titlebar'

window.addEventListener('DOMContentLoaded', () => {
  new Titlebar({
    backgroundColor: Color.fromHex('#404364'),
    maximizable: false,
  })
})
