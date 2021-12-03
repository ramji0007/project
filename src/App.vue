<template>

  <router-view></router-view>

  

  
  
</template>

<script>

import './assets/tailwind.css'
//import Orders from './components/Orders.vue'
//import AddOrder from './components/AddOrder.vue'
export default {
  name: 'App',
  components: {
   // Orders, //AddOrder
  },

  

  methods:{
    /*async addOrder(order){
     
      const res = await fetch('http://localhost:5000/orders',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
            body: JSON.stringify(order)
      })

      const data = await res.json()

      this.orders = [...this.orders, data]
    },*/

    async fetchOrders(){
      const res = await fetch('http://localhost:5000/orders')

      const data = await res.json()

      return data;
    },

    async fetchOrder(id){
      const res = await fetch(`http://localhost:5000/orders/${id}`)

      const data = await res.json()

      return data;
    }
  },


  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
