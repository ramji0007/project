<template>
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="output.css">
</head>
<body class="text-xl bg-grey ">
    <div class="flex flex-col">
    <div class="fill-current text-green-600 bg-center" style="background-image:url('https://freesvg.org/img/1545301649.png')">
    <div class="flex flex-row p-20 opacity-80">    
    <div class="font-sans text-5xl  bg-gray-200 focus:bg-white ">Grow More Collections</div>
    </div>
    </div>
    </div>
    <div class="flex flex-col " >
    <div class="bg-yellow-200">
    <div class="flex">

      <div class ="px-20 py-10 text-2xl"><router-link to="/"><button class="hover:bg-red-200 ">Home</button></router-link></div>
      <div class ="p-10 text-2xl" ><router-link to="/collections"><button class="hover:bg-red-200">Collection</button></router-link></div>
       <div class ="p-10 text-2xl"><router-link to="/aboutus"><button class="hover:bg-red-200 ">About Us</button></router-link></div>
       <div class ="p-10 text-2xl"><router-link to="/contactus"><button class="hover:bg-red-200 ">Contact Us</button></router-link></div>
      <div class ="p-10 text-2xl"><router-link to="/trackorder"><button class="hover:bg-red-200 ">Track Order</button></router-link></div>
    </div>
    </div>
    </div>
    <div class="md:flex md:justify-center mb-6 pt-10">
    <flex flex-col>
    <form class="w-full max-w-lg form">
      
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Tracking Number
            </label>
            <input v-model="trackingNumber" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="123456789">
            <p class="text-gray-600 text-xs italic">Enter a valid tracking number</p>
          </div>
        </div>
       
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 pt-5 pl-20">
            <router-link to="/trackorder">
            <button type="submit" @click="onSubmit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Track
              </button>
            </router-link>  
          </div>
    
      </form>
      </flex>
      </div>
</body>
      


<div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Customer Name
            </label>
            <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{{this.order.firstName}} {{this.order.lastName}}</div>
          </div>
        </div>
<div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Shipping Address
            </label>
            <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> {{this.order.Address}}</div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Book Name
            </label>
            <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{{this.order.Book}}</div>
          </div>
        </div>

         <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Price
            </label>
            <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{{this.order.Price}}</div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Status
            </label>
            <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{{this.order.Status}}</div>
          </div>
        </div>
</template>

<script>

export default{
    name : "TrackOrder",
    components : {},
    data(){
        
        return{
            order: Object,
            trackingNumber:0
        }

    
    },

   /* async created(){
        this.orders  = await this.fetchOrder(1)
    },*/
    
    methods:{
    async fetchOrders(){
      const res = await fetch('http://process.env.PORT/orders')

      const data = await res.json()

      return data;
    },

    async fetchOrder(id){
      const res = await fetch(`http://process.env.PORT/orders/${id}`)

      const data = await res.json()

      return data;
    },

    async onSubmit(e){
        e.preventDefault()

        if(!this.trackingNumber)
            {
                alert('Please add a tracking number')
            return
            }
            console.log(this.trackingNumber)
            this.order =  await this.fetchOrder(this.trackingNumber)
            
            this.trackingNumber=0
    

    }
    }
   
}
</script>