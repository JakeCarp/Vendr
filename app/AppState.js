import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snack } from "./Models/Snack.js"

class AppState extends EventEmitter {
  snacks = [
    new Snack('Dorimtos', 1.00, 10, 1, './assets/img/download.jfif'),
    new Snack('Chimpken Numgies', 5.00, 10, 2, './assets/img/chicken.png'),
    new Snack('Moumten Dew', 1.50, 10, 3, './assets/img/1471917-middle.png'),
    new Snack('Dr. Pempter', 1.50, 10, 4, './assets/img/dr.jfif')


  ]
  transactionTotal = 0

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
