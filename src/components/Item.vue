<template>
    <ul class="product-list" >
        <li class="product-item" v-for="product in products" :key ="product.id">
            <p class="product-title">Tên sản phẩm: {{ product.title }}</p>
            <p class="product-description">Mô tả sản phẩm: {{ product.description }}</p>
            <p class="product-price">Giá: {{product.price}}.000 <sup>đ</sup></p>
            <input type="number" name="amount">
            <a href="" class="product-buy">Mua ngay</a>
        </li>
    </ul>
</template>
<script>
export default {
    name: "Item",
    data() {
        return {
            products: [
                {
                    title: "Product 1",
                    amount: 20,
                    description: "This is a product description",
                    price: 10,
                },
                {
                    title: "Product 2",
                    amount: 10,
                    description: "This is a product description",
                    price: 20,
                }
            ]
        }
    }
}
</script>

<style scoped>
    .product-list {
        display:grid;
        grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
        gap: 20px;
    }
    .product-item {
        padding: 16px;
        list-style-type: none;
        border: 1px solid #ddd;
    }
    .product-item .product-buy {
        margin-top: 16px;
        display:block;
        text-decoration:none;
    }
</style>