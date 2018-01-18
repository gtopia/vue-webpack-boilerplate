import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/helloWorld';

Vue.use(Router);

const User = {
    template: '<div>User {{ $route.params.name }}</div>'
};

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/user/:name',
            component: User
        }
    ]
});
