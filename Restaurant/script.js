function filterMenu(category) {
    let items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        if (category === 'all' || items[i].classList.contains(category)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

let cart = [];
let totalPrice = 0;

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-list");
    let totalElement = document.getElementById("total-price");

    cartList.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });

    totalElement.innerText = totalPrice;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before buying.");
        return;
    }
    
    alert(`Thank you for your purchase! Your total is $${totalPrice}.`);
    cart = [];
    totalPrice = 0;
    updateCart();
}
