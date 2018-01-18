import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/helloWorld';

Vue.use(Router);

const User = {
    // template: '<div>User {{ $route.params.id }}</div>',
    template: `
        <div class="user">
            <h2>User {{ $route.params.id }}</h2>
            <router-view></router-view>
        </div>
    `,
    beforeRouteUpdate(to, from, next) {
        // react to route changes...
        // don't forget to call next()
        console.log('>> to: ', to);
        console.log('>> from: ', from);
        next();
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

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/user/:id',
            name: 'route_user',
            component: User,
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
            ]
        }
    ]
});
