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
          <h2>添加商品</h2>
          <hr />
          <form class="layui-form" action>
            <div class="layui-form-item">
              <label class="layui-form-label">
                商品名称
                <span class="red">*</span>
              </label>
              <div class="layui-input-block">
                <input
                  type="text"
                  name="name"
                  required
                  lay-verify="required"
                  placeholder="请输入商品名称"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">原价</label>
              <div class="layui-input-block">
                <input
                  type="text"
                  name="oldprice"
                  placeholder="请输入原价"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">
                现价
                <span class="red">*</span>
              </label>
              <div class="layui-input-block">
                <input
                  type="text"
                  name="newprice"
                  required
                  lay-verify="required"
                  placeholder="请输入现价"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>

            <div class="layui-form-item">
              <label class="layui-form-label">
                分类
                <span class="red">*</span>
              </label>
              <div class="layui-input-block">
                <select name="type" lay-verify="required">
                  <option value></option>
                  <option value="1">女士棉服</option>
                  <option value="2">女士裤装</option>
                  <option value="3">女士羽绒服</option>
                  <option value="4">女士裙装</option>
                  <option value="5">男士牛仔上衣</option>
                  <option value="6">男士裤装</option>
                  <option value="7">男士羽绒服</option>
                </select>
              </div>
            </div>

            <div class="layui-form-item">
              <label class="layui-form-label">库存</label>
              <div class="layui-input-block">
                <input
                  type="text"
                  name="stock"
                  placeholder="请输入库存"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>

            <div class="layui-form-item layui-form-text">
              <label class="layui-form-label">
                商品描述
                <span class="red">*</span>
              </label>
              <div class="layui-input-block">
                <textarea name="description" placeholder="请输入描述" class="layui-textarea"></textarea>
              </div>
            </div>

            <button type="button" class="layui-btn mybtn-location" id="uploadPicture">
              <i class="layui-icon">&#xe67c;</i>上传图片
            </button>

            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="formChange">立即修改</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
              </div>
            </div>
          </form>
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
  created() {
    this.changemusic();
  },
  methods: {
    changemusic() {
      var form = layui.form;

      // 定义一个空对象，用于保存传递过来的参数信息
      var paramsObj = {};

      // 获得通过window.location.href 传递的参数信息
      var params = location.search;
      // 取出参数前面的?
      params = params.substr(1);
      // 通过&拆分参数， 得到的每一个元素都是键值对
      paramsArray = params.split("&");
      // 遍历数组，再通过=拆分键值对
      for (var i = 0; i < paramsArray.length; i++) {
        var item = paramsArray[i].split("="); //通过=拆分键值对
        // item[0]  -->键名
        // item[1]  -->值
        // paramsObj['key'] = value;
        // 将键与值添加到对象中   decodeURI 解码中文
        paramsObj[`${item[0]}`] = decodeURI(item[1]);
      }
      console.log("obj---" + JSON.stringify(paramsObj));

      // 0 -0 false "" [] {} undefined null --->false
      if (paramsObj) {
        // 将原数据显示在页面中
        document.querySelector("input[name='name']").value = paramsObj.name;
        document.querySelector("input[name='oldprice']").value =
          paramsObj.oldprice;
        document.querySelector("input[name='newprice']").value =
          paramsObj.newprice;
        document.querySelector("select[name='type']").value = paramsObj.type;
        document.querySelector("input[name='stock']").value = paramsObj.stock;
        document.querySelector("textarea[name='description']").value =
          paramsObj.description;
      }

      var imgUrl = "";

      var p = uploadFile();
      p.then(data => {
        imgUrl = data;
      }).catch(data => {
        console.log(data);
      });

      // 表单提交
      document.querySelector(".layui-form") &&
        form.on("submit(formChange)", function(data) {
          var product = data.field;

          product.file = imgUrl;
          product["id"] = paramsObj.id;

          console.log("product----" + JSON.stringify(product));

          $.post("http://localhost:8888/music/change", product, function(data) {
            if (data.code == 0) {
              layer.msg("数据修改成功");
            } else {
              layer.msg("数据修改失败");
            }
            console.log(data);
          });

          return false;
        });
    }
  }
};
</script>

<style scoped>
.layui-input,
.layui-textarea,
.layui-input-block {
  width: 300px;
}

.red {
  color: red;
  font-size: 18px;
}

.mybtn-location {
  margin: 10px 0 20px 110px;
}
</style>