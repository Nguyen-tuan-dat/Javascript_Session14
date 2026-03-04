const products = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "./img/banhchung.webp" },
    { id: 2, name: "Giò Lụa", price: 180000, img: "./img/giolua.jpg" },
    { id: 3, name: "Cành Đào", price: 500000, img: "./img/canhdao.webp" },
    { id: 4, name: "Mứt Tết", price: 120000, img: "./img/muttet.webp" },
    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./img/lixi.webp" },
    { id: 6, name: "Dưa Hấu", price: 60000, img: "./img/duahau.jpg" },
];

function renderProducts() {
    let listProductElement = document.getElementById("product-list");
    products.forEach((product) => {
        listProductElement.innerHTML += `<div class="product-card">
                    <img src="/img/banhchung.webp" alt="">
                    <h3>Bánh Chưng Tranh Khúc</h3>
                    <p class="price">150.000đ</p>
                    <button class="btn-add" id="btn-add-${product.id}">Thêm vào giỏ</button>
                </div>`
    })
}
renderProducts();