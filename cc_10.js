//Task 1 Creating a Product Class

class Product {
    constructor(name,id,price,stock) {
        this.name=name;
        this.id=id;
        this.price=price;
        this.stock=stock;
    };//create class with properties
    getDetails(){
        return `Product:${this.name},ID:${this.id},Price:$${this.price},Stock:${this.stock}`;
    };//method returns details of product
    updateStock(quantity){
        return this.stock-=quantity
    };//method to update stock when order is placed.
}

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

//Task 2 Creating an Order Class

class Order {
    constructor(orderID,product,quantity,) {
        this.orderID=orderID;
        this.product=product;
        this.quantity=quantity;
    };//create class with properties
    getOrderDetails(){
        return `Order ID:${this.orderID}, Product:${this.product.name}, Quantity:${this.quantity},Total Price:$${this.product.price*this.quantity}`
    }//return order details
};//create class that returns details

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)