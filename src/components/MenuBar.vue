<template>
  <div class="header" style="height: 70px;">
        <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #337ab7;border-bottom: #337ab7;">
            <div class="container" >
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#navbar-collapse-menu">
                        <span class="sr-only">切换导航</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#page-top">
                        <img class="img-responsive" src="img/logo.png" style="width: 80px;">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse-menu">
                    <ul class="nav navbar-nav">
                        <li class="active"><router-link to="/home">首页</router-link></li>
                        <li><router-link to="/about">产品介绍</router-link></li>
                        <li><router-link to="/home">联系我们</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>

<style>

</style>
