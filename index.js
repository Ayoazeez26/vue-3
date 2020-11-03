import { createApp } from 'vue'
import App from './App.vue'
import PokemonApp from './pokemon/App.vue'
import CompositionApp from './composition/App.vue'
import Microblog from './microblog/App.vue'
import RouterApp from './router/App.vue'
import { router } from './router/router.js'

const app = createApp(RouterApp)
app.use(router)
app.mount('#app')










































// import { createApp } from 'vue/dist/vue.esm-browser.js'
// // OPTIONS API

// const Num = {
//   props: {
//     number: {
//       type: Number,
//       required: true
//     }
//   },
//   template: `
//     <button :class="getClass(number)" @click="handleClick">
//       {{ number }}
//     </button>
//   `,
//   methods: {
//     getClass(number) {
//       if (this.isEven(number)) {
//         return 'red'
//       }
//       return 'blue'
//     },
//     isEven(number) {
//       return number % 2 === 0;
//     },
//     handleClick() {
//       this.$emit('chosen', this.number)
//     }
//   }
// }

// const app = createApp({
//   components: {
//     Num
//   },
//   template: `
//     <num v-for="number in numbers" :title="number" :number="number" @chosen="putInArray" />
//     <h3>Clicked number</h3>
//     <num v-for="number in clickedNumbers" :title="number" :number="number" />
//   `,
//   data() {
//     return {
//       numbers: [1,2,3,4,5,6,7,8,9,10],
//       clickedNumbers: []
//     }
//   },
//   methods: {
//     putInArray(number) {
//       this.clickedNumbers.push(number)
//     }
//   }
// }).mount('#app');
    
// window.app = app