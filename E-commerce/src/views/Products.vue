<script>
import headerVue from '../components/header.vue';
import categoryApi from "@/libs/apis/category";
import productApi from "@/libs/apis/product";
import product from '../libs/apis/product';

export default{
    components: {headerVue} ,
    data() {
    return {
      categories: [],
      products: [],
      title: "",
      categoryId: "",
      desc: "",
      price: "",
      imageUrl: "",
      selectId: this.$route.params.Sid
      // formatLable: "Add new",
      // isonEdit: false,
    }
    },
    methods:{
        gotoselect(selectId){
            this.$router.push({name:'productselect',params:{Sid:selectId}})
        }
    },
    async mounted() {
    this.categories = await categoryApi.all(),
    this.products = await productApi.all() 
  },
}
</script>
<template>
  <headerVue/>
    <div class="product">
      <div class="first-part text-3xl font-bold pl-36 pt-4">
        <h1 >Our Product</h1>
      </div>
      <div class="content" v-for="product in products" :key="product._id">
        <div class="wrapper ">
          <div class="wrapp ">
            <div >
             <img :src="product.imageUrl" class="h-52" />
            </div>
            <div class="details pt-4">
               <h3 class="font-semibold text-xl">{{ product.title }}</h3>
                <p>{{ product.desc }}</p>
                <h3>{{ product.price }}</h3> 
                <br>
                <button type="button" class="btn " @click="gotoselect(product._id)">Discover</button>
            </div>
         </div>
        </div>
      </div>
      <h1 class="first-part text-3xl font-bold pl-36">Best Seller</h1>
      <div class="bestseller flex pl-36 justify-evenly">
        <br>
        <div class="best " v-for="product in products.slice(0,2)" :key="product._id">
          <div class="itm ">
            <div class="details">
               <h3 class="font-semibold text-xl">{{ product.title}}</h3>
               <br>
                <p>{{ product.desc }}</p>
                <!-- <h4>Discover Now</h4> <hr> -->
                <br>
                <router-link to="/Selected" type="button" class="btn ">Discover</router-link>
            </div>
           <div>
             <img alt :src="product.imageUrl" class="h-64"/>
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
      grid-gap: 10px; 
    }
    .wrapper {
      margin-left: 40px;
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
      justify-content: space-between;
    }
  
    .wrapper .details{
      width :150px;
      height : 200px;
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
      margin-left: 10px;
      align-content: stretch;
      justify-content: center;
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
  