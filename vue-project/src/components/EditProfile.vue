<template>
    <body>
        <header class="header">
                <h1 class="h1">Blazer-Eco</h1>
        </header>
        <main>
            <section class="wrapper">
                <section class="input" v-if="user">
                    <article class="for-image"> <img :src="getImageUrl(user.profilePhoto)" id="image" alt="Profile Photo" />
                                <input type="file" ref="fileInput" @change="handleFileUpload" accept="image/*" />
                    </article>
                    <form @submit.prevent="submitForm">
                        <article class="for-input">
                            <article>
                                <p>Username</p>
                                <input type="text" v-model="user.username" />
                            </article>
                            <hr style="padding: 0; margin:0;">
                            <article>
                               <p>Phone Number</p>
                                <input type="text" v-model="user.phoneNumber" />
                            </article>
                            <hr style="padding: 0; margin:0;">
                            <article>
                                <p>Description</p>
                                <textarea type="text" v-model="user.description"></textarea>
                            </article>
                        </article>
                        <button type="submit">Update Profile</button>
                    </form>
                    </section>
                <section v-else>
                    <p>Loading...</p>
                </section>
            </section>
        </main>
    </body>
</template>
<style scoped>
@import '../assets/editProfile.css'
</style>

<script>
import api from '../api';
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            user: {},
        };
    },
    methods: {
        async fetchUserProfile() {
            try {
                const response = await api.get('/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                this.user = response.data.user;
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        },

        getImageUrl(profilePhoto) {
            return profilePhoto ? `/${profilePhoto}` : '/user.png';
        },

        handleImageClick() {
            this.$refs.fileInput.click();
        },
        
         async handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            try {
                const formData = new FormData();
                formData.append('profilePhoto', file);

                // Send the image file directly to the backend
                const response = await api.post('/profile/upload', formData, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'multipart/form-data',
                    },
                });

                this.user.profilePhoto = response.data.filename;
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Error uploading image. Please try again.');
            }
        },
        
        async submitForm() {
            try {
                const response = await api.put('/profile', this.user, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                this.user = response.data.user;
                this.$router.push('/profile');
            } catch (error) {
                console.error('Error updating profile:', error);
                alert('Error updating profile. Please try again.');
            }
        },

        setup() {
            const router = useRouter();
            return { router };
        },

        async updateProfile() {
            try {
                const response = await api.put('/profile', this.user, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                this.user = response.data.user;
                this.$router.push('/profile');
            } catch (error) {
                console.error('Error updating profile:', error);
                alert('Error updating profile. Please try again.');
            }
        },
    },
   created() {
        this.fetchUserProfile();
    },
};
</script>
