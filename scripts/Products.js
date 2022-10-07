import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target


    if (itemClicked.id.startsWith("product")) {
        const [, productId] = itemClicked.id.split("--")
        let matchingProduct = null

        for (const product of products) {
            if (parseInt(productId) === product.id) {
                matchingProduct = product
            }
        }
        window.alert(`${matchingProduct.name} costs ${matchingProduct.price}`)
    }
}
)

// let matchingWalker = null
// for (const walker of walkers) {
//     if (matchingPet.walkerId === walker.id) {
//         matchingWalker = walker
//     }
// }