<template>
    <body>
            <header>
                <section class="header">
                    <h1 class="h1">Blazer-Eco</h1>
                </section>
            </header>
            <main class="container">
                <section class="wrapper">
                    <article class="top">
                        <h2>Post Ad</h2>
                        <hr>
                    </article>
                </section>
                <section>
                    <article class="add-photo">
                        <h2>Add Photo</h2>
                    </article>
                    <article class="des">
                        <p>First picture  is the title picture Grab & dra photos to change the order</p>
                    </article>
                    <article class="photo">
                       <form @submit.prevent="submitForm" method="POST" enctype="multipart/form-data">
                         <input type="hidden" name="_method" value="PUT">
                            <input type="file" ref="fileInput" name="image" @change="handleFileUpload">
                            <input v-model="product.product_name" type="text" name="product_name" id="product" placeholder="Product Name">
                            <input v-model="product.price" type="number" id="price" placeholder="Price">
                            <input v-model="product.stock" type="number" id="stock" placeholder="Stock">
                            <input v-model="product.description" type="text" name="description" id="description" placeholder="Description">
                            <input v-model="product.tel" type="number" name="tel" id="tel" placeholder="Telephone">
                            <button type="submit">Post</button>
                        </form>
                    
                    </article>
                </section>
            </main>
        </body>
</template>
<style scoped>
@import '../assets/postAd.css'
</style>
<script>
import api from "../api";

export default {
    data() {
        return {
            product: {
                product_name: '',
                price: '',
                stock: '',
                image: null,
                description: '',
                tel: '',
            },
        };
    },
    methods: {
        async handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            this.product.image = file;
        },

        async submitForm() {
            try {
                if (
                    !this.product.product_name ||
                    !this.product.price ||
                    !this.product.description ||
                    !this.product.tel ||
                    !this.product.image
                ) {
                    alert('Please fill in all the required fields');
                    return;
                }

                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('User not authenticated. Token not available.');
                    return;
                }

                const response = await api.post('/products', this.product, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                });
                
                console.log('Product posted:', response.data);

                 this.$router.push('/home');
            } catch (error) {
                console.error('Error posting product:', error);
                alert('Error posting product. Please try again.');
            }
        },
    },
};
</script>