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

        <!-- 登录 -->
        <template v-if="active == 'login'">
          <el-form :model="loginForm"
                   label-width="0"
                   ref="login">
            <el-form-item prop="account"
                          class="mb40"
                          :verify="{ minLen: 8, maxLen: 16, typeOptions: ['字母|数字'] }">
              <el-input v-model="loginForm.account"
                        placeholder="请输入账户名"></el-input>
              <el-form-item prop="password"
                            class="mb70"
                            :verify="{ passwordOptions: [6, 18, '字母|数字'] }">
                <el-input v-model="loginForm.password"
                          placeholder="输入密码登录"
                          show-password></el-input>
              </el-form-item>
            </el-form-item>
          </el-form>

          <el-button class="w-100 h48 f-white bg-theme r3 f18 lb-4"
                     type="primary"
                     @click="login">登录</el-button>
        </template>
      </div>
      <div class="login-content-right">
        <img class="w-100"
             src="../assets/image/logo.jpeg">
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { login } from '@/api/user'
export default {
  data () {
    return {
      active: 'login',
      loginForm: {
        account: 'qq48404568',
        password: 'haoxiongdi999'
      },
      registerForm: {
        account: '',
        password: '',
        userName: ''
      },
      tabs: [
        { label: '密码登录', value: 'login' },
        { label: '免费注册', value: 'register' }
      ]
    }
  },
  methods: {
    ...mapMutations(['setToken', 'setUserInfo', 'logout']),
    // 登录
    login () {
      console.log(this.$refs);
      this.$refs["login"].validate(async (valid) => {
        if (valid) {
          let res = await login(this.loginForm)
          console.log(res);
          if (res.status == '10000') {
            this.$notify({
              title: "登录成功",
              message: "快去体验可视化给构建商城吧！",
              type: "success"
            });
            this.setToken(res.token)
            this.setUserInfo(res.userInfo)
            this.$router.push({ name: 'managet' })
          } else {
            this.$notify({
              title: '登录失败',
              message: res.message,
              type: 'warning'
            })
          }
        }
      })
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
  background: #f2f3f5;
  overflow: hidden;

  .login-content {
    display: flex;
    height: 500px;
    margin-top: 200px;
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