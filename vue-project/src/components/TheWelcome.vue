<template>
    <body>
        <header class="header">
            <article><h1 class="h1">Blazer-Eco</h1></article>
            <article class="profile">
                <router-link id="profile" to="/profile">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="profiler" height="60" width="60"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><circle cx="128" cy="120" r="40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><path d="M63.8,199.4a72,72,0,0,1,128.4,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" id="mainIconPathAttribute"></path></svg>
                </router-link>
            </article>
            <article class="logout">
                <router-link id="out" to="/" @click="logout"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="out" height="50" width="90">
                        <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute"></path> <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z" id="mainIconPathAttribute"></path> </g></svg> 
                </router-link>
                
            </article>
            <article><p>Log out</p></article>
           
        </header>

        <main class="main">
            <section class="wrapper-top">
                <article class="top">
                    <article>
                        <h2>Buy & Sell Accessories in one click</h2>
                        <form action="">
                            <input name="search" class="search" type="search" placeholder="Search">
                            
                        </form>
                    </article>
                    <article>
                         <img src="../assets/img/pic1(6).png" alt="" width="471px" height="343px"/>
                    </article>
                   
                </article>
            </section>

            <section class="serve">
                <article class="serve1">
                    <article class="usedandnew">
                        <h3>Used & New</h3>
                        <p>We sell any accessories for daily life and working</p>
                        <button class="button">View More</button>
                    </article>
                    <article>
                        <img src="../assets/img/pic1(1).png" alt="" width="214px" height="215px">
                    </article>
                </article>

                <article class="serve2">
                    <article class="service">
                        <h3>Services</h3>
                        <p>Warranty for 6 month and discount for fixing otherwise if our product is disable you can contact us and we will refund money back</p>
                        <button class="button">View More</button>
                    </article>
                    <article>
                        <img src="../assets/img/pic1(7).png" alt="" width="214px" height="215px">
                    </article>
                   
                </article>
            </section>
            <section class="products">
                    <article class="product" v-for="product in products" v-bind:key="product._id" @click="goToProductDetail(product._id)">
                        <article class="product-image">
                            <img :src="product.image" class="image"  alt="">
                        </article>
                        <h2>{{ product.product_name }}</h2>
                        <p>{{ product.price }} $</p>
                    </article>
                
            </section>
            
        </main>
        <footer class="footer">
            <section class="online-shop">
                <article>
                    <h1>Online-Shop</h1>
                </article>
                <section class="contain-blaze-eco">
                    <article class="blaze-eco">
                        <img src="../assets/img/pic1(16).png" width="70px" height="70px" alt="">
                        <p>Blaze Eco</p>
                    </article>
                    <article class="blaze-eco">
                        <img src="../assets/img/pic1(19).png" width="70px" height="70px" alt="">
                        <p>Blaze Eco</p>
                    </article>
                    <article class="blaze-eco">
                        <img src="../assets/img/pic1(20).png" width="70px" height="70px" alt="">
                        <p>Blaze Eco</p>
                    </article>
                </section>
            </section>
            <section class="contact">
                <article>
                    <h2>Contact Us</h2>
                </article>
                <section>
                    <article class="phone">
                        <!-- <p id="p1">&#9990;</p> -->
                        <svg id="p1" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        <p id="p2">+855 10191717</p>
                    </article>
                    <article class="gmail">
                        <!-- <p id="p1">&#9993;</p> -->
                        <svg id="p1" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 512 512"><path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"/></svg>
                        <p id="p2">blazeeco168@gmail.com</p>
                    </article>
                    <article class="location">
                        <!-- <p id="p1">&#9993;</p> -->
                        <svg id="p1" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        <p id="p2">Phnom Pen</p>
                    </article>
                </section>
            </section>
            <section class="about">
                <article>
                    <h2>About Us</h2>
                </article>
                <article>
                    <p><router-link id="p1" to="#" @click="showPrivacyModal = true">Support</router-link></p>
                    <p><router-link id="p2" to="#" @click="showSupportModal = true">Privacy & Policy</router-link></p>
                    <PopupModal :show-modal="showPrivacyModal" @close="showPrivacyModal = false">
                            <article>
                                <h1>Privacy & Policy</h1>
                                <p>
                                    At Blaze Eco, we take your privacy seriously. This page outlines our
                                    privacy policy and how we handle your personal information.
                                </p>
                                <h2>Information Collection and Use</h2>
                                <p>
                                    We collect personal information when you register on our website, place an
                                    order, or subscribe to our newsletter. The information collected may
                                    include your name, email address, phone number, and shipping address.
                                    Rest assured that your information is used only to process your orders and
                                    provide a better shopping experience.
                                </p>
                                <h2>Security</h2>
                                <p>
                                    We implement a variety of security measures to safeguard your personal
                                    information. All transactions are processed through a secure gateway
                                    provider, and your payment information is never stored on our servers.
                                    Additionally, access to your personal information is restricted to
                                    authorized personnel only.
                                </p>
                                <h2>Cookies</h2>
                                <p>
                                    We use cookies to enhance your browsing experience and provide personalized
                                    content. Cookies are small files that are stored on your device and help
                                    analyze web traffic. You can choose to accept or decline cookies through
                                    your browser settings.
                                </p>
                                <h2>Changes to the Privacy Policy</h2>
                                <p>
                                    We reserve the right to update our privacy policy from time to time. Any
                                    changes will be posted on this page, and you are encouraged to review our
                                    policy periodically.
                                </p>
                            </article>
                   </PopupModal>
                    <PopupModal :show-modal="showSupportModal" @close="showSupportModal = false">
                                <article>
                                    <h1>Support</h1>
                                        <p>
                                        For any support or inquiries, you can contact our customer support team
                                        using the following methods:
                                        </p>
                                    <ul>
                                        <li>Email: blazeeco168@gmail.com</li>
                                        <li>Phone: +855 10191717</li>
                                        <li>Location: Phnom Penh</li>
                                    </ul>
                                </article>
                    </PopupModal>
                </article>
            </section>
        </footer>
    </body>
    
</template>
<style scoped>
@import '../assets/homepage.css'
</style>
<script>
import api from '../api';
import axios from 'axios';
import PopupModal from "./PopupModal.vue";
export default {
    data() {
        return {
            products: [],
            showPrivacyModal: false,
            showSupportModal: false,
        }
    },
     components: {
        PopupModal,
    },
    methods: {
        async getProducts() {
            try {
        const response = await axios.get('http://localhost:3002/products', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });

            this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/');
        },
        goToProductDetail(productId) {
            this.$router.push({ name: 'product-detail', params: { id: productId } });
        },
    },
    async mounted() {
        this.getProducts();
    }
};
</script>