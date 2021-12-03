<template>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="output.css">
</head>
<body class="text-xl bg-grey">
    <div class="flex flex-col">
    <div class="fill-current text-green-600 bg-center" style="background-image:url('https://freesvg.org/img/1545301649.png')">
    <div class="flex flex-row p-20 opacity-80">    
    <div class="font-sans text-5xl  bg-gray-200 focus:bg-white ">Grow More Collections</div>
    </div>
    </div>
    </div>
    
    <div class="md:flex md:justify-center mb-6 pt-10">
    <flex flex-col>
    <form @submit="onSubmit" class="w-full max-w-lg form">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input v-model="firstName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name">
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input v-model="lastName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" required>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Address
            </label>
            <input v-model="Address" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Address" required>
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              City
            </label>
            <input v-model="City" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Toronto" required>
          </div>
          
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Book
            </label>
            <div class="relative">
              <select v-model="Book" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
                <option>Rich Dad Poor Dad</option>
                <option>The Intelligent Investor</option>
                <option>Think and Grow Rich</option>
                <option>The Stranger in the Lifeboat</option>
                <option>The Four Winds</option>
                <option>The Last Thing he told me</option>
                <option>The Secret</option>
                <option>Ikagai</option>
                <option>The 48 Laws of Power</option>
                <option>A short history of nearly Everyth</option>
                <option>The Immortal Life of Henriett Lacks</option>
                <option>Sapiens</option>
                <option>Harry Potter 7 Books Set</option>
                <option>Hunger Game 4 Books set</option>
                <option>Lord of the Rings 4 Books set</option>
                
                
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Province
            </label>
            <div class="relative">
              <select v-model="Province" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
                <option>Alberta</option>
                <option>Manitoba</option>
                <option>Ontario</option>
                <option>British Colombia</option>
                <option>Quebec</option>
                <option>New Brunswick</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Postal Code
            </label>
            <input v-model="PostalCode" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="P6A 2H9" required>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 pt-10">
            <route-link to="/orderplaced">
            <button type="submit" value="order placed" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Place Order
              </button>
            </route-link>
          
          </div>
          

          
        </div>
      </form>
      </flex>
      </div>
</body>
</template>

<script>

export default{
    name: 'AddOrder',

    data(){
      
        return{
        firstName: '',
        lastName: '',
        Address: '',
        City:'',
        Province:'',
        PostalCode:'',
        Book:'',
        Price:'',
        Status: ''
        }

    },

    methods:{
        onSubmit(e){
            e.preventDefault()

            if(!this.firstName)
            {
                alert('Please add a task')
            return
            }
        
        const newOrder = {
            
           
            firstName: this.firstName,
            lastName: this.lastName,
            Address: this.Address,
            City: this.City,
            Province: this.Province,
            PostalCode: this.PostalCode,
            Book:this.Book,
            Price: '45',
            Status: 'Order Placed'
            
        }
        
        //this.$emit('add-order', newOrder)
        this.addOrder(newOrder)
        

        this.firstName = ''
        this.lastName = ''
        this.Address = ''
        this.City = ''
        this.Province = ''
        this.PostalCode = ''
        this.Book= ''
        this.Price=''
        this.Status=''
    },

    
      async addOrder(newOrder){
     
      const res = await fetch('http://localhost:5000/orders',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
            body: JSON.stringify(newOrder)
      })

      const data = await res.json()
      console.log(data)
    },
    }
   
}
</script>
