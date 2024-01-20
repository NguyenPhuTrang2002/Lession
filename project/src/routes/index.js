import Home from '../pages/Home/Index';
import Products from '../pages/Products/Index';


const publicRoutes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
];
const privateRoutes = [

]
export { publicRoutes, privateRoutes } 