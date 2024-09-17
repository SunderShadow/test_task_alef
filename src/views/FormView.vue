<script setup>
import {computed, ref} from "vue";
import useStore from "@/storage"

const store = useStore()
const MAX_CHILDREN_COUNT = 5

const name = ref(store.name)
const age = ref(store.age)

const children = ref(store.children)
const canAddChildren = computed(() => children.value.length >= MAX_CHILDREN_COUNT)

const toastVisible = ref(false)

function removeChild(key) {
  if (children.value.length === 1) {
    children.value = []
  } else {
    children.value.splice(key, 1)
  }
}

function addChild() {
  if (canAddChildren) {
    children.value.push(structuredClone({
      name: '',
      age: ''
    }))
  }
}

function save() {
  store.name = name.value
  store.age = age.value
  store.children = children.value

  toastVisible.value = true
  setTimeout(() => {toastVisible.value = false}, 2000)
}
</script>

<template>
  <div class="home_view container">
    <div class="h4">Персональные данные</div>
    <div class="form-floating mt-4">
      <input v-model="name" type="text" class="form-control" placeholder="Имя">
      <label>Имя</label>
    </div>
    <div class="form-floating mt-3">
      <input v-model="age" type="text" class="form-control" placeholder="Возраст">
      <label>Возраст</label>
    </div>
  </div>

  <div class="home_view container mt-5">
    <div class="d-flex justify-content-between">
      <div class="h4">Дети (Макс. {{ MAX_CHILDREN_COUNT }})</div>
      <button @click="addChild" :class="{'d-none': canAddChildren}" class="btn btn-outline-primary rounded-pill d-flex justify-content-between align-items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z"/>
        </svg>

        Добавить ребенка
      </button>
    </div>

    <div class="row mt-3" v-for="(child, i) in children">
      <div class="col-auto">
        <div class="form-floating">
          <input v-model="child.name" type="text" class="form-control" placeholder="Имя">
          <label>Имя</label>
        </div>
      </div>
      <div class="col-auto">
        <div class="form-floating">
          <input v-model="child.age" type="text" class="form-control" placeholder="Возраст">
          <label>Возраст</label>
        </div>
      </div>
      <div class="col-auto d-flex">
        <button @click="removeChild(i)" class="btn btn-link m-auto text-decoration-none">Удалить</button>
      </div>
    </div>

    <button @click="save" class="btn btn-lg btn-primary rounded-pill mt-3 text-light">Сохранить</button>
  </div>

  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div :class="{show: toastVisible}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Успех</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Успешно сохранено
      </div>
    </div>
  </div>

</template>

<style scoped>
.home_view {
  width: 600px;
}
</style>