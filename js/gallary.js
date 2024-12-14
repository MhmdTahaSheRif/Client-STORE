let products = [
    {
        id: 1,
        name: "ASUS Chromebook Intel Celeron",
        image: "image/12.jpg",
        price: "919.99",
        simpledesc: "ASUS Chromebook",
        description: "ASUS Chromebook Intel Celeron Dual Core N4020 (8 GB/256 GB SSD/Windows 11 Home) E510MA-EJ011WS Thin and Light Laptop  (15.6 Inch, Black, 1.57 kg, With MS Office) "
    }, {
        id: 2,
        name: "SAMSUNG Galaxy",
        image: "image/10.jpg",
        price: "2339.99",
        simpledesc: "SAMSUNG Galaxy Book 2",
        description: "SAMSUNG Galaxy Book 2 Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)"
    }, {
        id: 3,
        name: "ASUS Vivobook",
        image: "image/11.jpg",
        price: "1519.99",
        simpledesc: "ASUS Vivobook 15 Intel Core i3",
        description: "ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/256 GB SSD/Windows 11 Home) X515EA-EJ312W Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg)"
    }, {
        id: 4,
        name: "ASUS Vivobook ",
        image: "image/14.jpg",
        price: "1219.99",
        simpledesc: "ASUS Vivobook Go 15 Intel",
        description: "ASUS Vivobook Go 15 Intel Celeron Dual Core N4020 - (8 GB/256 GB SSD/Windows 11 Home) E510MA-EJ011WS Thin and Light Laptop  (15.6 Inch, Black, 1.57 kg, With MS Office)."
    }, {
        id: 5,
        name: "APPLE 2022 MacBook AIR Apple M2",
        image: "image/13.jpg",
        price: "3119.99",
        simpledesc: "APPLE 2022 MacBook",
        description: "APPLE 2022 MacBook AIR Apple M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY33HN/A  (E510MA-EJ011WS Thin and Light Laptop 13.6 Inch, Midnight, 1.24 Kg)"
    },

    {
        id: 6,
        name: "2021 Apple MacBook Pro ",
        image: "image/8.jpg",
        price: "3339.99",
        simpledesc: "2021 Apple MacBook Pro",
        description: "2021 Apple MacBook Pro  (14-inch, Apple M1 Pro chip with 8â€‘core CPU and 14â€‘core GPU, 16GB RAM, 512GB SSD E510MA-EJ011WS Thin and Light Laptop) - Space Grey "
    }, {
        id: 7, name: "APPLE 2020 Macbook Air Apple M1",
        image: "image/15.jpg",
        price: "2559.99",
        simpledesc: "APPLE 2020 Macbook",
        description: "APPLE 2020 Macbook Air Apple M1 (8 GB/256 GB SSD/Windows 11 Home) E510MA-EJ011WS Thin and Light Laptop  (15.6 Inch, Black, 1.57 kg, With MS Office)"
    },
    {
        id: 8, name: "HP Pavilion Laptop ",
        image: "image/7.jpg",
        price: "1339.99",
        simpledesc: "HP Pavilion Laptop13",
        description: "HP Pavilion Laptop13-bb0003ne , Silver , 16 GB Intel Core i7-1255U, 12th Generation, 16GB DDR4-3200 MHz RAM (onboard), 512 GB PCIe NVMe M.2 SSD - Silver "
    }, {
        id: 9,
        name: "HP 250 G8 Laptop",
        image: "image/6.jpg",
        price: "1539.99",
        simpledesc: "HP 250 G8 Laptop",
        description: "HP 250 G8 Laptop, 10th Generation Intel Core i5-1035G1, 8 GB RAM, 1TB HDD, Intel UHD Graphics, 15.6 Inch HD anti-glare 220 nits, Windows 10 - Astroid silver "
    }, {
        id: 11,
        name: "Lenovo IdeaPad",
        image: "image/1.jpg",
        price: "2099.49",
        simpledesc: "Lenovo IdeaPad Gaming 3 Laptop",
        description: "Lenovo IdeaPad Gaming 3 Laptop - Ryzen 5 5600H 6 Cores, 16GB RAM, 1TB HDD + 256GB SSD, NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics, 15.6 FHD (1920x1080) IPS 120Hz, Backlit KB, Windows11 - Black "
    },
    {
        id: 10,
        name: "HP Pavilion",
        image: "image/3.jpg",
        price: "1449.99",
        simpledesc: "HP Pavilion X360 2-in-1",
        description: "HP Pavilion X360 2-in-1 Laptop 14-EK0010NE (6L8J4EA), Intel Core i7-1255U, 12th Generation, 16GB DDR4-3200 MHz RAM (onboard), 512 GB PCIe NVMe M.2 SSD - Silver "
    },
    {
        id: 12,
        name: "13-inch MacBook",
        image: "image/5.jpg",
        price: "2559.99",
        simpledesc: "13-inch MacBook Air",
        description: "13-inch MacBook Air: Apple M2 chip with 8-core CPU and 10-core GPU, 512GB E510MA-EJ011WS Thin and Light Laptop - Space Grey "
    }, {
        id: 13,
        name: "Lenovo IdeaPad5",
        image: "image/2.jpg",
        price: "1499.99",
        simpledesc: "Lenovo IdeaPad 5 Laptop",
        description: "Lenovo IdeaPad 5 Laptop, 11 Intel Core i7-1165G7, 16GB RAM, 512GB SSD NVIDIA GeForce MX450 2GB DDR6 Screen 15.6 Inch FHD IPS 300nit Fingerprint Reader Backlight Keyboard, DOS, Graphite Gray "
    },


    {
        id: 14, name: "HP Pavilion Gaming",
        image: "image/20.jpg",
        price: "1299.99",
        simpledesc: "HP Pavilion Gaming Laptop 15-dk2087ne",
        description: "HP Pavilion Gaming Laptop 15-dk2087ne - 11th Intel Core i5-11300H, 8GB RAM, 1TB HDD + 256GB SSD, NVIDIA GeForce GTX 1650 4GB GDDR6 Graphics, 15.6 FHD (1920 x 1080) IPS 144 Hz, Dos - black "
    },
    {
        id: 15, name: "Lenovo IdeaPad1",
        image: "image/4.jpg",
        price: "2099.99",
        simpledesc: "Lenovo IdeaPad1 - Intel Core i7",
        description: "Lenovo IdeaPad1 - Intel Core i7-1255U - 8GB - 512GB SSD - Intel Iris Xe Graphics - 15.6FHD - Win11 - Blue E510MA-EJ011WS Thin and Light Laptop"
    },
];


function createProductCard(product) {
    const productContainer = document.getElementById('products');
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productCard.appendChild(productImage);

    const productName = document.createElement('h2');
    productName.textContent = product.name;
    productCard.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}`;
    productCard.appendChild(productPrice);

    const productsimpleDescription = document.createElement('p');
    productsimpleDescription.textContent = product.simpledesc;
    productCard.appendChild(productsimpleDescription);

    const viewDetailsBtn = document.createElement('button');
    viewDetailsBtn.textContent = "View Details";
    viewDetailsBtn.addEventListener('click', () => {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'proudactdet.html';
    });
    productCard.appendChild(viewDetailsBtn);
    productContainer.appendChild(productCard);
}

function displayProductsFromStorage() {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';

    let storedProducts = JSON.parse(localStorage.getItem('products'));

    if (!storedProducts || storedProducts.length === 0) {
        storedProducts = products;
        localStorage.setItem('products', JSON.stringify(products));
    }
    storedProducts.forEach(product => {
        createProductCard(product);
    });
}
window.addEventListener('load', displayProductsFromStorage);




document.getElementById('signOutButton').addEventListener('click', function () {
    localStorage.removeItem('currentUser');
    window.location.href = 'signup.html';
});
