<template>
  <div id="app">
    <div class="header">
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
                      <span class="navbar-brand" href="#page-top">
                          <img class="img-responsive" src="static/logo.png" style="width: 80px;">
                      </span>
                  </div>
                  <div class="collapse navbar-collapse" id="navbar-collapse-menu">
                      <ul class="nav navbar-nav">
                          <li @click="selectMenu('home')" :class="{ 'active': selectedMenu=='home'}">
                            <router-link to="/home">首页</router-link>
                          </li>
                          <li role="presentation" class="dropdown"
                          :class="{ 'active': (selectedMenu=='sea-slug' || selectedMenu=='ginseng' || selectedMenu=='sea-oil' ||
                              selectedMenu=='maple-syrup' || selectedMenu=='sea-slug-info')}">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                              加拿大特产 <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                              <li class="dropdown-submenu" :class="{ 'active': (selectedMenu=='sea-slug' || selectedMenu=='sea-slug-info')}"> <a href="javascript:void(0);">野生海参</a>
                                   <ul class="dropdown-menu pull-right">
                                     <li @click="selectMenu('sea-slug-info')" :class="{ 'active': selectedMenu=='sea-slug-info'}">
                                       <router-link to="/sea-slug-info">海参概要</router-link>
                                     </li>
                                     <li @click="selectMenu('sea-slug')" :class="{ 'active': selectedMenu=='sea-slug'}">
                                       <router-link to="/sea-slug">分级产品</router-link>
                                     </li>
                                   </ul>
                              </li>
                              <li @click="selectMenu('ginseng')" :class="{ 'active': selectedMenu=='ginseng'}">
                                <router-link to="/ginseng">花旗参</router-link>
                              </li>
                              <li @click="selectMenu('sea-oil')" :class="{ 'active': selectedMenu=='sea-oil'}">
                                <router-link to="/sea-oil">海豹油</router-link>
                              </li>
                              <li @click="selectMenu('maple-syrup')" :class="{ 'active': selectedMenu=='maple-syrup'}">
                                <router-link to="/maple-syrup">枫树糖浆</router-link>
                              </li>
                            </ul>
                          </li>
                          <li role="presentation" class="dropdown"
                          :class="{ 'active': (selectedMenu=='propolis' || selectedMenu=='collagen-protein' || selectedMenu=='salmon' ||
                              selectedMenu=='hot-products')}">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                              健康食品 <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                              <li @click="selectMenu('propolis')" :class="{ 'active': selectedMenu=='propolis'}">
                                <router-link to="/propolis">蜂胶</router-link>
                              </li>
                              <li @click="selectMenu('collagen-protein')" :class="{ 'active': selectedMenu=='collagen-protein'}">
                                <router-link to="/collagen-protein">胶原蛋白</router-link>
                              </li>
                              <li @click="selectMenu('salmon')" :class="{ 'active': selectedMenu=='salmon'}">
                                <router-link to="/salmon">三文鱼产品</router-link>
                              </li>
                              <li @click="selectMenu('hot-products')" :class="{ 'active': selectedMenu=='hot-products'}">
                                <router-link to="/hot-products">其他热门产品</router-link>
                              </li>
                            </ul>
                          </li>
                          <li @click="selectMenu('contact')" :class="{ 'active': selectedMenu=='contact'}"><router-link to="/contact">联系我们</router-link></li>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
    <router-view></router-view>
    <footer class="bs-docs-footer">
        <div class="container">
            <div class="row" style="text-align: center">
                <div class="col-sm-4">
                    <div class="widget">
                        <h4 class="title">关于我们</h4>
                        <div class="content">
                            Pingmart控股（加拿大）有限公司<br/>
                            Ping Holdings (Canada) Corp.
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="widget">
                        <h4 class="title">联系方式</h4>
                        <div class="content">
                            电话：001-604-5537678；001-778-3168876<br/>
                            地址：2227 Hartley Avenue, Coquitlam, British Columbia, Canada
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="widget">
                        <h4 class="title">友情合作</h4>
                        <div class="content">
                            加拿大民航快递
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" style="text-align: center;font-size: 13px;margin-top: 20px;">
                    <span>Copyright © Ping Holdings (Canada) Corp.</span> |
                    <span>Tertech提供技术支持</span>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selectedMenu: 'home'
    }
  },
  methods: {
    selectMenu (menu) {
      this.selectedMenu = menu
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
/*头部navbar*/
.nav>li>a {
  color: white !important;
}
.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
  background-color: #23527c !important;
}
.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover {
  background-color: #23527c !important;
}
.navbar-nav>li>.dropdown-menu{
  background-color: #337ab7 !important;
}
.dropdown-menu>li>a {
  color: white !important;
}
.dropdown-menu>.active>a, .dropdown-menu>.active>a:focus, .dropdown-menu>.active>a:hover {
  background-color: #23527c !important;
}
.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {
  background-color: #23527c !important;
}
.dropdown-submenu {
    position: relative;
}
.dropdown-submenu > .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
}
.dropdown-submenu:hover > .dropdown-menu {
    display: block;
}
.dropdown-menu.pull-right {
    background-color: #337ab7;
}
.dropdown-submenu > a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
}
.dropdown-submenu:hover > a:after {
    border-left-color: #fff;
}
.dropdown-submenu.pull-left {
    float: none;
}
.dropdown-submenu.pull-left > .dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}
/*footer 样式*/
.bs-docs-footer {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 100px;
    color: #99979c;
    text-align: center;
    background-color: #2a2730;
}
</style>
