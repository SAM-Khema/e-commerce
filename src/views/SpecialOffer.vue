<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  <div class="about">
      <div class="first">
        <h1>New Arrivals</h1>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="wrapp">
            <div>
             <img alt="shirt" class="shirt" src="@/assets/css/images/special/first.svg"/>
            </div>
            <div class="details">
               <h3>T shirt</h3>
                <p>20% Off</p>
                <p>USD 10.50</p>
                <h3>USD 8.00</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="" class="" src="@/assets/css/images/special/second.svg" />
            </div>
            <div class="details">
               <h3>Count Your</h3>
                <p>20% Off</p>
                <p>USD 11</p>
                <h3>USD 9</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="" src="@/assets/css/images/special/third.svg" />
            </div>
            <div class="details">
               <h3>T-Shirt</h3>
                <p>20% off</p>
                <p>USD 10.50</p> 
                <h3>USD 8.00</h3>
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="hoodie" class="hoodie" src="@/assets/css/images/special/forth.svg" />
            </div>
            <div class="details">
               <h3>Make Friend</h3>
                <p>20% off</p>
                <p>USD 10</p>
                <h3>USD 8</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
        </div>
      </div>


      <div class="Second">
        <h1>Upcomming Event</h1>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="wrapp">
            <div>
             <img alt="shirt" class="shirt" src="@/assets/css/images/special/first.svg"/>
            </div>
            <div class="details">
               <h3>T shirt</h3>
                <p>20% Off</p>
                <p>USD 10.50</p>
                <h3>USD 8.00</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="" class="" src="@/assets/css/images/special/sixth.svg" />
            </div>
            <div class="details">
               <h3>Way Kambas Mini Maple</h3>
                <p>20% off</p>
                <p>USD 10</p>
                <h3>USD 8</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt="" src="@/assets/css/images/special/seventh.svg" />
            </div>
            <div class="details">
               <h3>T-Shirt</h3>
               <p>20% off</p>
                <p>USD 10.5</p>
                <h3>USD 8</h3> 
                <button class="btn">Discover</button>
            </div>
         </div>
         <div class="wrapp">
            <div>
             <img alt=""  src="@/assets/css/images/special/last.svg" />
            </div>
            <div class="details">
              <h3>T-Shirt</h3>
               <p>20% off</p>
                <p>USD 10.5</p>
                <h3>USD 8</h3> 
                <button class="btn">Discover</button>
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
  .about {
    min-height: 100vh;
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
    .Second {
      padding-left: 150px;
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
