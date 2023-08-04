<template>
    <body>
        <header class="header">
                <article><h1 class="h1">Blazer-Eco</h1></article>
                <article class="logout">
                    <router-link id="out" to="/" @click="logout"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="out" height="50" width="90">
                            <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute"></path> <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z" id="mainIconPathAttribute"></path> </g></svg> 
                    </router-link>
                
                </article>
                <article><p>Log out</p></article>
            
        </header>
        <main class="main">
            <section class="wrapper">
                <section class="wrapper-top">
                     <article class="top">
                        <article>
                            <h2>Find Product</h2>
                            <form action="">
                                <input name="search" class="search" type="search" placeholder="Search">
                            
                            </form>
                        </article>
                        <article>
                             <img class="image" src="../assets/img/pic1(6).png" alt=""/>
                        </article>
                    </article>
                </section>
                <section class="wrapper-bottom">
                    <article v-if="product" class="product">
                        <article>
                            <img :src="product.image" class="product-image" alt="Product Image" />
                        </article>
                        <article class="product-detail">
                            <article>
                                <h2>{{ product.product_name }}</h2>
                                <p id="price">$ {{ product.price }}</p>
                                <p id="description">Description:</p>
                                <p id="des">{{ product.description }}</p>
                                <p id="stock">Stock: {{ product.stock }}</p>
                                <p id="tel">Telephone: {{ product.tel }}</p>
                            </article>
                        </article>
                        
                    </article>
                </section>
            </section>
        </main>
         
    </body>
</template>

<script>
import api from '../api';

export default {
    data() {
        return {
            product: {},
            quantity: 1,
            orderedQuantity: 0,
            isOrdered: false,
        };
    },
    async mounted() {
        try {
            const productId = this.$route.params.id;
            const token = localStorage.getItem('token'); 
            const response = await api.get(`/products/${ productId }`, {
                headers: {
                    Authorization: `Bearer ${ token }`, 
        },
    });
        this.product = response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
    },
    methods: {
        async orderProduct() {
            try {
                const productId = this.$route.params.id;
                const token = localStorage.getItem('token');
                const response = await api.post(
                    `/order`,
                    {
                        product_id: productId,
                        quantity: this.quantity,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                console.log(response.data.message);

                if (response.status === 201) {
                    this.product.isOrdered = true;
                } else {
                    console.error('Order creation failed:', response.data.message);
                }
            } catch (error) {
                console.error('Error ordering product:', error);
            }
        },
        async handleOrder() {
        },
    }
  
};
</script>

<style scoped>
@import '../assets/product.css'
</style>