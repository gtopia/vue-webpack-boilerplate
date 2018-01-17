<template>
    <div class="loading-con">
        <div class="con" id="con-1"></div>
        <div class="con" id="con-2"></div>
        <div class="con" id="con-3"></div>
        <div class="con" id="con-4"></div>
        <div class="con" id="con-5"></div>
        <div class="con" id="con-6"></div>
        <div class="con" id="con-7"></div>
        <div class="con" id="con-8"></div>
        <div class="con" id="con-9"></div>
        <div class="con" id="con-10"></div>
        <div class="con" id="con-11"></div>
        <div class="con" id="con-12"></div>
        <div class="loading-word">{{loadingWord}}</div>
    </div>
</template>

<script>
export default {
    name: 'loading',
    data () {
        return {
            loadingWord: 'Loading...'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading-con{position: relative;height: 40px;width: 120px;margin: 0 auto;}
.loading-con .con{position: absolute;width: 3px;height: 7px;background-color: #F0F0F0;border-radius: 50px;transform-origin: 50% 100%;-webkit-transform-origin: 50% 100%;animation: animate 1.2s infinite;-webkit-animation: animate 1.2s infinite;}
.loading-con .loading-word{position: absolute;color: #5D5D5D;font-size: 16px;line-height: 25px;padding-left: 40px;}
#con-1{top: 0;left: 15px;transform: rotate(0deg);animation-delay: 0.1s;-webkit-transform: rotate(0deg);-webkit-animation-delay: 0.1s;}
#con-2{left: 18px;top: 1px;transform: rotate(30deg);animation-delay: 0.2s;-webkit-transform: rotate(30deg);-webkit-animation-delay: 0.2s;}
#con-3{left: 20px;top: 3px;transform: rotate(60deg);animation-delay: 0.3s;-webkit-transform: rotate(60deg);-webkit-animation-delay: 0.3s;}
#con-4{left: 21px;top: 6px;transform: rotate(90deg);animation-delay: 0.4s;-webkit-transform: rotate(90deg);-webkit-animation-delay: 0.4s;}
#con-5{top: 8px;left: 21px;transform: rotate(120deg);animation-delay: 0.5s;-webkit-transform: rotate(120deg);-webkit-animation-delay: 0.5s;}
#con-6{left: 18px;top: 10px;transform: rotate(150deg);animation-delay: 0.6s;-webkit-transform: rotate(150deg);-webkit-animation-delay: 0.6s;}
#con-7{left: 15px;top: 11px;transform: rotate(180deg);animation-delay: 0.7s;-webkit-transform: rotate(180deg);-webkit-animation-delay: 0.7s;}
#con-8{top: 11px;left: 12px;transform: rotate(210deg);animation-delay: 0.8s;-webkit-transform: rotate(210deg);-webkit-animation-delay: 0.8s;}
#con-9{left: 10px;top: 8px;transform: rotate(240deg);animation-delay: 0.9s;-webkit-transform: rotate(240deg);-webkit-animation-delay: 0.9s;}
#con-10{left: 9px;top: 6px;transform: rotate(270deg);animation-delay: 1s;-webkit-transform: rotate(270deg);-webkit-animation-delay: 1s;}
#con-11{left: 10px;top: 3px;transform: rotate(300deg);animation-delay: 1.1s;-webkit-transform: rotate(300deg);-webkit-animation-delay: 1.1s;}
#con-12{left: 12px;top: 1px;transform: rotate(330deg);animation-delay: 1.2s;-webkit-transform: rotate(330deg);-webkit-animation-delay: 1.2s;}
@keyframes animate{0%{background: #A3A3A3;}
100%{background: #F0F0F0;}} @-webkit-keyframes animate{0%{background: #A3A3A3;}
100%{background: #F0F0F0;}}
</style>

