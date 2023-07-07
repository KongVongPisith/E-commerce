<template>
    <body>
        <header class="header">
                <h1 class="h1">Blazer-Eco</h1>
        </header>
        <main class="main">
            <section class="login">
                <section class="img">
                   <img v-bind:src="link" v-bind:style="{width: w, height: h}">
                </section>
                <section class="login-form">
                    
                    <article class="btn">
                        <button :class="{ 'active': activeTab === 'signup' }" @click="activeTab = 'signup'" id="signup">Sign Up</button>
                        <button :class="{ 'active': activeTab === 'login' }" @click="activeTab = 'login'" id="signin">Sign in</button>
                    </article>
                    <article v-if="activeTab === 'login'" id="input-signin">
                        <form @submit.prevent="login">
                            <h3 class="h3">Login</h3>
                            <input type="text" v-model="loginData.email" placeholder="Email">
                            <hr style="padding: 0; margin:0;">
                            <input type="password" v-model="loginData.password" placeholder="Password">
                            <hr style="padding: 0; margin:0;">
                            <button type="submit">Login</button>
                        </form>
                    </article>

                    <article v-if="activeTab === 'signup'" id="input-signup">
                    <form @submit.prevent="signup">
                        <h3 class="h3">Create an account</h3>
                        <input type="text" v-model="signupData.name" placeholder="Name">
                        <hr style="padding: 0; margin:0;">
                        <input type="email" v-model="signupData.email" placeholder="Email">
                        <hr style="padding: 0; margin:0;">
                        <input type="password" v-model="signupData.password" placeholder="Password">
                        <hr style="padding: 0; margin:0;">
                        <button type="submit">Create Account</button>
                    </form>
                    </article>
                    <article>
                        <button class="g-login">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="30" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" id="mainIconPathAttribute" stroke="#000000" stroke-width="0" fill="#ff0000"></path></svg>
                            <span> Sign up with Google</span>
                        </button>
                    </article>
                </section>
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
                        <p><router-link id="p1" to="/support">Support</router-link></p>
                        <p><router-link id="p2" to="/private">Privacy & Policy</router-link></p>
                    </article>
                </section>
        </footer>
    </body>
    
</template>
<style scoped>
@import '../assets/login.css';
</style>
<script>
import Image from '../assets/img/pic1(28).png';
export default {
    data() {
        return {
            activeTab: 'login',
            loginData: {
                email: '',
                password: ''
            },
            signupData: {
                name: '',
                email: '',
                password: ''
            },
            link: Image,
            w: '775px',
            h: '750px',
        };
    },
    methods: {
        
        login() {

            console.log('Login data:', this.loginData);
        },
        signup() {

            console.log('Signup data:', this.signupData);
        },
    }
};
</script>
