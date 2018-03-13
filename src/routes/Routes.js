
import RedirectToHome from '../components/RedirectToHome';
import Home from '../components/Home';
import About from '../components/About';
import Entity from '../components/Entity';
import Intent from '../components/Intent';
import User from '../components/User';


const routes = [
    {
        path:'/',
        exact:true,
        component:RedirectToHome
    },
    {
        path:'/home',
        exact:true,
        component:Home
    },
    {
        path:'/about',
        exact:true,
        component:About
    },
    {
        path:'/user',
        exact:false,
        component:User
    },

];

export default routes;

