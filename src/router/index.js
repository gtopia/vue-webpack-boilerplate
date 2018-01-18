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
        } else {
            next(false);
        }
    }
};

const UserHome = {
    template: '<transition name="slide"><div>User Home</div></transition>'
};

const UserProfile = {
    template: '<transition name="fade"><div>User Profile</div></transition>'
};

const UserPosts = {
    template: '<div>User Posts</div>'
};

const NotFound = {
    template: '<h1>404</h1>'
};

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/user/:id',
            name: 'router_user',
            meta: { requiresAuth: true },
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
    ],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到的位置
    }
});

router.beforeEach((to, from, next) => {
    console.log('>> beforeEach.');

    // Check login
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     // this route requires auth, check if logged in
    //     // if not, redirect to login page.
    //     if (!auth.loggedIn()) {
    //         next({
    //             path: '/login',
    //             query: { redirect: to.fullPath }
    //         })
    //     } else {
    //         next()
    //     }
    // } else {
    //     next() // 确保一定要调用 next()
    // }

    next();
});

export default router;
