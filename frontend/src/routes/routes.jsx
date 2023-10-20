import Category from '../Context/Category';
import Suppllier from '../Context/Suppllier';

const pulicRoutes =[
    {path: '/',component: Category},
    {path: '/supplliers',component: Suppllier},
];

const privateRoutes =[];

export {pulicRoutes,privateRoutes};