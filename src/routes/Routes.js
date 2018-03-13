
import RedirectToHome from '../components/RedirectToHome';
import Home from '../components/Home';
import About from '../components/About';
import Entity from '../components/Entity';
import Intent from '../components/Intent';
import User from '../components/User';
import User1 from '../components/User1';


const routes = [
    {
        path:'/',
        exact:true,
        routecomponent:RedirectToHome
    },
    {
        path:'/home',
        exact:true,
        routecomponent:Home
    },
    {
        path:'/about',
        exact:true,
        routecomponent:About
    },
    {
        path:'/user',
        exact:false,
        routecomponent:User,
        routes : [
            {
                path:'/user/user1',
                exact:true,
                routecomponent:User1
            }
        ]
    },
    {
        path:'/intent',
        exact:false,
        routecomponent:Intent 
    },
    {
        path:'/entity',
        exact:false,
        routecomponent:Entity 
    },


];

export default routes;

