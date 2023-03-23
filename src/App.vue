<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <Index />
  </div>
  <header>
    <div>
      <img alt="icon" class="logo" src="@/assets/css/images/icon.svg" width="125" height="125" />
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/about">About us</RouterLink>
        <RouterLink to="/checkout">Contact us</RouterLink>
      </nav>
    </div>
    <div class="search">
      <input type="text" placeholder="Search..">
    </div>
    <div class="cart">
      <img alt="cart" src="@/assets/css/images/cart.svg" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
  max-height: 100vh;
  background-color: #807BFF;
}
.logo {
  display: block; 
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);

}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    background-color: #807BFF;
    flex-wrap: wrap;
    width:100%;
  }
  nav {
    margin: auto;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 0;
    margin-top: 1rem;
  }
  .search input[type=text] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 30px;
  margin-right: 10px;
  font-size: 17px;
  }
  .cart{
    margin-top: 20px;
    /* margin-left: 150px; */
    /* justify-content: end; */
  }
}
</style>
