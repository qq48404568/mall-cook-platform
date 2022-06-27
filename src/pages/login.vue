<template>
  <div class="login">
    <div class="login-content">
      <div class="login-content-left">
        <ul class="flex col-bottom mb60">
          <li v-for="tab in tabs"
              :key="tab.value"
              class="tab mr20"
              :class="[active == tab.value ? 'tab-active' : '']"
              @click="active = tab.value">{{tab.label}}</li>
        </ul>
      </div>
      <div class="login-content-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'login',
      tabs: [
        { label: '密码登录', value: 'login' },
        { label: '免费注册', value: 'register' }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #bfa;
  overflow: hidden;

  .login-content {
    display: flex;
    height: 500px;
    margin-top: 200px;
    background: #ee3;
    .login-content-left {
      width: 550px;
      margin-right: 20px;
      border-radius: 6px;
      background: #fff;
      padding: 50px 56px 60px;
      .tab-active {
        font-size: 24px;
        color: #323233;
        font-weight: 500;
      }
    }
    .login-content-right {
      display: flex;
      align-items: center;
      width: 320px;
      border-radius: 6px;
      background: #fff;
    }
  }
}
</style>