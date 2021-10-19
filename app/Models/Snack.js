


export class Snack {
    constructor(name, price, qty, id, imgURL) {
        this.name = name
        this.price = price
        this.qty = qty
        this.id = id
        this.imgURL = imgURL

    }

    get cardTemplate() {
        return `
        <div class="card text-center col-md-3">
         <div class="card-body">
         <img class="card-img-top" src="${this.imgURL}" alt="">
            <h4 class="card-title">${this.name} - $${this.price}</h4>
            <p class="card-text">${this.qty}</p>
            <button class="btn btn-primary" onclick="app.snackController.purchaseItem(${this.id})">Buy</button>
         </div>
        </div>
        `
    }
}
