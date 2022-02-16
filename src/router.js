import VueRouter from 'vue-router'

import MainLayout from './components/MainLayout';
import Home from './components/views/Home';
import CatalogLayout from './components/catalog/CatalogLayout';
import CartLayout from './components/catalog/CartLayout';
import Registr from './components/views/registratsiya/Registr';
import Register from './views/admin/Register';
import Login from './views/admin/Login'
import TokenService from './services/TokenService';

const routes = [
        {
            path: '/',
            component: MainLayout,
            name: 'main-layout',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/catalog-layout',
                    name: 'catalog-layout',
                    component: CatalogLayout
                },
                {
                    path: '/cart-layout',
                    name: 'cart-layout',
                    component: CartLayout,
                    props: true
                },
                {
                    path: '/registr',
                    name:'registr',
                    component: Registr
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/admin',
            name: 'admin',
            // redirect: { name: 'Dashboard' },
            component: () => import('./components/admin/MainDashboardLayout'),
            children: [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: () => import('./views/admin/Dashboard')
                },
                {
                    path: '/blog',  
                    component: () => import('./views/admin/blog/index.vue'),
                    children:[
                        {
                            path: '/',
                            name: 'BlogIndex',
                            component: () => import('./views/admin/blog/pages/index.vue')
                        }
                    ]
                },
                {
                    path: '/categories',
                    component:() => import('./views/admin/categories/index.vue')
                }
            ]
        }
    ];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to,from,next)=>{
    if(TokenService.getToken()){
        if(to.path === '/login' || to.path === '/register'){
            next({path: '/admin'})
        }
        else next();
    }else{
        if(
            to.path === "/login"||
            to.path === "/register"||
            to.path === "/"
        ){
            next();
        }
        else{
            next('/login')
        }
    }
})

export default router;