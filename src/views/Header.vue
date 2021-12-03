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
    <div class="font-sans text-5xl  px-20 ">Best Sellers</div>
    <div class="p-20">
    <div class="grid grid-cols-3 gap-10">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="object-center w-52 h-42" src="./images/richdad.jpg" alt="Rich Dad Poor Dad">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Rich Dad Poor Dad</div>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
              <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>
            </div>
          </div>
        
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="object-center w-60 h-42" src="./images/ikagi.jpg" alt="Rich Dad Poor Dad">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Ikagai</div>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>            </div>
          </div>
       
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="object-center w-52 h-75" src="./images/sapiens.png" alt="Rich Dad Poor Dad">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Sapiens</div>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
          <router-link to = "/orderform"><button><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>            </div>
          </div>
            
        
      </div>
      </div>
      <div class="flex flex-col">
        <div class="fill-current text-black-600 bg-center" style="background-image:url('https://freesvg.org/img/bookshelf-01.png')">
        <div class="flex flex-row p-20 opacity-80 ">    
        <div class="font-sans text-xl  bg-gray-200 focus:bg-white"> Ⓒ All right Reserved-Grow More Collections</div>
        </div>
        </div>
        </div>
</body>
  


</template>


<script>
//import AddOrder from '../components/AddOrder.vue'

export default{
    name : "Header",
   // components : {AddOrder},
  
   
}
</script>
