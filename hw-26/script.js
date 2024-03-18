let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: "1",
    name: "Куриные ляшки с картошка фри",
    image: "./img/bluda Wan.webp",
    price: 120,
  },
  {
    id: "2",
    name: "Кисло слатким совусам салат",
    image: "./img/firmina bluda.jpg",
    price: 130,
  },
  {
    id: "3",
    name: "Море продукты",
    image: "./img/bluda faf.jpg",
    price: 220,
  },
  {
    id: "4",
    name: "Самый лучший торт в нашам завидение",
    image: "./img/bluda fo.jpg",
    price: 1250,
  },
  {
    id: "5",
    name: "Советую лучший блюда",
    image: "./img/bluda sri.webp",
    price: 1500,
  },
  {
    id: "6",
    name: "Пица пеперони",
    image: "./img/bluda tu.webp",
    price: 1600,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src ="${value.image}"/>
        <div class ="title">${value.name}</div>
        <div class ="price">${value.price.toLocaleString()}</div>
        <button onclick ="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] === undefined) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  } else {
    listCards[key].quantity++;
  }
  reloadCard();
}

function changeQuantity(key, value) {
  listCards[key].quantity = value;
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    if (value) {
      totalPrice += value.price * value.quantity;
      count += value.quantity;

      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
      <div><img src="${value.image}"/></div>
      <div>${value.name}</div>
      <div>${(value.price * value.quantity).toLocaleString()}</div>
      <div>${value.quantity}</div>
      <div>
        <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
        <div class="count">${value.quantity}</div>
        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
      </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerHTML = count;
}
