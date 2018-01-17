<template>
    <div class="hello">
        <h1>{{ message }}</h1>
        <loading v-show="loading"></loading>
        <button @click="updateMessage">Update Message</button>
        <button @click="setMessage('This is new message2.')">Update Message2</button>

        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>

        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>
import loading from '../loading';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'HelloWorld',
    // props: {
    //     message: {
    //         type: String,
    //         // required: true,
    //         default: 'Welcome to Vue.js App.',
    //         validator: function (str) {
    //             return str && str !== '';
    //         }
    //     }
    // },
    data () {
        return {
            // message: 'Welcome to Your Vue.js App'
        };
    },
    components: {
        loading
    },
    methods: {
        ...mapActions('main', [
            'setMessage'
        ]),
        updateMessage () {
            // debugger;
            this.$store.dispatch('main/setMessage', 'This is new message.');
        }
    },
    computed: {
        ...mapState('main', {
            'message': state => state.message,
            'loading': state => state.loading
        })
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    h2 {
        font-weight: normal;
        margin-top: 40px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
