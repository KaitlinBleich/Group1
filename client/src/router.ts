import Vue from "vue";
import Router from "vue-router";

import CustomerNav from "./views/customer/CustomerNav.vue";
import Home from "./views/customer/Home.vue";

import EmployeeNav from "./views/employee/EmployeeNav.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      //ALL OF THE ROUTES FOR CUSTOMER PAGES
      path: "/",
      name: "customermenu",
      component: CustomerNav,
      children : [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "/about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/customer/About.vue")
        },
        {
          path: "/shopall",
          name: "shopall",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/customer/ShopAll.vue")
        },
        {
          path: "/shopbikes",
          name: "shopbikes",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/customer/ShopBikes.vue")
        },
        {
          path: "/shopparts",
          name: "shopparts",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/customer/ShopParts.vue")
        },
        {
          path: "/services",
          name: "services",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/customer/Services.vue")
        },
        {
          path: "/orders",
          name: "orders",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/customer/Orders.vue")
        },
        {
          path: "/cart",
          name: "cart",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/customer/Cart.vue")
        },
      ]
    },
   
    {
      //ALL OF THE ROUTES FOR EMPLOYEE PAGES
      path: "/",
      name: "employee",
      component: EmployeeNav,
      children : [
        {
          path: "/employee",
          name: "employee",
          component: () =>
            import("./views/employee/Home.vue")
        },
        {
          path: "/employee/orders",
          name: "orders",
          component: () =>
            import("./views/employee/Orders.vue")
        },
        {
          path: "/employee/inventory",
          name: "inventory",
          component: () =>
            import("./views/employee/Inventory.vue")
        },
        {
          path: "/employee/services",
          name: "services",
          component: () =>
            import("./views/employee/Services.vue")
        },
        {
          path: "/employee/storeinfo",
          name: "storeinfo",
          component: () =>
            import("./views/employee/StoreInfo.vue")
        },
        {
          path: "/employee/employees",
          name: "employees",
          component: () =>
            import("./views/employee/Employees.vue")
        },
        {
          path: "/employee/myprofile",
          name: "myprofile",
          component: () =>
            import("./views/employee/MyProfile.vue")
        }
      ]
    },
  ]
});
