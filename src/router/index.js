import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/helloWorld';

Vue.use(Router);

const User = {
    template: '<div>User {{ $route.params.name }}</div>',
    beforeRouteUpdate (to, from, next) {
        // react to route changes...
        // don't forget to call next()
        console.log('>> to: ', to);
        console.log('>> from: ', from);
        next();
    }
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
