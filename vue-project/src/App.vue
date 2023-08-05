<template>
    <div>
         <RouterView />
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const props = defineProps([]);
const emit = defineEmits([]);
</script>
