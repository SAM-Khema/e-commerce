<template>
    <div class="product">
      <div class="first">
        <h1>Our Product</h1>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="wrapp">
            <div>
             <img alt="shirt" class="shirt" src="@/assets/css/images/product/shirt1.svg"/>
            </div>
            <div class="details">
               <h3>T shirt</h3>
                <p>New Day Black ME</p>
                <h3>USD 5</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="" class="" src="@/assets/css/images/product/shirt2.svg" />
            </div>
            <div class="details">
               <h3>Count Your</h3>
                <p>Start your day with me</p>
                <h3>USD 7</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="hoodie" class="hoodie" src="@/assets/css/images/homepic/hoodie.svg" />
            </div>
            <div class="details">
               <h3>Hoodie</h3>
                <p>New world from now</p>
                <h3>USD 6</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="hoodie" class="hoodie" src="@/assets/css/images/Product/shirt4.svg" />
            </div>
            <div class="details">
               <h3>Make Friend</h3>
                <p>Make Friend Love me</p>
                <h3>USD 8</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="hoodie" class="hoodie" src="@/assets/css/images/Product/shirt5.svg" />
            </div>
            <div class="details">
               <h3>Green Cast</h3>
                <p>New world From now</p>
                <h3>USD 6</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="hoodie" class="hoodie" src="@/assets/css/images/Product/shirt6.svg" />
            </div>
            <div class="details">
               <h3>Way Kambas Mini Maple</h3>
                <p>New Start New Generation</p>
                <h3>USD 8</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
        </div>
      </div>

      <div class="bestseller">
        <h1>Best Seller</h1>
        <div class="best">
          <div class="itm">
            <div class="details">
               <h3>Luxurious Jacket</h3>
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
               <h3>Luxurious Tshirt</h3>
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
        <div class="category">
          <h3>Your Style</h3>
          <img src="@/assets/css/images/footer.svg" alt="footer">
        </div>
        <div class="category">
          <h3>Join us</h3>
          <p>Started with free account</p>
          <p>Free coupons</p>
          <p>Free Delivery</p>
        </div>
        <div class="category">
          <h3>Contact us</h3>
          <p>Tel: 069924123</p>
          <p>Address Teuk Thla</p>
          <p>Phnom Penh</p>
        </div>
        <div class="category">
          <h3>Hire now</h3>
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
    .first{
      padding-left: 150px;
    }
    .content{
     padding-top: 50px;
      margin-left: 100px;
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 50px;
    }
    .wrap {
      margin-left: 40px;
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
      justify-content: space-between;
    }
  
    .wrap .details{
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
      /* background-color: #E6E5FF; */
      /* color: #807BFF; */
      border-radius: 10px;
      padding: 15px;
      width: 100px;
    }
    .bestseller h1{
      margin-left: 150px;
    }
    .bestseller hr{
      width:100px;
      float: left;
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
      color: aliceblue;
    }
    .itm{
      display: flex;
    }
    .footer{
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
  