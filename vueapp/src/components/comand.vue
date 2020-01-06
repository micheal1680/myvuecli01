<template>
  <div style="margin-top:30px">
    <hr />
    <textarea style="width:400px;margin-top:30px" placeholder="请输入要说出的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <button type="primary" size="large" @click="postMsg">发表评论</button>

    <!-- 评论列表区域 -->
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in cmtlist" :key="index">
        <div class="cmt-item-title">用户：{{ item.username }}&nbsp;&nbsp;发表时间：{{ item.posttime}}</div>
        <div class="cmt-item-body">{{ item.content }}</div>
      </div>
      <!-- <button type="button" @click="reply">回复</button> -->
    </div>

    <!-- <button type="danger" size="large" @click="loadMore">加载更多</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cmtlist: [], // 评论数组
      msg: "" // 即将发表的评论内容
    };
  },
  created() {
    
    this.getComment();
  },
  methods: {
    //   获取评论数据
    getComment() {
        // this.msg = "";
        // 在评论列表展示评论数据
        let username = localStorage.getItem("username");
        let date = new Date()
        let today=date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
        // let mesg = this.msg;
        let mesg = localStorage.getItem("content");
        console.log(username);
        this.cmtlist.push({
          username: username,
          posttime: today,
          content: mesg
        });
    },
    // 加载更多评论数据
    loadMore() {
      // 点击按钮，加载更多的评论
      // 当触发这个加载更多方法的时候，应该让 page 页码 + 1 之后，再调用 getCommentByPage 方法
      this.getComment();
    },
    // 发表评论
    postMsg() {
      if (!this.msg) {
        alert("请填写评论内容");
        return;
      } else {
        // 将评论内容缓存到本地localStorage
        localStorage.setItem("content", this.msg);
        console.log(111);
        // this.msg = "";
        // 在评论列表展示评论数据
        let username = localStorage.getItem("username");
       let date = new Date()
        let today=date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
        let mesg = localStorage.getItem("content");
        console.log(username);
        this.cmtlist.push({
          username: username,
          posttime: today,
          content: mesg
        });

      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 14px;
  margin: 0;
}
.cmt-list {
  margin-top: 4px;
  .cmt-item {
    line-height: 30px;
    .cmt-item-title {
      font-size: 14px;
      background-color: #ddd;
    }
    .cmt-item-body {
      font-size: 13px;
      text-indent: 2em;
    }
  }
}
</style>