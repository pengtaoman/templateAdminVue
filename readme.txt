1 后端访问代理设置

  文件位置： /vue-admin-template/config/index.js
  代码demo:
      proxyTable: {
        '/web': 'http://doclever.cn:8090/mock/5b739a822235f12be213a40a/'
      },

      即表示所有访问/web/*的请求，实际访问地址都是 http://doclever.cn:8090/mock/5b739a822235f12be213a40a/web/*

      如代码/vue-admin-template/src/views/table/index.vue 中
      （自己写前后交互的代码， 也仿照下面代码即可）
            this.$http.get('/web/sys/menus').then((res) => {
              //console.log(JSON.stringify(res))
              this.list = res.content
              this.listLoading = false
            }).catch(error => {
                  console.log(error)
              });


  如果需要添加其他代理，比如localhost的8080, 则

        proxyTable: {
          '/web': 'http://doclever.cn:8090/mock/5b739a822235f12be213a40a/',
          '/local': 'http://localhost:8080/'
        },

  这个框架中，进行ajax请求的核心代码是 src/utils/request.js
  这个代码里，也是设置请求前后拦截的地方，在vue代码中，可以使用 this.$http直接进行ajax请求,


2 路由和菜单设置

   文件位置: src/router/index.js
   可以看到里面设置，与页面上左侧菜单栏的显示是相匹配的
   代码中，有的路由里有 meta: { title: 'Tree', icon: 'tree' }， 表示是显示在左侧菜单栏的菜单，
   没有这一项的只是路由，不是菜单，可以仿造这类菜单的形式增加和修改菜单

   现在前端没有权限，但是可以在meta里面加入权限的项目，根据登录账号的权限信息判断菜单是否应该显示，
   这些逻辑如果需要可以后加，现在没有

3 登录和退出

  文件位置：src/api/login.js
          src/store/modules/user.js
          src/views/login/index.vue

  这个框架把登录系统和退出系统的处理，放在了vuex机制里， 挺麻烦，其中
  src/api/login.js 是与后台交互的，
  里面的url已改成/web/login 和 /web/logout， 走的都是http://doclever.cn:8090/mock/5b739a822235f12be213a40a/的代理



