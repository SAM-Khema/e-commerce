<script>
import headerVue from '@/components/header.vue';

export default{
    components: {headerVue}
}

</script>
<template>
  <headerVue/>
  <div class="pay">
    <div class="flex justify-evenly">
        <img src="@/assets/css/images/payment/sucessful.svg" alt="sucessful">
        <img src="@/assets/css/images/payment/good.svg" alt="good">
        
    </div>
    <div class="flex justify-end pr-56 ">
                <br>
                <router-link to="/order" type="button" class=" border-2 w-32 items-center h-8 rounded-xl text-center ">Your Order</router-link>
                <router-link to="/home" type="button" class="ml-8 border-2 w-32 items-center h-8 rounded-xl text-center border-[#6662CC] bg-[#6662CC] text-white">Back Home</router-link>
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
    .pay {
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
  