<template>
  <div class="home">
    <div class="first-content">
      <img alt="" class="group" src="@/assets/css/images/homepic/groupshirt.svg" />
    </div>
    <div class="second-content">
      <h1>Here is what we have for you</h1>
      <p>Find the best outifit is not a problem anymore.New STYLE & FASHION Start with us</p>
    </div>
      <div class="column">
        <div class="box1">
          <img alt="" src="@/assets/css/images/homepic/left_shirt.svg" />
          <div style="width: 250px; text-align: center;">
            <h2>Men's shirt</h2>
          </div>
        </div>
        <div class="box2">
          <img alt="" src="@/assets/css/images/homepic/middle_shirt.svg" />
          <div style="width: 250px; text-align: center;">
            <h2>Women top</h2>
          </div>
          
        </div>
        <div class="box3">
          <img alt="" src="@/assets/css/images/homepic/right_shirt.svg" />
          <div style="width: 250px; text-align: center;">
            <h2>New Style</h2>
          </div>
            
        </div>
      </div>
    <div class="last-content">
        <h1>New Release Product</h1>
    </div>
    <div class="new">
        <div class="col">
          <div class="item">
            <div>
             <img alt=""  src="@/assets/css/images/homepic/hoodie.svg" />
            </div>
            <div class="details">
               <h3>white cast</h3>
                <p>Slim and fit</p>
                <h3>USD 6</h3> 
                <button class="btn">Add to cart</button>
            </div>
         </div>

         <div class="item">
            <div>
             <img alt="" src="@/assets/css/images/homepic/midshirt.svg" />
            </div>
            <div class="details">
               <h3>Tshirt</h3>
                <p>Oversize</p>
                <h3>USD 6</h3> 
                <button class="btn">Add to cart</button>
            </div>
         </div>
         <div class="item">
            <div>
             <img alt=""  src="@/assets/css/images/homepic/top.svg" />
            </div>
            <div class="details">
               <h3>Tshirt</h3>
                <p>Oversize</p>
                <h3>USD 6</h3> 
                <button class="btn">Add to cart</button>
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
  .home {
    min-height: 100vh;
    /* width: fit-content; */
  }
  .first-content{
    align-items: center;
    justify-content: center;
    padding-top: 100px;
  }
  .second-content{
    align-items: center;
    text-align: center;
  }
  .column {
    padding-right: 120px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: space-evenly;
  }
  .column .box1 {
    width: 100px;
    padding: 10px;
    margin: 10px;
  }
  .column .box2 {
    width: 100px;
    padding: 10px;
    margin: 10px;
  }
  .column .box3 {
    width: 100px;
    margin: 10px;
    padding: 10px;
  }
  .last-content{
    width: fit-content;
    height: 80px;
    border: 1px solid #F5F5F5;
    background-color: #F5F5F5;
    border-radius: 10px;
    margin: auto;
    padding:auto;
  }
  
  .new{
     padding-top: 50px;
      margin-left: 100px;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 10px;
    }
    .col {
      margin-left: 40px;
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
    }
  
    .col .details{
      width :150px;
      height : 250px;
      border-radius: 10px;
      padding-left: 30px;
     
    }
    .item{
      margin-right: 5px;
      height: auto;
      gap: 4px;
      display: flex;
      border: 1px solid black;
      border-radius: 10px;
    }
    .item p{
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
  .footer{
    width: 100%;
    background-color: #A495FF ;
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
