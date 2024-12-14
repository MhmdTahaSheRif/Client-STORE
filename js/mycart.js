const cartData = JSON.parse(localStorage.getItem('currentUser')).cart;
const cartItemsContainer = document.querySelector('.cart-items');

if (cartData && cartItemsContainer && cartItemsContainer.childElementCount === 0) {
    cartData.forEach(item => {
        const cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'cart-column');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.classList.add('image');

        const itemName = document.createElement('span');
        itemName.classList.add('title');
        itemName.textContent = item.name;

        cartItem.appendChild(itemImage);
        cartItem.appendChild(itemName);

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('price', 'cart-column');
        itemPrice.textContent = `$${item.price}`;

        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'remove');
        removeButton.type = 'button';
        removeButton.textContent = 'REMOVE';

        cartRow.appendChild(cartItem);
        cartRow.appendChild(itemPrice);
        cartRow.appendChild(removeButton);

        cartItemsContainer.appendChild(cartRow);

        removeButton.addEventListener('click', removeCartItem);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var removeCartItemButtons = document.getElementsByClassName('remove');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
});

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');

    var cartItems = document.querySelector('.cart-items');
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert('This item is already added to the cart');
            return;
        }
    }

    var cartRowContents = `
        <div class="cart-item">
            <img class="image" src="${imageSrc}">
            <span class="title">${title}</span>
            <span class="price">${price}</span>
            <button class="remove" type="button">REMOVE</button>
        </div>`;

    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow);

    cartRow.querySelector('.remove').addEventListener('click', removeCartItem);
}

addEventListener("load", function updateCartTotal() {
    var cartItemContainer = document.querySelector('.cart-items');
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.querySelector('.price');
        var price = parseFloat(priceElement.textContent.replace('$', ''));
        total += price;
    }
    document.querySelector('.total-price').innerText = '$' + total;
});

function purchaseClicked(event) {
    event.stopPropagation();
    alert(`Thank you for your purchase`);
    var cartItems = document.querySelector('.cart-items');
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    location.reload();
    localStorage.removeItem('currentUser').cart;
    updateCartTotal();
}
function removeCartItem(event) {
    var buttonClicked = event.target;
    var cartRow = buttonClicked.parentElement.parentElement;
    cartRow.remove();

    var itemName = cartRow.querySelector('.title').textContent;
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.cart) {
        var cartItems = currentUser.cart;

        var indexToRemove = cartItems.findIndex(item => item.name === itemName);
        if (indexToRemove !== -1) {
            cartItems.splice(indexToRemove, 1);

            currentUser.cart = cartItems;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            location.reload();
            updateCartTotal();
            localStorage.removeItem('selectedProduct');
        }
    }
}



document.getElementById('signOutButton').addEventListener('click', function () {
    localStorage.removeItem('currentUser');
    window.location.href = 'signup.html';
});
