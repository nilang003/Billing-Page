let btn = document.querySelector('button');
let name = document.querySelector('#name');
let price = document.querySelector('#price');
let qty = document.querySelector('#qty');
let list = document.querySelector('#list');
let total = document.querySelector('#total');

let totalAmount = 0;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let newProduct = document.createElement('tr');

    let productName = document.createElement('td');
    productName.innerText = name.value;
    newProduct.append(productName);

    let productQty = document.createElement('td');
    productQty.innerText = qty.value;
    newProduct.append(productQty);

    let productPrice = document.createElement('td');
    productPrice.innerText = price.value;
    newProduct.append(productPrice);

    let totalPrice = document.createElement('td');
    totalPrice.innerText = price.value * qty.value;
    newProduct.append(totalPrice);
    totalAmount += price.value * qty.value;

    let removeItem = document.createElement('button');
    removeItem.innerText = 'Remove';
    newProduct.append(removeItem);

    list.append(newProduct);
    total.innerText = `Total Amout: ${totalAmount}`;

    name.value = "";
    qty.value = "";
    price.value = "";
})

list.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        let allNodes = e.target.parentElement.childNodes;
        totalAmount -= (allNodes[1].innerText) * (allNodes[2].innerText);
        e.target.parentElement.remove();
        total.innerText = `Total Amout: ${totalAmount}`;
    }
})