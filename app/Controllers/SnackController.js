import { ProxyState } from "../AppState.js";
import


    //private
    function _drawSnacks() {
        let snacks = ProxyState.snacks
        let template = ``
        snacks.forEach(s => {
            template += s.cardTemplate
        })
    }