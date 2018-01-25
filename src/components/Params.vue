<template>
    <div>
        <h2>{{msg}}</h2>
        <p>newsId:{{$route.params.newsId}}</p>
        <p>newsTitle:{{$route.params.newsTitle}}</p>
        <p>newsTitle:{{title}}</p>
    </div>  
</template>
<script>
    export default{
        data(){
            return{
                msg:'params pages',
                title:''
            }
        },
        beforeRouteEnter:(to,from,next)=>{
            console.log("准备进入params路由模板");
            console.log(to.params);
            console.log(to.params.newsTitle);
            // this.title = to.params.newsTitle;            
            console.log(this.title);
            next();
        },
        beforeRouteLeave:(to,from,next)=>{
            console.log("准备离开params路由模板");
            next();
        },
        created:function(){
            console.log(this.$route);
            this.title= this.$route.params.newsTitle;
        },
    }
</script>