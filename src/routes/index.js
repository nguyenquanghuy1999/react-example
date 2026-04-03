import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import AdminPanel from "../pages/AdminPanel";
import Home from "../pages/Home";

const routes = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/about', component: About, layout: MainLayout },
    { path: '/admin', component: AdminPanel, layout: null, protected: true },
    { path: '/admin/:resource', component: AdminPanel, layout: null, protected: true }
];


export default routes;
