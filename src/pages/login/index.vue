<template>
  <div class="login" v-loading="loading">
    <div class="title">前端历程</div>

    <div class="loginFrom">
      <el-form
        label-position="top"
        label-width="100px"
        :model="loginFrom"
        style="max-width: 360px; width: 100%"
      >
        <el-form-item>
          <el-input
            v-model="loginFrom.userName"
            placeholder="Please input name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginFrom.userPass"
            type="password"
            placeholder="Please input password"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item class="btn">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const route = useRoute()

const loginFrom = reactive({
  userName: "admin",
  userPass: "admin123",
});

const loading = ref(false);

const redirect = ref("");

watch(
  () => route.query.redirect,
  (val) => {
    return redirect.value = val;
  },
  { immediate: true }
);
const onSubmit = () => {
  loading.value = true;
  console.log(loginFrom);
  store
    .dispatch("user/login", loginFrom)
    .then((res) => {
      loading.value = false;
      store.commit("user/setName", loginFrom.userName);
      ElMessage({
        message: "登陆成功",
        type: "success",
      });
      router.push({
        //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
        path: redirect.value || "/",
      });
    })
    .catch((error) => {
      loading.value = false;
    });
};
</script>

<style lang="scss" scoped>
.login {
  background: #29a57c;
  min-height: 100%;
  height: 100vh;
  .title {
    padding-top: 10%;
    text-align: center;
    font-size: 72px;
    color: aliceblue;
    font-family: cursive;
  }
  .loginFrom {
    display: flex;
    justify-content: center;
    ::v-deep {
      .el-form-item__label {
        color: #000000;
      }
      .btn .el-form-item__content {
        justify-content: center;
      }
    }
  }
}
</style>