import { ProxyState } from "../AppState.js";

class SnackService {
    purchaseItem(targetId) {
        let target = ProxyState.snacks.find(s => s.id == targetId)
        let total = ProxyState.transactionTotal
        if (target.qty > 0 && target.price <= total) {
            target.qty--
            ProxyState.transactionTotal -= target.price
            ProxyState.snacks = ProxyState.snacks
        } else if (target.price > total) {
            window.alert('you can\'t afford this item')
        } else {
            window.alert('This item is unavailable')
        }
    }
    addMoney(num) {
        ProxyState.transactionTotal += num
        ProxyState.transactionTotal = ProxyState.transactionTotal
    }
}


export const snackService = new SnackService()