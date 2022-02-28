<template>
  <div class="header">
    <div class="logo">
      <img class="logoImg" src="@/assets/images/logo.png" />
      前端历程
    </div>
    <div class="userInfo">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-icon class="icon" color="#FFFFFF">
            <avatar />
          </el-icon>
          {{ userName || 'default' }}
          <el-icon class="icon" color="#FFFFFF">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="User" command="userCenter">用户中心</el-dropdown-item>
            <el-dropdown-item :icon="Back" command="logOut">退出登录</el-dropdown-item>
            <el-dropdown-item :icon="Avatar" command="github">Github</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import setting from '@/config/setting'
import { ArrowDown, User, Back, Avatar } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router';
import store from '../../store';
  const userName = store.state.user.userName
  const route = useRoute()
  const router = useRouter()
  const handleCommand = (val) => {
    switch(val) {
      case 'userCenter':
        route.push(
          {
            path: '/userCenter'
          }
        )
        break;
      case 'logOut':
        store.dispatch('user/logout')
        router.push(`/login?redirect=${route.fullPath}`)
        break;
      default:
        window.open(`${setting.github}`, '_black')
        break
    }
  }
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .logo {
    .logoImg {
      width: 40px;
      vertical-align: middle;
    }
  }

  .userInfo {
    cursor: pointer;
  }
}

.icon {
  vertical-align: middle;
  padding: 0 1px;
}

::v-deep {
  .el-dropdown {
    line-height: inherit;
    text-align: center;
    color: #ffffff;
  }
}
</style>
