const app = Vue.createApp({
    data(){
        return {
            cart:0,
            product: 'Socks',
            image: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image:"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"},
                {id: 2235, color: 'blue',image:"https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg"},
            ]
        };
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
});