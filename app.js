const app = Vue.createApp({
    data(){
        return {
            cart:0,
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
});