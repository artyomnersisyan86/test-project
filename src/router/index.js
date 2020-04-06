import Vue from 'vue'
import VueRouter from 'vue-router'
// import DirectoryOfPersons from '../views/DirectoryOfPersons.vue'
// import EmptyComponent from '../components/EmptyComponent'
// import emty2 from '../components/emty2'
// import Navbar from '../components/Navbar'
// import store from '../store/store'

Vue.use(VueRouter)

const routes = [{
        path: '/Navbar',
        name: 'Navbar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Navbar" */ '../components/Navbar'),

        children: [{
                path: '/DirectoryOfPersons',
                name: 'DirectoryOfPersons',
                // component: DirectoryOfPersons,
                component: () =>
                    import ( /* webpackChunkName: "DirectoryOfPersons" */ '../views/DirectoryOfPersons.vue')

            },
            {
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/About.vue')
            },
            {
                path: '/EmptyComponent',
                name: 'EmptyComponent',
                // component: EmptyComponent,
                component: () =>
                    import ( /* webpackChunkName: "EmptyComponent" */ '../components/EmptyComponent')

            },
            {
                path: '/emty2',
                name: 'emty2',
                // component: emty2,
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../components/emty2')

            }
        ]

    },


    {
        path: '/',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../components/Login/Login')
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