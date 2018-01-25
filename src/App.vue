<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br/>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goAhead">前进</button>
      <button @click="gohome">回首页</button>
    </div>
    <router-link to="/">Home</router-link>
    <router-link :to="link">params</router-link>
    <router-link to="/goHome">goHome</router-link>
    <router-link to="/goParams/92/i like">goParams</router-link>
    <router-link to="/hi1">hi1</router-link>
    <router-link to="/jspang">jspang</router-link>
    <router-link to="/xx">错误页面</router-link>
    <transition name="fade" mode="out-in">
      <router-view/>
      <!-- <router-view name="left" style="float:left;width:50%;height:300px;background-color:#ccc;"/>
      <router-view name="right" style="float:right;width:50%;height:300px;background-color:#c0c;"/> -->
    </transition>
 </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
        newsId:13,
        newsTitle:'xxxoo',
        link:"/params/13/jspang website"
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goAhead(){
      this.$router.go(1);
    },
    gohome(){
      this.$router.push('/');
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
