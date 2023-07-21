<script>
import headerVue from "@/components/header.vue";
import productApi from '../libs/apis/product';
export default {
  components: { headerVue },
  data() {
    return {
      selectId: this.$route.params.Sid,
      products:[]
    };
  },
  methods:{
    
  },
  async mounted(){
    this.products = await productApi.all();
  }
};
</script>
<template>
  <headerVue />
  <div class="selected">
    <div class="text-2xl font-bodoniModa pl-36 pt-4" >
      <h1>Product Women</h1>
    </div>
    <div v-for="(product,index) in products" :key="index">
    <div class="selected flex justify-around" v-if="selectId == product._id">
      <div class="dispic">
        <br />
        <img alt="" :src="product.imageUrl" class="h-96" />
      </div>
      <div class="disdata pt-11">
        <h2 class="font-traviraj text-3xl">{{ product.title }}</h2>
        <h2 class="font-semibold text-3xl">{{ product.price }}</h2>
        <hr class="bold black" />
        <br />
        <p>Fit with all women from 18 to 25</p>
        <label for="size" class="font-bold">Size:</label>
        <select name="size" class="font-semibold" id="size">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <br />
        <br />
        <label for="quantity" class="font-bold">Quantity:</label>
        <br />
        <input
          type="text"
          id="quantity"
          name="quantity"
          value="1 2 3..."
          class="bg-[#E6E5FF] rounded"
        />
        <br />
        <br />
        <div class="flex">
          <div>
            <router-link
              to="/cart"
              type="button"
              class="border-2 rounded-xl p-4 border-[#6662CC] text-[#6662CC]"
              >Add to cart</router-link
            >
          </div>
          <div class="ml-4">
            <router-link
              to="/Selected"
              type="button"
              class="border-2 rounded-xl p-4 border-[#6662CC] text-[#6662CC]"
              >Buy now</router-link
            >
          </div>
        </div>
      </div>
    </div>
</div>
    <div class="footer">
      <div class="category pt-4">
        <h3 class="font-bold text-2xl">Your Style</h3>
        <br />
        <img src="@/assets/css/images/footer.svg" alt="footer" />
      </div>
      <div class="category pt-4">
        <h3 class="font-bold text-2xl">Join us</h3>
        <br />
        <p>Started with free account</p>
        <p>Free coupons</p>
        <p>Free Delivery</p>
      </div>
      <div class="category pt-4">
        <h3 class="font-bold text-2xl">Contact us</h3>
        <br />
        <p>Tel: 069924123</p>
        <p>Address Teuk Thla</p>
        <p>Phnom Penh</p>
      </div>
      <div class="category pt-4">
        <h3 class="font-bold text-2xl">Hire now</h3>
        <br />
        <p>Gain Experience</p>
        <p>Start with us</p>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .selected {
    min-height: 100vh;
    /* display: flex; */
  }

  .footer {
    height: 150px;
    width: 99%;
    background-color: #807bff;
    margin-top: 30px;
  }
  .footer {
    justify-content: space-evenly;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
  }
}
</style>
