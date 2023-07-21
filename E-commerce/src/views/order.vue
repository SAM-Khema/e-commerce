<script>
import headerVue from '@/components/header.vue';

export default{
    components: {headerVue}
}
</script>
<template>
  <headerVue/>
  <div class="cart">
    <div class=" text-2xl font-bold pl-36 pt-4">
        <h1>My Orders</h1>
    </div>
    <br>
    <div class="flex justify-evenly">
      <table>
        <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
        </tr>
        <tr class="h-48">
            <td><img alt="" class="h-48" src="@/assets/css/images/homepic/middle_shirt.svg" /></td>
            <td>1</td>
            <td>20USD</td>
            <td>23.07.2023</td>
        </tr>
        </table>
        
        
    </div>
  <div class="footer">
      
      <div class="category pt-4">
        <h3 class="font-bold text-2xl">Your Style</h3>
        <br>
        <img src="@/assets/css/images/footer.svg" alt="footer">
      </div>
      <div class="category pt-4">
        <h3 class="font-bold text-2xl">Join us</h3>
        <br>
        <p>Started with free account</p>
        <p>Free coupons</p>
        <p>Free Delivery</p>
      </div>
      <div class="category pt-4">
        <h3 class="font-bold text-2xl">Contact us</h3>
        <br>
        <p>Tel: 069924123</p>
        <p>Address Teuk Thla</p>
        <p>Phnom Penh</p>
      </div>
      <div class="category pt-4">
        <h3 class="font-bold text-2xl">Hire now</h3>
        <br>
        <p>Gain Experience</p>
        <p>Start with us</p>
      </div>
  </div>
  </div>
  </template>
  <style>
  @media (min-width: 1024px) {
    .product {
      min-height: 100vh;
      /* display: flex; */
    }
    table {
    margin-left: 150px;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 50%;
    }

    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    }
    
    .footer{
      height: 150px;
      width: 99%;
      background-color: #807BFF ;
      margin-top: 30px;
    }
    .footer{
      justify-content: space-evenly;
      margin-left: 10px;
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
    }
  }
  </style>
  