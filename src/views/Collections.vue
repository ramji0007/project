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

    <div class="font-sans text-5xl  px-20 ">Business Collections</div>
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
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>            </div>
          </div>
        
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="object-center w-60 h-42" src="./images/investor.jpg" alt="Intelligent Investor">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Intelligent Investor</div>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>            </div>
          </div>
       
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="object-center w-60 h-55" src="./images/grow.jpg" alt="Think and Grow Rich">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Think and Grow Rich</div>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>            </div>
          </div>
            
        
      </div>
      </div>

      <div class="font-sans text-5xl  px-20 ">Fiction Collections</div>
      <div class="p-20">
      <div class="grid grid-cols-3 gap-10">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="object-center w-56 h-68" src="./images/mitch.jpg" alt="Mitch Albom">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Stranger in the Lifeboat</div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span>
              </div>
            </div>
          
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="object-center w-56 h-70" src="./images/fourWinds.jpg" alt="The Four Winds">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Four Winds</div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>              </div>
            </div>
         
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="object-center w-56 h-75" src="./images/lastthing.jpg" alt="Last Thing">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Last Thing He told Me</div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>              </div>
            </div>
              
          
        </div>
        </div>

        <div class="font-sans text-5xl  px-20 ">Self-Development Collections</div>
        <div class="p-20">
        <div class="grid grid-cols-3 gap-10">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="object-center w-62 h-42" src="./images/secret.jpg" alt="The Secret">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Secret</div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>                </div>
              </div>
            
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="object-center w-60 h-42" src="./images/ikagi.jpg" alt="Ikagi">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Ikagai</div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>                </div>
              </div>
           
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="object-center w-56 h-75" src="./images/power.jpg" alt="48 laws of Power">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 pt-5">The 48 Laws of Power</div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>                </div>
              </div>
                
            
          </div>
          </div>

          <div class="font-sans text-5xl  px-20 ">Non-Fictional Collections</div>
          <div class="p-20">
          <div class="grid grid-cols-3 gap-10">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="object-center w-52 h-42" src="./images/everything.jpg" alt="A Short History of Nearly Everything">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">A Short History of Nearly Everything</div>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>                  </div>
                </div>
              
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="object-center w-44 h-58" src="./images/immortal.jpg" alt="Immortal Life">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Immortal Life of Henrietta Lacks</div>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>                  </div>
                </div>
             
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="object-center w-52 h-75" src="./images/sapiens.png" alt="Sapiens">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Sapiens</div>
                  </div>
                  <div class="px-6 pt-6 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>                  </div>
                </div>
                  
              
            </div>
            </div>

            <div class="font-sans text-5xl  px-20 ">Top Series Collections</div>
            <div class="p-20">
            <div class="grid grid-cols-3 gap-10">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="object-center w-54 h-62" src="./images/harry.jpg" alt="Harry Potter">
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2 pt-9">Harry Potter 7 Books Set</div>
                    </div>
                    <div class="px-6 pt-6 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>                    </div>
                  </div>
                
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="object-center w-60 h-42" src="./images/hunger.jpg" alt="Hunger Games">
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">Hunger Game 4 Books Set</div>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>                    </div>
                  </div>
               
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="object-center w-56 h-65" src="./images/lord.jpg" alt="Lord of the Rings">
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2 pt-12">Lord of the Rings 4 Books Set</div>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$45</span>
            <router-link to = "/orderform"><button type="submit" value="Rich Dad Poor Dad"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span></button></router-link>                    </div>
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

export default{
    name : "Collections",
    components : {},
  
   
}
</script>