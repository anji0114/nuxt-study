<!-- src/pages/index.vue -->
<script setup lang="ts">
import { Work } from "../types/works";

type Props = {
  works: Work[];
};

const { works } = defineProps<Props>();
</script>

<template>
  <ul class="list">
    <li class="item" v-for="work in works" :key="work.id">
      <nuxt-link :to="`/${work.id}`">{{ work.title }}</nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
.list {
  margin-top: 40px;
  list-style: none;
}

.item {
  padding: 20px;
  border-bottom: 1px solid #00dc82;
}

.item:first-of-type {
  border-top: 1px solid #00dc82;
}

.item a {
  font-size: 18px;
  color: #444;
}
</style>
