<template>
    <div class="selfs">
      <div style="width:200px;padding-bottom:40px;padding-top:30px;">
        <span style="font-size：18px;padding-right:8px;color:#000;font-width:bold">私信</span>
        <span style="font-size: 12px;">接收新私信提醒</span>
        <br />
        <br />
        <ul style="font-size:12px">
          <li>
            <label for>
              <input type="radio" name="shareSetting" value="0" checked="true" />所有人
            </label>
          </li>
          <br />
          <li style="padding-left: 24px;">
            <label for>
              <input type="radio" name="shareSetting" value="1" />我关注的人
            </label>
          </li>
        </ul>
      </div>
      <hr />
      <div style="width:200px;padding-bottom:40px;padding-top:30px;">
        <span style="font-size：18px;padding-right:8px;color:#000;font-width:bold">通知</span>
        <span style="font-size: 12px;">接收消息通知</span>
        <br />
        <br />
        <ul style="font-size:12px">
          <li style="padding-left: 24px;">
            <label for>
              <input type="checkbox" name="shareSetting" checked="true" />歌单被收藏
            </label>
          </li>
          <br />
          <li style="padding-left: 24px;">
            <label for>
              <input type="checkbox" name="shareSetting" />视频被收藏
            </label>
          </li>
          <br />
          <li style="padding-left: 24px;">
            <label for>
              <input type="checkbox" name="shareSetting" />电台被订阅
            </label>
          </li>
          <br />
          <li>
            <label for>
              <input type="checkbox" name="shareSetting" />收到赞
            </label>
          </li>
          <br />
          <li>
            <label for>
              <input type="checkbox" name="shareSetting" />新粉丝
            </label>
          </li>
        </ul>
      </div>
      <hr />
      <div style="width:200px;padding-bottom:40px;padding-top:30px;">
        <span style="font-size：18px;padding-right:8px;color:#000;font-width:bold;">听歌排行</span>
        <span style="font-size: 12px;">设置可见</span>
        <br />
        <br />
        <ul style="font-size:12px">
          <li style="padding-left: 24px;">
            <label for>
              <input type="radio" name="shareSetting" value="0" checked="true" />所有人可见
            </label>
          </li>
          <br />
          <li style="padding-left: 24px;">
            <label for>
              <input type="radio" name="shareSetting" value="1" />仅自己可见
            </label>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
li {
  list-style: none;
}
</style>