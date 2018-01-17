<template>
  <div id="app">
    <!-- <img src="./common/img/logo.png"> -->
    <p class="nav">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/" class="item">Main</router-link>
        <router-link to="/foo" class="item">Foo</router-link>
        <router-link to="/bar" class="item">Bar</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.nav {
    margin-bottom: 60px;

    .item {
        margin-right: 10px;
        text-decoration: underline;
        text-decoration-color: blue;
        -moz-text-decoration-color: blue;
    }
}
</style>
