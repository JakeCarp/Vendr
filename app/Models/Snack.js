


export class Snack {
    constructor(name, price, qty, imgURL, id) {
        this.name = name
        this.price = price
        this.qty = qty
        this.imgURL = imgURL
        this.id = id
    }

    get cardTemplate() {
        return `
        <div class="card text-center">
            <img class="card-img-top" src="${this.imgURl}" alt="">
         <div class="card-body">
            <h4 class="card-title">${this.name} - $${this.price}</h4>
            <p class="card-text">${this.qty}</p>
         </div>
        </div>
        `
    }
}