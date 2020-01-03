<template>
  <div class="con">
    <div class="num">
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-active="activeIndex" @select="handleSelect">
            <el-submenu index="1">
              <template slot="title">
                <button>+新建</button>
                <i class="el-icon-message"></i>创建的歌单
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">我喜欢的歌曲</el-menu-item>
                <el-menu-item index="1-2">我的年度歌单</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-header>

          <el-main>
            <favorite></favorite>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "1-1":
          this.$route.path == "/musicPage/favorite" ? "" : this.$router.push("/musicPage/favorite");
          break;
        case "1-2":
          this.$route.path == "/musicPage/list" ? "" : this.$router.push("/musicPage/list");
          break;
      }
    },
    setActiveIndex() {
      switch (this.$route.path) {
        case "/musicPage/favorite":
          this.activeIndex = "1-1";
          break;
        case "/musicPage/list":
          this.activeIndex = "1-2";
          break;
      }
    },
    loadAll() {
      return;
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    }
  },
  watch: {
    "$route.path": function() {
      this.setActiveIndex();
    }
  },
  created() {
    this.setActiveIndex();
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.el-aside {
  color: #333;
}
.num {
  margin: 0 120px;
}
.con {
  background-color: #f5f5f5;
}
</style>


