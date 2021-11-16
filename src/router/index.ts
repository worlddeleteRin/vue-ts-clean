import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from "vue-router";

// example of async import page
// const productPage = () => import(/* webpackChunkName: "product-page" */ '@/components/product/ProductPage.vue')




const routes: Array<RouteRecordRaw> = [
    // example of ts route
    /*
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
	children: [
		{
			path: "/product/:id",
			name: "ProductPage",
			component: productPage,
		},
	] as Array<RouteRecordRaw>
  },
  */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to) => {
	if (to.hash) {
		return {el: to.hash}
	}
  }
});

export default router;
