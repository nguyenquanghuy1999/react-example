import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About";
import AdminPanel from "@/pages/AdminPanel";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";


const routes = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/about', component: About, layout: MainLayout },
    { path: '/admin', component: AdminPanel, layout: null, protected: true },
    { path: '/admin/:resource', component: AdminPanel, layout: null, protected: true },
    { path: '*', component: NotFound, layout: null }
];


export default routes;
