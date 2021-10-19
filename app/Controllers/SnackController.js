import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";


//private
function _drawSnacks() {
    let snacks = ProxyState.snacks
    let template = ``
    snacks.forEach(s => {
        template += s.cardTemplate
    })
    document.getElementById('machine').innerHTML = template
}
function _drawTotal() {
    let total = ProxyState.transactionTotal
    document.getElementById('total').innerText = `${total}`
}



export class SnackController {
    constructor() {
        ProxyState.on('snacks', _drawSnacks)
        ProxyState.on('transactionTotal', _drawTotal)
        _drawSnacks()
    }

    purchaseItem(itemId) {
        snackService.purchaseItem(itemId)
    }

    addMoney(num) {
        snackService.addMoney(num)
    }
}