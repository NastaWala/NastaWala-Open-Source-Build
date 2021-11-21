// cart

const addToCart = (event) => {
  const button = event.target;
  const item = button.parentElement.parentElement;
  const image = item.getElementsByClassName("item-image")[0].src;
  const name = item.getElementsByClassName("item-name")[0].innerText;
  const price = item.getElementsByClassName("item-price")[0].innerText;
  const id = Math.floor((Math.random() * 100) + 1);
  var cartItems = {
    image,
    name,
    price,
    id
  };


  var existingEntries = JSON.parse(localStorage.getItem("cartItems"));
  if (existingEntries == null) existingEntries = [];

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  existingEntries.push(cartItems);
  localStorage.setItem("cartItems", JSON.stringify(existingEntries));

  const alert = document.getElementById("alert");

  alert.style.display = "block";

  setTimeout(() => {
    alert.style.display = "none";
  }, 1200)

};

const cart = () => {


  const cartItems = JSON.parse(localStorage.getItem("cartItems"));


  for (let i = 0; i < cartItems.length; i++) {
    const cartDiv = document.getElementById("cart");
    const article = document.createElement("article");
    const image = document.createElement("img");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const id = document.createElement("p");
    const btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.style.backgroundColor = "red";
    id.innerText = cartItems[i].id;
    id.className = "item-id";
    id.style.display = "none";

    image.src = cartItems[i].image;

    article.appendChild(image);
    cartDiv.appendChild(article);
    article.appendChild(image);
    article.appendChild(div);
    div.className = "text";
    h3.className = "cart-item-name";
    p.className = "cart-item-price";
    h3.innerText = cartItems[i].name;
    p.innerText = cartItems[i].price;
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(btn);
    div.appendChild(id);


    btn.addEventListener("click", (event) => {
      let cartItems = JSON.parse(localStorage.getItem("cartItems"));
      const div = event.target.parentElement.parentElement;
      let stringNVal = div.getElementsByClassName("item-id")[0].innerText;
      let numSeprate = parseInt(stringNVal.match(/\d+/g));
      for (let i = 0; i < cartItems.length; i++) {

        if (cartItems[i].id === numSeprate) {
          cartItems.splice(i, 1);
        }

      }
      cartItems = JSON.stringify(cartItems);
      localStorage.setItem("cartItems", cartItems);
      location.reload();
    });

  }


};

const totalAmount = () => {
  // Total Amount
  const cartDiv = document.getElementById("cart");
  const prices = cartDiv.getElementsByClassName("cart-item-price");
  // console.log(prices);
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    let numSeprate = parseInt(prices[i].innerText.match(/\d+/g))
    sum = sum + numSeprate;
  }

  const calculation = document.getElementById("calculation");
  const p = document.createElement("p");
  p.innerText = `Total Amount - Rs ${sum}/-`;
  p.id = "total-amount-txt"
  calculation.appendChild(p);
}

if (document.URL === "http://127.0.0.1:5500/htmls/cart.html" || "https://nastawala.netlify.app/htmls/cart.html") {
  cart();
  totalAmount();
}


// login

/*const user = {
  name: "Chinmay Kulthe",
  address: "42 Street New Delhi",
  phoneNo: 9981141,
};

localStorage.setItem("user", JSON.stringify(user));

JSON.parse(localStorage.getItem("user"));

console.log(JSON.parse(localStorage.getItem("user"))); */

// Save Dish
/*fetch(`http://localhost:3000/save-dish?price=89&description=ip&category=jj`)
  .then((response) => {
    if (response.status === 404) {
      console.log("Error");
    } else {
    }
  })
  .then((data) => console.clear());*/
