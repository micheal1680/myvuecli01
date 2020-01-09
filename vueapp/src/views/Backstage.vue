<template>
  <div class="layui-layout-body">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
          <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <li class="layui-nav-item layui-nav-itemed">
              <dl class="layui-nav-child">
                <dd>
                  <router-link to="/Backstage">商品管理</router-link>
                </dd>
                <dd>
                  <router-link to="/AddMusic">添加商品</router-link>
                </dd>
              </dl>
            </li>

            <li class="layui-nav-item">
              <a href>云市场</a>
            </li>
            <li class="layui-nav-item">
              <a href>发布商品</a>
            </li>
            <li class="layui-nav-item">
              <a href="javascript:;">
                <img src="http://t.cn/RCzsdCq" class="layui-nav-img" /> 贤心
              </a>
              <dl class="layui-nav-child">
                <dd>
                  <a href>基本资料</a>
                </dd>
                <dd>
                  <a href>安全设置</a>
                </dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href>退了</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="layui-body">
        <!-- 内容主体区域 -->
        <div style="padding: 15px;">
          <h2>商品管理</h2>
          <hr />
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="id" width="80">
              <template slot-scope="scope">
                <span style="margin-left: 10px" class="table-id">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="歌手" width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="title" label="歌名" width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="time" label="时长" width="100">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.time }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="music_url" label="音乐地址" width="240">
              <template slot-scope="scope">
                <!-- <span style="margin-left: 10px">{{ scope.row.music_url }}</span> -->
                <el-popover trigger="hover" placement="top">
                  <p>播放量: {{ scope.row.clicks }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.music_url }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column prop="picture_url" label="歌曲图片地址" width="240">
              <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.picture_url }}</el-tag>
                  </div>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div class="layui-footer">
        <!-- 底部固定区域 -->
        © layui.com - 底部固定区域
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tableIDindex:"",
      tableData: []
    };
  },
  created() {
    this.axios.get("/bacstagelist").then(result => {
      this.tableData = result.data;
      console.log("商品管理"+this.tableData);
      console.log(this.tableData[0].title);
    });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      let tableID = document.getElementsByClassName("table-id");
      let tableIDindex = tableID[index].innerHTML;
      this.tableIDindex=tableIDindex;
      // Bus.$emit("changemusic",this.tableIDindex)
      console.log("点击修改："+tableIDindex)
      this.$router.push({ path: "/changeMusic",
      query:{
        id: tableIDindex
      } });
    },
    handleDelete(index, row) {
      let tableID = document.getElementsByClassName("table-id");
      let tableIDindex = tableID[index].innerHTML;
      localStorage.setItem("tableIDindex",tableIDindex)
      console.log("tableid:"+tableID)
      
      console.log("innerHTML:"+tableIDindex)
      this.axios.get("/delete",{
        params:{
          index:tableIDindex
        }
      }).then(result=>{
        // this.tableData=result.data;
        console.log(this.tableData)
        parent.location.reload()
      })
    },
    uploads() {
      this.$router.push({ path: "/changeMusic" });
    }
  }
};
</script>

<style src="../static/layui/css/layui.css"></style>
<style>
.layui-layout-body {
  margin-top: 61px;
}
</style>