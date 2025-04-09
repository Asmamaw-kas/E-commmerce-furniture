import { product, product2, product3, product4, cart } from './data.js';
document.addEventListener('DOMContentLoaded', () => {
   EventHandler();
});


let toggle_father = document.getElementById('total-amount')
toggle_father.onclick = toggle()
function toggle(){
let toggle = document.querySelector('.cartwhole')
if(toggle.classList.contains('cart-toggle'))
{
   toggle.classList.remove('cart-toggle');

}
else{
   toggle.classList.add('cart-toggle');
}

}


document.getElementById("shopNowBtn").addEventListener("click", function(event) {
  
   event.preventDefault();

   const emailInput = document.getElementById("email");
   const errorMessage = document.getElementById("errorMessage");
   if (emailInput.value.trim() === "") {
       errorMessage.style.display = "block";
   } else {
       errorMessage.style.display = "none";
       alert("you got user id now you can shop..."); 
   }
});


let productHTML = "";
 product.forEach((product) =>{
productHTML += ` <div class="furniture-content">
                <img src="${product.image}" class="furniture-images" >
                <p><button id="roll-no">${product.rollno}</button>PRICE: ${product.price} ETB </p>
                <button class="add js-add-to-cart"  data-product-roll="${product.rollno}" data-product-price="${product.price}"
                data-product-image="${product.image}"
                data-product-type="${product.type}">add to order</button>
                <input type="text" name="num" id="amount" value="${product.value}" readonly>
            </div>`
});

let productHTML2 = "";
 product2.forEach((product2) =>{
productHTML2 += ` <div class="furniture-content">
                <img src="${product2.image}" class="furniture-images" >
                <p><button id="roll-no">${product2.rollno}</button>PRICE: ${product2.price} ETB </p>
                <button class="add js-add-to-cart"  data-product-roll="${product2.rollno}" data-product-price="${product2.price}"
                data-product-image="${product2.image}"
                data-product-type="${product2.type}">add to order</button>
                <input type="text" name="num" id="amount" value="${product2.value}" readonly>
            </div>`
});


let productHTML3 = "";
 product3.forEach((product3) =>{ 
productHTML3 += ` <div class="furniture-content">
                <img src="${product3.image}" class="furniture-images" >
                <p><button id="roll-no">${product3.rollno}</button>PRICE: ${product3.price} ETB </p>
                <button class="add js-add-to-cart"  data-product-roll="${product3.rollno}" data-product-price="${product3.price}"
                data-product-image="${product3.image}"
                data-product-type="${product3.type}">add to order</button>
                <input type="text" name="num" id="amount" value="${product3.value}" readonly>
            </div>`
});

let productHTML4 = "";
 product4.forEach((product4) =>{
productHTML4 += ` <div class="furniture-content">
                <img src="${product4.image}" class="furniture-images" >
                <p><button id="roll-no">${product4.rollno}</button>PRICE: ${product4.price} ETB </p>
                <button class="add js-add-to-cart"  data-product-roll="${product4.rollno}" data-product-price="${product4.price}"
                data-product-image="${product4.image}"
                data-product-type="${product4.type}">add to order</button>
                <input type="text" name="num" id="amount" value="${product4.value}" readonly>
            </div>`
});

//document.querySelector('.js-container2').innerHTML = productHTML2;
//document.querySelector('.js-container3').innerHTML = productHTML3;
//document.querySelector('.js-container4').innerHTML = productHTML4;



document.querySelector('.image-button').onclick = function() {
   let render1 = document.querySelector('.js-container');
   if (render1.innerHTML === '') {
      render1.innerHTML = productHTML;
   } else {
      render1.innerHTML = '';
   }
   EventHandler();
};


document.querySelector('.image-button2').onclick = function() {
   let render2 = document.querySelector('.js-container2');
   if (render2.innerHTML === '') {
      render2.innerHTML = productHTML2;
   } else {
      render2.innerHTML = '';
   }
   EventHandler();
};


document.querySelector('.image-button3').onclick = function() {
   let render3 = document.querySelector('.js-container3');
   if (render3.innerHTML === '') {
      render3.innerHTML = productHTML3;

   } else {
      render3.innerHTML = '';
   }
   EventHandler();
};



document.querySelector('.image-button4').onclick = function() {
   let render4 = document.querySelector('.js-container4');
   if (render4.innerHTML === '') {
      render4.innerHTML = productHTML4;
   } else {
      render4.innerHTML = '';
   }
   EventHandler();
};



const user_id = document.getElementById('email').value;

function EventHandler(){
document.querySelectorAll('.js-add-to-cart').forEach((button) =>{

    button.addEventListener('click', () =>{
       const roll = parseInt(button.dataset.productRoll);
       const PRICE = parseFloat(button.dataset.productPrice);
       const img = button.dataset.productImage;
       const typ = button.dataset.productType;
       
       let match; 
      
      
       cart.forEach((item) =>{
          if(roll===item.roll){
             match=item
          }
       });
       if(match){

          match.quantity +=1
         match.price += PRICE
       
       }
       else{
       cart.push({
          image: img,
          type:typ,
          roll: roll,
          quantity: 1,
          price: PRICE
       })
       console.log("cart in push")
       console.log(cart)
    }
    renderCart();
    let tatalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) =>{
       tatalQuantity += item.quantity
       totalPrice += item.price
       
 
    })
    

    document.querySelector('.cart-incrimentor').textContent = tatalQuantity;
    
    
    });
 });

}

let totalQuReciver = 0;
let totalPrReciver = 0;

function renderCart() {
    console.log('Imported cart :', cart);
    const cartItemsContainer = document.getElementById('cart-items');
    
    let cartHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach((item, index) => {
        cartHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.type}">
                <div class="cart-item-details">
                    <p>${item.type} (Roll No: ${item.roll})</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: ${item.price} ETB</p>
                     <button class="remove-item" data-index="${index}">Delete</button>
                </div>
               
            </div>
        `;
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    cartItemsContainer.innerHTML = cartHTML;
    document.getElementById('total-quantity').textContent = totalQuantity;
    document.getElementById('total-price').textContent = totalPrice;
    totalPrReciver = totalPrice;
    totalQuReciver = totalQuantity;

    // Add event listeners to delete buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            cart.splice(index, 1); 
            renderCart(); 
        });
    });
}

renderCart();
// Add an event listener to the form

document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const screenshot = document.getElementById('screenshot').files[0];
    if (!screenshot) {
        alert('Please upload a payment screenshot.');
        return;
    }
    alert('Order submitted successfully!');
    cart.length = 0; 
    renderCart(); 
});




   

   // Wait for the DOM to load
   document.addEventListener('DOMContentLoaded', () => {
      // Get the button element
      const addToCartButton = document.getElementById('order-to-database-button');
  
      // Add an event listener to the button
      addToCartButton.addEventListener('click', async () => {
        
          const product_id = Math.round(Math.random() * 1000 + 1); 
          const quantity = totalQuReciver; 
          const price = totalPrReciver; 
  
          try {
              const response = await fetch('http://localhost:3000/add-to-cart', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ product_id, quantity, price }),
              });
  
              const result = await response.json();
              console.log(result); // Log the response from the server
              //alert('Item added to cart successfully!');
          } catch (error) {
              console.error('Error:', error);
              alert('Failed to add item to cart.');
          }
      });
  });