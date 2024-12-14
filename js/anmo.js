const allproducts = [
    {
        name: "13-inch MacBook",
        image: "image/13.jpg",
        price: "$49.99",
    }, {
        name: "MacBook Pro",
        image: "image/14.jpg",
        price: "$49.99",
    }, {
        name: "13-inch MacBook",
        image: "image/8.jpg",
        price: "$49.99",
    },
    {
        name: "Lenovo IdeaPad",
        image: "image/1.jpg",
        price: "$2099.49",
    }, {
        name: "Lenovo IdeaPad5",
        image: "image/2.jpg",
        price: "$1499.99",
    }, {
        name: "Lenovo IdeaPad1",
        image: "image/3.jpg",
        price: "$2099.99",
    }, {
        name: "HP Pavilion Gaming",
        image: "image/4.jpg",
        price: "$1299.99",
    },
    {
        name: "HP 250 G8 Laptop",
        image: "image/6.jpg",
        price: "$1539.99",
    }, {
        name: "HP Pavilion",
        image: "image/5.jpg",
        price: "$1449.99",
    },
    {
        name: "HP Pavilion Laptop ",
        image: "image/7.jpg",
        price: "$1339.99",

    }, {
        name: "2021 Apple MacBook Pro ",
        image: "image/12.jpg",
        price: "$3339.99",
    },
    {
        name: " MacBook",
        image: "image/9.jpg",
        price: "$2559.99",
    },
];

function createProductCard(product) {
    const productContainer = document.getElementById('products');
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    productImage.addEventListener('click', () => {
        enlargeImage(product.image);
    });

    productCard.appendChild(productImage);

    const productName = document.createElement('h2');
    productName.textContent = product.name;
    productCard.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;
    productCard.appendChild(productPrice);

    const productsimpleDescription = document.createElement('p');
    productsimpleDescription.textContent = product.simpledesc;
    productCard.appendChild(productsimpleDescription);

    const viewDetailsBtn = document.createElement('button');
    viewDetailsBtn.textContent = "View Details";
    viewDetailsBtn.addEventListener('click', () => {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'signup.html';
    });
    productCard.appendChild(viewDetailsBtn);

    productContainer.appendChild(productCard);
}


localStorage.setItem('anmProducts', JSON.stringify(allproducts));

const productContainer = document.getElementById('products');
allproducts.forEach(product => {
    createProductCard(product);
});
