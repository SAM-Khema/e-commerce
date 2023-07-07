<script>
import headerVue from '@/components/header.vue';

export default{
    components: {headerVue}
}
</script>
<template>
  <headerVue/>
    <div class="product">
      <div class="first-part text-3xl font-bold pl-36 pt-4">
        <h1 >Our Product</h1>
      </div>
      <div class="content">
        <div class="wrapper">
          <div class="wrapp">
            <div>
             <img alt="shirt" class="shirt" src="@/assets/css/images/product/shirt1.svg"/>
            </div>
            <div class="details pt-4">
               <h3 class="font-semibold text-xl">T shirt</h3>
                <p>New Day Black ME</p>
                <h3>USD 5</h3> 
                <br>
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="" class="" src="@/assets/css/images/product/shirt2.svg" />
            </div>
            <div class="details pt-4">
               <h3 class="font-semibold text-xl">Count Your</h3>
                <p>Start your day with me</p>
                <h3>USD 7</h3> 
                <br>
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="hoodie" class="hoodie" src="@/assets/css/images/homepic/hoodie.svg" />
            </div>
            <div class="details pt-4">
               <h3 class="font-semibold text-xl">Hoodie</h3>
                <p>New world from now</p>
                <h3>USD 6</h3> 
                <br>
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="hoodie" class="hoodie" src="@/assets/css/images/Product/shirt4.svg" />
            </div>
            <div class="details pt-4">
               <h3 class="font-semibold text-xl">Make Friend</h3>
                <p>Make Friend Love me</p>
                <h3>USD 8</h3> 
                <br>
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="hoodie" class="hoodie" src="@/assets/css/images/Product/shirt5.svg" />
            </div>
            <div class="details pt-4">
               <h3 class="font-semibold text-xl">Green Cast</h3>
                <p>New world From now</p>
                <h3>USD 6</h3> 
                <br>
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="hoodie" class="hoodie" src="@/assets/css/images/Product/shirt6.svg" />
            </div>
            <div class="details pt-4">
               <h3 class="font-semibold text-xl">Way Kambas Mini Maple</h3>
                <p>New Start New</p>
                <h3>USD 8</h3> 
                <br>
                <button class="btn">Discover</button>
            </div>
         </div>
        </div>
      </div>

      <div class="bestseller">
        <h1 class="first-part text-3xl font-bold pl-36">Best Seller</h1>
        <br>
        <div class="best">
          <div class="itm">
            <div class="details">
               <h3 class="font-semibold text-xl">Luxurious Jacket</h3>
                <p>See the beauty of exotic world
                with the luxurious glasses</p>
                <h4>Discover Now</h4> <hr>
                <button class="btn">Add to cart</button>
            </div>
           <div>
             <img alt="shirt" class="hoodie" src="@/assets/css/images/product/best1.svg" />
          </div>
         </div>

         <div class="itm">
            <div class="details">
               <h3 class="font-semibold text-xl">Luxurious Tshirt</h3>
                <p>See the beauty of exotic world
                with the luxurious glasses</p>
                <h4>Discover Now</h4> <hr>
                <button class="btn">Add to cart</button>
            </div>
           <div>
             <img alt="shirt" class="hoodie" src="@/assets/css/images/product/hshirt.svg" />
          </div>
         </div>
        </div>
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
    .content{
     padding-top: 50px;
      margin-left: 100px;
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 50px;
    }
    .wrapper {
      margin-left: 40px;
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
      justify-content: space-between;
    }
  
    .wrapper .details{
      width :200px;
      height : 250px;
      border-radius: 10px;
      padding-left: 30px;
     
    }
    .wrapp{
      margin: 25px;
      margin-right: 5px;
      gap: 4px;
      display: flex;
      border: 1px solid black;
      border-radius: 10px;
    }
    .wrapp p{
      color: gray;
    }
    .btn{
      border: 2px solid black;
      border-radius: 10px;
      padding: 15px;
    }
    .best {
      margin-left: 40px;
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
      justify-content: space-evenly;
    }
  
    .best .details{
      width :200px;
      height : 250px;
      background-color: #96DBDB;
      border: 2px solid #96DBDB;
      padding-left: 30px;
     
    }
    .itm{
      margin-right: 5px;
      gap: 4px;
      justify-content: space-between;
    }
    .itm p{
      color: grey;
    }
    .itm{
      display: flex;
    }
    hr{
      padding-top: 5px;
      color: black;
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
  