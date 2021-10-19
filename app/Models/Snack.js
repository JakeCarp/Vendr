


export class Snack {
    constructor(name, price, qty, id) {
        this.name = name
        this.price = price
        this.qty = qty
        this.id = id

    }

    get cardTemplate() {
        return `
        <div class="card text-center">
         <div class="card-body">
            <h4 class="card-title">${this.name} - $${this.price}</h4>
            <p class="card-text">${this.qty}</p>
            <button class="btn btn-primary" onclick="app.snackController.purchaseItem(${this.id})">Buy</button>
         </div>
        </div>
        `
    }
}