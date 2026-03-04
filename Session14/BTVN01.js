const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 }
];
const productList = document.getElementById("product-list");

products.forEach(product => {
    productList.innerHTML += `
        <li>
            <div class="product">
                <h3>${product.name}</h3>
                <p>Giá: ${product.price.toLocaleString()} VND</p>
            </div>
        </li>
    `;
});