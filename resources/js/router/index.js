
import {createWebHistory, createRouter} from "vue-router";

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import HistoryLog from '../pages/HistoryLog';
import SlipCreate from '../pages/SlipCreate';
import EditPost from '../components/EditPost';
import AddPost from '../components/AddPost';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'history-log',
        path: '/history-log',
        component: HistoryLog
    },
    {
        name: 'slip-create',
        path: '/slip-create',
        component: SlipCreate
    },
    {
        name: 'addpost',
        path: '/posts/add',
        component: AddPost
    },
    {
        name: 'editpost',
        path: '/posts/edit/:id',
        component: EditPost
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
