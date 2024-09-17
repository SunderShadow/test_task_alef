<script setup>
import useStore from "@/storage.js"
const store = useStore()
</script>

<template>
  <div class="form_view container">
    <section>
      <div class="h4">Персональные данные</div>
      <div class="fw-bold">{{ store.name }}, {{ store.age }} лет</div>
    </section>

    <section class="mt-5">
      <div class="h5">Дети</div>
      <div v-for="child in store.children" class="text-bg-light child_badge badge fs-6 px-3 py-3">{{ child.name }}, {{ child.age }} лет</div>
    </section>
  </div>

</template>

<style scoped>
.form_view {
  width: 600px;
}
.child_badge {
  background-color: #F1F1F1 !important;
}
</style>