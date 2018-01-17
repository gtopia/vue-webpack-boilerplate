import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/helloWorld';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        // {
        //     path: '/foo',
        //     component: Foo
        // },
        // {
        //     path: '/bar',
        //     component: Bar
        // }
    ]
});
