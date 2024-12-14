function displayProducts() {
  let products = JSON.parse(localStorage.getItem("products"));
  let productTableBody = document.getElementById("productTable");
  productTableBody.innerHTML = "";

  products.forEach((product, index) => {
    let row = document.createElement("tr");

    let IDCell = document.createElement("td");
    IDCell.innerText = product.id;


    let nameCell = document.createElement("td");
    nameCell.innerText = product.name;

    let priceCell = document.createElement("td");
    priceCell.innerText = `$${product.price}`;

    let imageCell = document.createElement("td");
    let image = document.createElement("img");
    image.src = product.image;
    image.width = 50;
    image.height = 50;
    imageCell.appendChild(image);

    let descCell = document.createElement("td");
    descCell.innerText = product.description;

    let simpledescCell = document.createElement("td");
    simpledescCell.innerText = product.simpledesc;

    let editCell = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", function () {
      editProduct(index);
    });
    editCell.appendChild(editButton);

    let deleteCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteProduct(index);
    });
    deleteCell.appendChild(deleteButton);

    row.appendChild(IDCell);
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(imageCell);
    row.appendChild(simpledescCell);
    row.appendChild(descCell);
    row.appendChild(editCell);
    row.appendChild(deleteCell);

    productTableBody.appendChild(row);
  });
}
window.addEventListener("load", function () {
  displayProducts();
});



function generateProductId() {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products.length === 0) {
    return 1;
  } else {
    let maxId = Math.max(...products.map(product => product.id));
    return maxId + 1;
  }
}



function addProduct() {
  let products = JSON.parse(localStorage.getItem("products"));
  let productName = document.getElementById("productName").value.trim();
  let productPrice = document.getElementById("productPrice").value.trim();
  let productsimpledesc = document.getElementById("productsimpledesc").value.trim();
  let productDescription = document.getElementById("productDescription").value.trim();
  let productImage = document.getElementById("productImage").files[0];

  if (!productName || !productPrice || !productDescription) {
    alert("Please fill in all product details.");
    return;
  }

  if (!productImage) {
    alert("Please select an image for the product.");
    return;

  } if (isNaN(productPrice) || productPrice == 0) {
    alert("Please enter a valid number for Product price.");
    return;
  }


  const existingProduct = products.find(product => product.name.toLowerCase() === productName.toLowerCase() || product.description.toLowerCase() === productDescription.toLowerCase());
  if (existingProduct) {
    alert("A product with the same name or description already exists.");
    return;
  }

  let productID = generateProductId();

  let reader = new FileReader();
  reader.onload = function () {
    let imageURL = reader.result;

    let newProduct = {
      id: productID,
      name: productName,
      price: productPrice,
      image: imageURL,
      simpledesc: productsimpledesc,
      description: productDescription
    };

    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
  };
  reader.readAsDataURL(productImage);
}
document.getElementById("productForm").addEventListener("submit", function (event) {
  event.preventDefault();
  addProduct();
});




function editProduct(index) {
  let products = JSON.parse(localStorage.getItem("products"));
  let productToEdit = products[index];
  let editedName = prompt("Enter the new name:", productToEdit.name);
  let editedPrice = prompt("Enter the new price:", productToEdit.price);
  let editedSimpledesc = prompt("Enter the new simpledesc:", productToEdit.simpledesc);
  let editedDescription = prompt("Enter the new description:", productToEdit.description);
  let editedImage = prompt("Enter the new image URL:", productToEdit.image);

  if (
    editedName !== null &&
    editedName.trim() !== "" &&

    (!isNaN(parseFloat(editedPrice)) &&
      isFinite(editedPrice)) &&

    editedSimpledesc !== null &&
    editedSimpledesc.trim() !== "" &&

    editedDescription !== null &&
    editedDescription.trim() !== "" &&

    editedImage !== null &&
    editedImage.trim() !== ""
  ) {
    productToEdit.name = editedName;
    productToEdit.price = editedPrice;
    productToEdit.simpledesc = editedSimpledesc;
    productToEdit.description = editedDescription;
    productToEdit.image = editedImage;

    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
  } else {
    alert("Invalid input. Please provide valid values.");
  }
}

function deleteProduct(index) {
  let products = JSON.parse(localStorage.getItem("products"));
  let deletedProduct = products.splice(index, 1)[0];
  let archivedProducts = JSON.parse(localStorage.getItem("archivedProducts")) || [];
  archivedProducts.push(deletedProduct);
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("archivedProducts", JSON.stringify(archivedProducts));
  displayProducts();
}



document.getElementById('signOutButton').addEventListener('click', function () {
  localStorage.removeItem('currentUser');
  window.location.href = 'signup.html';
});
