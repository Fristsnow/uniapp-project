<!--
 * @Author: Lucky-Firstsnow firstsnow1119@163.com
 * @Date: 2024-08-01 11:26:08
 * @LastEditors: Lucky-Firstsnow firstsnow1119@163.com
 * @LastEditTime: 2024-08-01 11:44:46
 * @FilePath: \demo\src\pages\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <up-button type="primary" :disabled="disabled" text="禁用"></up-button>
		<up-button type="primary" loading loadingText="加载中"></up-button>
		<up-button type="primary" icon="map" text="图标按钮"></up-button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
