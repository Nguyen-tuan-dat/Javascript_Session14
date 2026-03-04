// Mảng ban đầu
const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 }
];

const productList = document.getElementById("product-list");
const form = document.getElementById("product-form");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");


// Hiển thị sản phẩm ban đầu
products.forEach(product => {
    productList.innerHTML += `
        <li class="product-item">
            <h3>${product.name}</h3>
            <p>Giá: ${product.price.toLocaleString()} VND</p>
        </li>
    `;
});


// Lắng nghe submit
form.addEventListener("submit", function(event) {

    // 2️⃣ Ngăn reload trang
    event.preventDefault();

    // Lấy giá trị input
    const name = nameInput.value.trim();
    const price = parseInt(priceInput.value);

    if (name === "" || isNaN(price)) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Tạo object sản phẩm mới
    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    };

    products.push(newProduct);

    // Tạo thẻ li giống bài 1
    const li = document.createElement("li");
    li.classList.add("product-item");

    li.innerHTML = `
        <h3>${newProduct.name}</h3>
        <p>Giá: ${newProduct.price.toLocaleString()} VND</p>
    `;

    //Thêm vào product-list
    productList.appendChild(li);

    // Xóa sạch input
    nameInput.value = "";
    priceInput.value = "";
});