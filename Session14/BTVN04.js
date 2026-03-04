const productList = document.getElementById("product-list");
const form = document.getElementById("product-form");

// Render sản phẩm ban đầu
const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 }
];

products.forEach(product => {
    productList.innerHTML += `
        <li class="product-item">
            <h3>${product.name}</h3>
            <p class="price">Giá: ${product.price.toLocaleString()} VND</p>
            <button class="edit-price-btn">Sửa giá</button>
            <button class="delete-btn">Xóa</button>
        </li>
    `;
});

// Thêm sản phẩm
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("product-name").value.trim();
    const price = document.getElementById("product-price").value;

    if (!name || !price) return;

    productList.innerHTML += `
        <li class="product-item">
            <h3>${name}</h3>
            <p class="price">Giá: ${Number(price).toLocaleString()} VND</p>
            <button class="edit-price-btn">Sửa giá</button>
            <button class="delete-btn">Xóa</button>
        </li>
    `;

    form.reset();
});

// Event Delegation cho Xóa & Sửa giá
productList.addEventListener("click", function(e) {

    // ===== XÓA =====
    if (e.target.classList.contains("delete-btn")) {
        if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
            e.target.closest("li").remove();
        }
    }

    // ===== SỬA GIÁ =====
    if (e.target.classList.contains("edit-price-btn")) {

        const li = e.target.closest("li");
        const priceElement = li.querySelector(".price");

        const newPrice = prompt("Nhập giá mới (VND):");

        if (newPrice === null) return; // bấm Cancel

        const priceNumber = Number(newPrice);

        if (isNaN(priceNumber) || priceNumber <= 0) {
            alert("Giá không hợp lệ!");
            return;
        }

        priceElement.textContent = 
            "Giá: " + priceNumber.toLocaleString() + " VND";
    }
});