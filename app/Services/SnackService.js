import { ProxyState } from "../AppState.js";

class SnackService {
    purchaseItem(targetId) {
        let target = ProxyState.snacks.find(s => s.id == targetId)
        let total = ProxyState.transactionTotal
        if (target.qty > 0 && target.price <= total) {
            target.qty--
            total -= target.price
            ProxyState.snacks = ProxyState.snacks
            return
        } else if (target.price > total) {
            return window.alert('you can\'t afford this item')
        }
        return window.alert('This item is unavailable')
    }
    addMoney(num) {
        ProxyState.transactionTotal += num
        ProxyState.transactionTotal = ProxyState.transactionTotal
    }
}


export const snackService = new SnackService()