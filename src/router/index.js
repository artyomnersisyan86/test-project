import Vue from 'vue'
import VueRouter from 'vue-router'
// import DirectoryOfPersons from '../views/DirectoryOfPersons.vue'
// import EmptyComponent from '../components/EmptyComponent'
// import emty2 from '../components/emty2'
// import NavbarScript from '../components/NavbarScript'
// import store from '../store/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/NavbarScript',
        name: 'NavbarScript',
        component: () => import ( '../components/Navbar'),

        children: [
            {
                path: '/DirectoryOfPersons',
                name: 'DirectoryOfPersons',
                // component: DirectoryOfPersons,
                component: () => import ('../views/DirectoryOfPersons.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import ('../views/About.vue')
            },
            {
                path: '/EmptyComponent',
                name: 'EmptyComponent',
                // component: EmptyComponent,
                component: () => import ('../components/EmptyComponent')
            },
            {
                path: '/emty2',
                name: 'emty2',
                // component: emty2,
                component: () => import ('../components/emty2')
            }
        ]
    },
    {
        path: '/',
        name: 'Login',
        component: () => import ('../components/Login/Login')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes
})

// router.beforeEach((to, from, next) => {
//     if (store.state.tabs.length === 0 && to.path != '/') {
//         // console.log(store.state.tabs.length)
//         next('/');
//     } else {
//         store.state.tabs.length--
//             next()
//     }
// })

export default router
