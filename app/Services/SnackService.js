import { ProxyState } from "../AppState";


class SnackService {
    purchaseItem(targetId) {
        let target = ProxyState.snacks.find(s => s.id == targetId)
        if (target.qty > 0) {
            target.qty--
        } else {

        }

    }
}
