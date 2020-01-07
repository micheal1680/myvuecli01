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
            <el-table-column label="日期" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
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
  data:function(){
    return {
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
  created() {
    this.gettable();
  },
  methods: {
    handleEdit(index, row) {
        console.log(index, row);
      },
    handleDelete(index, row) {
        console.log(index, row);
      },
    uploads() {
      this.$router.push({ path: "/changeMusic" });
    },
    gettable() {
      // 获得layui中的table对象 获得对象后可以使用render函数渲染数据
      var table = layui.table;
      console.log("sessionStorage-----" + sessionStorage.getItem("aid"));
      if (sessionStorage.getItem("aid")) {
        // 使用表格展示数据
        document.querySelector("#catelist") &&
          table.render({
            elem: "#catelist",
            height: 500,
            url: "http://localhost:8888/music/list", //数据接口
            page: true, //开启分页
            cols: [
              [
                //表头
                {
                  field: "id",
                  title: "ID",
                  width: 80,
                  sort: true,
                  fixed: "left"
                },
                { field: "name", title: "商品名称", width: 150 },
                { field: "oldprice", title: "原价", width: 80, sort: true },
                { field: "newprice", title: "现价", width: 80 },
                { field: "stock", title: "库存", width: 177 },
                { field: "description", title: "描述", width: 300, sort: true },
                { field: "catename", title: "分类", width: 150 },
                {
                  field: "operation",
                  title: "操作",
                  width: 150,
                  toolbar: "#toolbarDesc",
                  edit: "text"
                }
              ]
            ],
            limit: 10
          });
      }
      //  else {
      //     alert("未登录状态，5秒后跳转到登录页面")
      //     setTimeout(() => {
      //         window.location.href = "../html/login.html"
      //     }, 5000)
      // }

      // 对表格进行监听   cartoontable表示lay-filter的属性值
      table.on("tool(cartoontable)", function(obj) {
        var data = obj.data; //获得当前行数据

        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）

        if (layEvent === "del") {
          //删除  根据商品id删除记录  data.id
          layer.confirm("真的删除行么", function(index) {
            // ajax请求删除记录
            $.post(
              "http://localhost:8888/music/del",
              {
                id: data.id
              },
              function(data) {
                console.log("删除成功----" + data);
              }
            );

            obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
            layer.close(index);
            //向服务端发送删除指令
          });
        } else if (layEvent === "edit") {
          //编辑
          // window.location.href在进行参数传递时，中文参数会出现乱码，
          // 此时通过encodeURI将中文参数进行转码，
          // 到目标页面通过decodeURI对中文参数进行解码
          console.log("data----" + JSON.stringify(data));

          // encodeURI 转码中文
          var params = `id=${data.id}&name=${data.name}&oldprice=${data.oldprice}&newprice=${data.newprice}&description=${data.description}&picture=${data.picture}&type=${data.type}&stock=${data.stock}`;
          // var params = `id=${data.id}&name=${encodeURI(data.name)}&oldprice=${data.oldprice}&newprice=${data.newprice}&description=${encodeURI(data.description)}&picture=${data.picture}&type=${data.type}&activity=${encodeURI(data.activity)}`;
          console.log(params);

          //跳转到编辑页面
          // window.location.href = "../html/ChangeProduct.html?" + params;
        }
      });
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