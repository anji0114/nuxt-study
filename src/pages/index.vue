<!-- src/pages/index.vue -->
<script setup lang="ts">
const { data: works } = await useFetch("/api/works");
</script>

<template>
  <div class="container">
    <h1 class="title">実績一覧</h1>
    <Works :works="works.contents" />
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 140px 20px 40px;
  min-height: calc(100vh - 65px);
}

.title {
  font-size: 40px;
  text-align: center;
}
</style>
