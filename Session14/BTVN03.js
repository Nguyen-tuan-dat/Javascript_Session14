const productList = document.getElementById("product-list");
const form = document.getElementById("product-form");

// Hiển thị sản phẩm ban đầu
const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 }
];

products.forEach(product => {
    productList.innerHTML += `
        <li class="product-item">
            <h3>${product.name}</h3>
            <p>Giá: ${product.price.toLocaleString()} VND</p>
            <button class="delete-btn">Xóa</button>
        </li>
    `;
});

// Thêm sản phẩm mới
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("product-name").value.trim();
    const price = document.getElementById("product-price").value;

    if (!name || !price) return;

    productList.innerHTML += `
        <li class="product-item">
            <h3>${name}</h3>
            <p>Giá: ${Number(price).toLocaleString()} VND</p>
            <button class="delete-btn">Xóa</button>
        </li>
    `;

    form.reset();
});

// EVENT DELEGATION cho nút Xóa
productList.addEventListener("click", function(e) {

    if (e.target.classList.contains("delete-btn")) {

        const confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");

        if (confirmDelete) {
            e.target.closest("li").remove();
        }
    }
});