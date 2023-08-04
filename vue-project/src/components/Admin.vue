<template>
    <body>
        <header class="header">
                    <h1 class="h1">Blazer-Eco</h1>
        </header>
        <section class="wrapper">
            <table class="styled-table">
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user._id">
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <button @click="deleteUser(user._id)" type="submit" class="delete">Delete</button>
                        
                    </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </body>
</template>
<style scoped>
@import '../assets/admin.css'
</style>

<script>
import axios from "axios";
import api from '../api'

export default {
    data() {
        return {
            users: [],
        };
    },
   methods: {
        async fetchUsers() {
            try {
                const response = await api.get('/users');
                this.users = response.data;
            } catch (error) {
                console.error('Error fetching users:', error);
            }
       },
         async deleteUser(userId) {
            try {
                if (confirm('Are you sure you want to delete this user?')) {
                    const response = await api.delete(`/users/${userId}`);
                    console.log(response.data.message);
                }
                this.fetchUsers();
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        },
    },
    mounted() {
        this.fetchUsers();
    },
};
</script>