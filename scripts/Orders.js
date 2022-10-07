import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (currentOrder, productsArray) => {
    let orderProduct = null

    for (const currentProduct of productsArray) {
        if (currentProduct.id === currentOrder.productId) {
            orderProduct = currentProduct
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (currentOrder) => {
    let orderEmployee = null

    for (const currentEmployee of employees) {
        if (currentEmployee.id === currentOrder.employeeId) {
            orderEmployee = currentEmployee
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const currentOrder of orders) {
        const product = findProduct(currentOrder, products)
        const employee = findEmployee(currentOrder)

        html += `<li>${product.name} was sold by ${employee.name} on ${new Date(currentOrder.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

