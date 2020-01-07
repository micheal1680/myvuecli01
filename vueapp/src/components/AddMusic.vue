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
                <button class="layui-btn" lay-submit lay-filter="formAdd">立即添加</button>
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
    thid.addmusic();
  },
  methods: {
    addmusic() {
      var form = layui.form;

      var imgUrl = "";

      // d调用函数得到一个Promise对象，在该Promise对象中上传了文件
      var p = uploadFile();
      p.then(data => {
        //then处理resolve
        imgUrl = data; //将resolve中返回的图片地址赋值给imgUrl变量
      }).catch(data => {
        //catch处理reject
        console.log(data);
      });

      //监听提交  添加商品
      document.querySelector(".layui-form") &&
        form.on("submit(formAdd)", function(data) {
          // data.field表示表单中所有元素的值，是一个json对象
          var product = data.field;
          console.log(JSON.stringify(product));

          // 为图片存放上传回来的地址
          product.file = imgUrl;

          console.log(JSON.stringify(product));

          // 发送请求添加商品
          $.post("http://localhost:8888/music/add", product, function(data) {
            if (data.code == 0) {
              layer.msg("添加商品成功");
            } else {
              layer.msg("添加商品失败");
            }
            console.log(data);
            // window.location.href = "../html/AddProduct.html";
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