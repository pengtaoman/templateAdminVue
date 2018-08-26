<template>

  <div>
    <div class="menu-wrapper" style="height: 50px;
      background-color: #E1EEF7;
      padding-top: 19px;
      padding-left: 36px;
      white-space:nowrap;
      font-size: 13px;">
      <!--<svg-icon icon-class="form"  style="font-size: 30px;"/>-->
      企业级分布式应用服务
    </div>
  <!--<el-scrollbar wrap-class="list"-->
                <!--:native="false">-->
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#F0F3F5"
      text-color="#5C5C5D"
      active-text-color="#409EFF"
      style="overflow-y: auto;"
    >
      <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"/>
    </el-menu>
  <!--</el-scrollbar>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {

    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      console.log('##### this.$router.options.routes :: ' + JSON.stringify(this.$router.options.routes));
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
