app.component('product-display',{
    template:
    /*html */
    ` <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img v-bind:src="image" alt="">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <ul v-for="detail in details">
            <li>{{ detail }}</li>
        </ul>

        <div v-for="(variant,index) in variants" 
        v-bind:key='variant.id' 
        @mouseover="updateVariant(index)"
        class="color-circle"
        v-bind:style='{ backgroundColor: variant.color }'>
        {{ variant.color }}</div>

        <button class="button" 
        v-on:click="addToCart"
        v-bind:class="{ disabledButton: !inStock}"
        v-bind:disabled="!inStock">
        Add to Cart</button>
      </div>
    </div>
  </div>`,

    data(){
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant:0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image:"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",quantity:50},
                {id: 2235, color: 'blue',image:"https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",quantity:0},
            ]
        };
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateVariant(index){
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed:{
        title() {
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})