<template>
    <div class="contact">
      <!-- <h1>This is a checkout page</h1> -->
<!-- <h3>Contact Form</h3> -->

<div class="container">
  <div class="left" style="width: 50%;">
    <form action="">
    <label for="fname">Name</label>
    <input type="text" id="fname" name="name" placeholder="">

    <label for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="">

    <label for="phonenumber">Phone Number</label>
    <input type="text" id="phonenumber" name="phonenumber" placeholder="">
    <input type="submit" value="Submit">
  </form>
  </div>
  <div class="right">
    <form>
    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>
  </form>
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
    .contact {
      min-height: 100vh;
      background-color: #E6E5FF;
      padding-top: 50px;
      /* height: 500px; */
      
    }
    input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    input[type=submit] {
      background-color: #656ED3;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type=submit]:hover {
      background-color: #656ED3;
    }

    .container {
      width: 80%;
      margin: auto;
      border-radius: 5px;
      background-color: white;
      padding: 20px;
      display: flex;
      justify-content: space-around;
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