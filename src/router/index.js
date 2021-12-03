import {createRouter, createWebHistory} from 'vue-router'
import Header from '../views/Header.vue'
import Collections from '../views/Collections.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import AddOrder from '../components/AddOrder.vue'
import TrackOrder from "../views/TrackOrder.vue"
import OrderPlaced from "../views/OrderPlaced.vue"
const routes =[

    {
        path: '/',
        name: "Header",
        component: Header
    },
    
    {
        path: '/collections',
        name: "Collections",
        component: Collections
    },

    {
        path: '/aboutus',
        name: 'AboutUs',
        component: AboutUs
    },

    {
        path:'/contactus',
        name: 'ContactUs',
        component: ContactUs
    },

    {
        path: '/orderform',
        name: 'AddOrder',
        component: AddOrder
    },

    {
        path: '/trackorder',
        name: 'TrackOrder',
        component: TrackOrder
    },

    {
        path: '/orderplaced',
        name: 'OrderPlaced',
        component: OrderPlaced
    }

   
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),routes,

})

export default router