<template>
  <el-form
    ref="loginFromRef"
    :rules="rules"
    :model="user"
    label-width="100px"
    class="loginForm login-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="user.email"
        type="text"
        placeholder="Enter Email..."
      >
      </el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input
        v-model="user.password"
        type="password"
        placeholder="Enter Password...">
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click.prevent="handleLogin()"
      >提交
      </el-button>
    </el-form-item>
    <div class="tiparea">
      <p>忘记密码？<a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

export default defineComponent({
  props: {
    loginUser: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    }
  },
  emits: ['update:loginUser'],
  setup (props, content) {
    // 用element plus中validate方法验证表单，获取loginFromRef值
    const loginFromRef = ref<InstanceType<typeof ElForm>>()
    const user = reactive(props.loginUser)
    console.log(props, props.loginUser, '---props')
    const handleLogin = () => {
      (loginFromRef.value as any).validate((vaild: boolean) => {
        if (vaild) {
          content.emit('update:loginUser', user)
        }
      })
    }
    return { user, loginFromRef, handleLogin }
  }
})
</script>

<style lang="scss" scoped>
.loginForm { margin-top: 20px; background-color: #fff; padding: 20px 40px 20px 20px; border-radius: 5px; box-shadow: 0px 5px 10px #ccc;
  .submit-btn { width: 100%;}
  .tiparea { text-align: right; font-size: 12px; color: #333;
    p a { color: #409eff;}
  }
}
</style>
