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
    <img class="object-fill px-20" src="./images/aboutus.jpg">
    
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

export default{
    name : "AboutUs",
    components : {},
  
   
}
</script>