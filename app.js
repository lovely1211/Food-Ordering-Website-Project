let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Garlic Bread with Cheese ',
        image: '5.jpg',
        price: 119
    },
    {
        id: 2,
        name: 'Chilli Cheese Gralic Toast',
        image: '3.jpg',
        price: 115
    },
    {
        id: 3,
        name: 'Garlic Bread',
        image: '4.jpg',
        price: 99
    },
    {
        id: 4,
        name: 'Chilli Cheese Toast',
        image: '2.jpg',
        price: 115
    },
    {
        id: 5,
        name: 'Dosa (Buter)',
        image: '7.jpg',
        price: 125
    },
    {
        id: 6,
        name: 'French Fries',
        image: 'Homemade-French-Fries_8.jpg',
        price: 106
    },
    {
        id: 7,
        name: 'Onion Dosa (Butter)',
        image: 'onion-dosa.jpg',
        price: 136
    },
    {
        id: 8,
        name: 'Paper Dosa',
        image: '9.jpg',
        price: 130
    },
    {
        id: 9,
        name: 'Myscore Dosa',
        image: '10.jpg',
        price: 143
    },
    {
        id: 10,
        name: 'Rawa Dosa',
        image: '11.jpg',
        price: 156
    },
    {
        id: 11,
        name: 'Onion Rawa Dosa',
        image: '12.jpg',
        price: 171
    },
    {
        id: 12,
        name: 'Tandoori Paneer Tikka',
        image: 'paneer-tikka.jpg',
        price: 220
    },
    {
        id: 13,
        name: 'Malai Paneer Tikka',
        image: '13.jpg',
        price: 220
    },
    {
        id: 14,
        name: 'Soya Tandoori Tikka',
        image: '14.avif',
        price: 175
    },
    {
        id: 15,
        name: 'Tandoori Aloo',
        image: '15.jpg',
        price: 179
    },
    {
        id: 16,
        name: 'Hare-Bhare Kabab',
        image: 'hara-bhara-kebab.jpg',
        price: 162
    },
    {
        id: 17,
        name: 'Dahi ke Kabab',
        image: '16.jpg',
        price: 179
    },
    {
        id: 18,
        name: 'Plain Cheese Pizza',
        image: '18.jpg',
        price: 190
    },
    {
        id: 19,
        name: 'Super Veggie Pizza',
        image: '19.jpg',
        price: 250
    },
    {
        id: 20,
        name: 'Capsicum, Onion Pizza',
        image: '20.jpg',
        price: 210
    },
    {
        id: 21,
        name: 'Onion, Tomato Pizza',
        image: '21.jpg',
        price: 210
    },
    {
        id: 22,
        name: 'Tandoori Pizza',
        image: '22.jpg',
        price: 250
    },
    {
        id: 23,
        name: 'Mix Veg Pizza',
        image: '23.jpg',
        price: 200
    },
    {
        id: 24,
        name: 'Vanilla Icecream',
        image: '24.jpg',
        price: 128
    },
    {
        id: 25,
        name: 'Mango Icecream',
        image: '25.jpg',
        price: 128
    },
    {
        id: 26,
        name: 'Coffee Cappuccino',
        image: '26.avif',
        price: 51
    },
    {
        id: 27,
        name: 'Cold-Coffee (Frappe)',
        image: '28.jpg',
        price: 70
    },
    {
        id: 28,
        name: 'Fresh Lime Soda Sweet / Salt',
        image: '27.jpg',
        price: 60
    },
    {
        id: 29,
        name: 'Strawberry icecream',
        image: '29.webp',
        price: 119
    },
    {
        id: 30,
        name: 'Chicken',
        image: '30.jpeg',
        price: 200
    },
    {
        id: 31,
        name: 'Mutton',
        image: '32.jpg',
        price: 350
    },
    {
        id: 32,
        name: 'Momos',
        image: '31.webp',
        price: 100
    },
    {
        id: 33,
        name: 'Briyani',
        image: '33.jpg',
        price: 150
    },
    {
        id: 34,
        name: 'Fish',
        image: '35.webp',
        price: 270
    },
    {
        id: 35,
        name: 'Non-Veg Thali',
        image: '34.jpg',
        price: 359
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function CheckOut(){
    alert('Congratulation! Your order has been successfully completed.')
}