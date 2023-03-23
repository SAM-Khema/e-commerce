<template>
  <div class="home">
    <!-- <h1>This is a home page</h1> -->
    <div class="first-content">
      <img alt="lisa" class="lisa" src="@/assets/css/images/lisaimg.svg" />
      <div class="menu">
        <h1>Start to shopping with us</h1>
        <hr><p>Let's start with the products can't wait for window shopping</p>
        <button class="btn">Add to cart</button>
      </div>
    </div>

    <div class="second-content">
      
      <div class="shirt">
        <h1>We're focused</h1>
        <hr><p>We're providing not only shopping,but also</p>
          <p>suggest for the best outfit with you</p> 
        <button class="btn">Get started</button>
      </div>
      <img alt="tshirt" class="tshirt" src="@/assets/css/images/tshirt.svg" />
    </div>
    <div class="bestseller">
      <h1>Best Seller</h1>
      <div class="column">
        <div class="item">
          <div class="details">
             <h3>Luxurious Jacket</h3>
              <p>See the beauty of exotic world
              with the luxurious glasses</p>
              <h4>Discover Now</h4> <hr>
              <button class="btn">Add to cart</button>
          </div>
         <div>
           <img alt="hoodie" class="hoodie" src="@/assets/css/images/hoodie.svg" />
        </div>
       </div>
       <div class="item">
          <div class="details">
             <h3>Luxurious Tshirt</h3>
              <p>See the beauty of exotic world
              with the luxurious glasses</p>
              <h4>Discover Now</h4> <hr>
              <button class="btn">Add to cart</button>
          </div>
         <div>
           <img alt="hoodie" class="hoodie" src="@/assets/css/images/hshirt.svg" />
        </div>
       </div>
      </div>
    </div>
    <div class="footer">
      
        <div class="category">
          <h3>Join us</h3>
          <p>started with free account</p>
          <p>Free coupons</p>
          <p>Free shipping</p>
        </div>
        <div class="category">
          <h3>T shirts</h3>
          <p>Women clothes</p>
          <p>Men clothes</p>
          <p>Baby Glocerries</p>
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
  .home {
    min-height: 100vh;
    /* display: block; */
    background-color: #E6E5FF;
    /* align-items: center; */
  }
  .first-content{
    align-items: center;
    justify-content: center;
    display: flex;
    padding-top: 100px;
    justify-content: space-evenly;
  }
  .second-content{
    align-items: center;
    justify-content: center;
    display: flex;
    /* padding-top: 100px; */
    justify-content: space-evenly;
  }
  .menu h1{
    margin-left: 10px;
  }
  .shirt h1{
    margin-right: 10px;
  }
  .btn{
    /* background-color: aqua; */
    border: 2px solid #807BFF;
    background-color: #E6E5FF;
    color: #807BFF;
    border-radius: 20px;
    width: 100px;
  }
  .bestseller{
    margin-left: 100px;
  }
  .bestseller hr{
    width:100px;
    float: left;

  }
  .column {
    margin-left: 40px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
  }

  .column .details{
    width :200px;
    height : 250px;
    background-color: #96DBDB;
    border: 2px solid #96DBDB;
    padding-left: 30px;
    /* margin-left: 50px; */
    /* margin: 15px; */
    /* text-align: center; */
  }
  .item{
    margin-right: 5px;
    gap: 4px;
  }
  .item p{
    color: aliceblue;
    /* display: flexbox; */
  }
  .hoodie{
    margin-left: -10px;
  }
  .item{
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
