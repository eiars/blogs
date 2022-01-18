<template>
  <el-form
    ref="registerRef"
    class="registerForm"
    label-width="100px"
    :rules="registerRules"
    :model="registerform"
  >
    <el-form-item label="用户名" prop="name">
      <el-input
        placeholder="Enter UserName..."
        v-model="registerform.name"
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        placeholder="Enter Email..."
        v-model="registerform.email"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        placeholder="Enter Password..."
        v-model="registerform.password"
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        type="password"
        placeholder="Enter Password..."
        v-model="registerform.password2"
      ></el-input>
    </el-form-item>
    <el-form-item label="选择身份">
      <el-select placeholder="please select your identity" v-model="registerform.role">
        <el-option label="Administrator" value="admin"></el-option>
        <el-option label="consumer" value="user"></el-option>
        <el-option label="visitor" value="visitor"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="register"
      >
        注册
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
export default defineComponent({
  props: {
    registerUser: {
      type: Object,
      required: true
    },
    registerRules: {
      type: Object,
      required: true
    }
  },
  setup (props, content) {
    const registerform = reactive(props.registerUser)
    const registerRef = ref(null)
    const register = () => {
      (registerRef.value as any).validate((valid: boolean) => {
        console.log(props.registerUser, '---registerUser')
        if (valid) {
          content.emit('update:registerUser', registerform)
          console.log('---end')
        }
      })
    }
    watch(registerform, () => {
      content.emit('update:registerUser', registerform)
    })
    return { registerform, register, registerRef }
  }
})
</script>
<style lang="scss" scoped>
.registerForm{ width: 90%; position: absolute; top: 0; margin-top: 20px; background-color: #fff; padding: 20px 40px 20px 20px; border-radius: 5px; box-shadow: 0px 5px 10px #ccc;}
</style>
