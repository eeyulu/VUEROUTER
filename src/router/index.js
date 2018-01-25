import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Hi1 from '@/components/Hi1'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // components: {
      //   default: HelloWorld,
      //   left:Hi1,
      //   right:Hi2
      // }
      component:HelloWorld
    },{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
    //   beforeEnter:(to,from,next)=>{
    //     console.log(to);
    //     console.log(from);
    //     // next({path:'/'});
    //     next();
    //   }
    },
    {
      path:'/goHome',
      redirect:'/'
    },{
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },{
      path:'/hi1',
      component:Hi1,
      alias:'/jspang'
    },{
      path:'*',
      component:Error
    }
  ]
})
