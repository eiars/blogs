<template>
  <div class="container" :class="signUpMode ? 'sign-right-mode' : 'sign-left-mode'">
    <div class="signup">
      <LoginForm v-model:loginUser ="loginUser" :rules="loginRules" />
      <RegisterForm v-model:registerUser="registerUser" :registerRules="registerRules" />
    </div>
    <div class="panels-con">
      <div class="panel left-panel">
        <div class="content">
          <h3>学习是为了有更多的选择，让生活变得更美好！</h3>
          <p>米修</p>
          <button class="btn transparent" @click="signUpMode = !signUpMode">
            注册
          </button>
        </div>
        <img src="@/common/img/log.svg" class="image" alt="">
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>以人为镜，可明得失</h3>
          <button class="btn transparent" @click="signUpMode = !signUpMode">
            登录
          </button>
        </div>
        <img src="@/common/img/register.svg" class="image" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LoginForm from '@/components/login/LoginForm.vue'
import RegisterForm from '@/components/register/RegisterForm.vue'
import { loginUser, loginRules, registerUser, registerRules } from '@/common/js/validators'

import { defineComponent, getCurrentInstance, ref } from 'vue'
export default defineComponent({
  name: 'LoginRegister',
  components: { LoginForm, RegisterForm },
  setup () {
    const signUpMode = ref<boolean>(false)
    return { loginUser, loginRules, registerUser, registerRules, signUpMode }
  }
})
</script>

<style lang="scss" scoped>
.container { position:relative; width: 100%; background-color: #fff; min-height: 100vh; overflow: hidden;
  &::before {content: ''; position: absolute; height: 2000px; width: 2000px; top: -10%; right: 48%; z-index: 2; pointer-events: none; background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%); border-radius: 50%; transform: translateY(-50%);}
  .signup { position: absolute; top: 50%; transform: translate(0, -50%); left: 50%; width: 44%; z-index: 1;}
  .panels-con {width: 100%; height: 100%; position: absolute; top: 0; left: 0; display: grid; grid-template-columns: repeat(2, 1fr); align-items :center;
    .panel { width: 100%; z-index: 4; text-align: center;
      .content { color: #fff; margin-bottom: 80px;
        h3{ font-weight: 600; line-height: 1; font-size: 1.5rem;}
        p { font-size: 0.95rem; padding: 0.7rem 0;}
        .btn.transparent{ margin: 0; background: none; border: 2px solid #fff; width: 130px; height: 41px; font-weight: 600; font-size: 0.8rem;}
      }
      .image { width: 80%; transition: transform 1.1s ease-in-out; transition-delay: 0.4s;}
    }
    .left-panel { pointer-events: all; padding: 3rem 10% 2rem 5%;}
    .right-panel { pointer-events: none; padding: 3rem 12% 2rem 17%; }
  }
  .btn { width: 150px; background: #5995fd; border: none; outline: none; height: 49px; border-radius: 49px; color: #fff; text-transform: uppercase; font-weight: 600; margin: 10px 0; cursor: pointer;
    &:hover { background-color: #4d84e2; }
  }
  /deep/ .el-form-item__content { width: 100%;
    .el-select { width: 100%;}
  }
}
.sign-left-mode {
  &::before {transform: translate(0%, -50%); transition: 1s ease-in-out; }
  .registerForm { transform: translateX(100%); opacity: 0; }
  .loginForm { transform: translateX(0%); transition: 1.4s ease-in-out; }
  .panels-con {
  .left-panel{ transform: translateX(0%); transition: 1s ease-in-out;}
  .right-panel { transform: translateX(500px); transition: 1s ease-in-out; pointer-events: all;}
 }
}
.sign-right-mode {
 &::before { right: 52%; transform: translate(100%, -50%); transition: 1s ease-in-out;}
 .registerForm { transform: translateX(-100%); transition: 1.6s ease-in-out; }
 .loginForm { transform: translateX(-100%); opacity: 0;}
 .panels-con {
   .left-panel{ transform: translateX(-1000px); transition: 1s ease-in-out;}
   .right-panel { transform: translateX(-100px); transition: 1s ease-in-out; pointer-events: all;}
 }
}
</style>
