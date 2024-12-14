const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

if (selectedProduct) {
    document.getElementById('product-image').src = selectedProduct.image;
    document.getElementById('product-name').textContent = selectedProduct.name;
    document.getElementById('product-price').textContent = `$${selectedProduct.price}`;
    document.getElementById('product-description').textContent = selectedProduct.description;
}


function addToCart() {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (!selectedProduct) {
        alert('No product selected!');
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const alldata = JSON.parse(localStorage.getItem('alldata'));


    if (!currentUser) {
        alert('No user is logged in !');
        return;
    }

    currentUser.cart = currentUser.cart || [];
    currentUser.cart.push(selectedProduct);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));


    alldata.cart = alldata.cart || [];
    alldata.cart.push(selectedProduct)
    localStorage.setItem('alldata', JSON.stringify(alldata));


    alert('Product added to cart!');
}




document.getElementById('signOutButton').addEventListener('click', function () {
    localStorage.removeItem('currentUser');
    window.location.href = 'signup.html';
});

