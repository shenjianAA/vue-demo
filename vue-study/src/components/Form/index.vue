<template>
  <div>
    <h2>表单组件</h2>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username"></KInput>
      </KFormItem>
      <KFormItem label="密  码" prop="password">
        <KInput v-model="model.password" type="password"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="loginFn">登录</button>
      </KFormItem>
    </KForm>
    {{model}}
  </div>
</template>

<script>
import KInput from "./KInput";
import KFormItem from "./KFormItem";
import KForm from "./KForm";
export default {
  name: "Form",
  data() {
    return {
      model: {
        username: "Tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }]
      }
    };
  },
  methods: {
    loginFn() {
      //校验表单
      this.$refs.loginForm.validate(isValid => {
        if (isValid) {
          alert("登录成功！！！");
        } else {
          alert("有错！！！");
        }
      });
    }
  },
  components: {
    KInput,
    KFormItem,
    KForm
  }
};
</script>

<style lang="scss" scoped>
</style>