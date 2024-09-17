<script setup>

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <img src="@/assets/Logo.png" alt="">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink :to="{name: 'home'}" active-class="active" class="nav-link" aria-current="page" href="#">Превью</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{name: 'form'}" active-class="active" class="nav-link" href="#">Форма</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <hr class="m-0">

  <div class="mt-5">
    <RouterView />
  </div>

  <footer class="bg-body-tertiary mt-auto">
    <div class="container d-flex justify-content-center my-3">
      <span class="mx-auto">All right reserved</span>
    </div>
  </footer>
</template>

<style>
:root {
  font-size: 14px;
}

html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>