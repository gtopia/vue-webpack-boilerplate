import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/helloWorld';

Vue.use(Router);

const User = {
    // template: '<div>User {{ $route.params.id }}</div>',
    props: ['id'],
    template: `
        <div class="user">
            <h2>User {{ id }}</h2>
            <router-view></router-view>
        </div>
    `,
    beforeRouteUpdate(to, from, next) {
        // react to route changes, called only when component been reused
        console.log('>> to: ', to);
        console.log('>> from: ', from);

        // don't forget to call next()
        next();
    },
    beforeRouteLeave(to, from, next) {
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!');

        if (answer) {
            next();
        }
        else {
            next(false);
        }
    }
};

const UserHome = {
    template: '<div>User Home</div>'
};

const UserProfile = {
    template: '<div>User Profile</div>'
};

const UserPosts = {
    template: '<div>User Posts</div>'
};

const NotFound = {
    template: '<h1>404</h1>'
};

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/user/:id',
            name: 'router_user',
            components: {
                default: User,
                router_view1: UserProfile,
                router_view2: UserPosts
            },
            props: {
                default: true,
                router_view1: false,
                router_view2: false
            },
            children: [
                // 当 /user/:id 匹配成功，
                // UserHome 会被渲染在 User 的 <router-view> 中
                {
                    path: '',
                    component: UserHome
                },
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'profile',
                    component: UserProfile
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: 'posts',
                    component: UserPosts
                }
            ],
            redirect: '/user/:id/profile'
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});
