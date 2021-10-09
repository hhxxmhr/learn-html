<template>
  <div class="wrapper">
    <div class="wrapper__pic">
      <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="user" class="wrapper__pic__img">
    </div>
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入手用户名" v-model="username">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" autocomplete="new-password"
             v-model="password">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="确认密码" v-model="ensurement">
    </div>
    <div class="wrapper__register">
      <div class="wrapper__register__button" @click="handleRegister">注册</div>
      <router-link :to="{name:'Login'}">
        <div class="wrapper__register__link">已有账号去登录</div>
      </router-link>
    </div>
    <Toast v-if="toastData.showToast" :message="toastData.toastMessage"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Toast, { useToastEffect } from '../../components/Toast'
import { reactive, toRefs } from 'vue'
import axios from 'axios'

// 注册相关逻辑
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })
  const handleRegister = async () => {
    try {
      const result = await axios.post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        await router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const {
    username,
    password,
    ensurement
  } = toRefs(data)
  return {
    username,
    password,
    ensurement,
    handleRegister
  }
}
export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const {
      toastData,
      showToast
    } = useToastEffect()
    const {
      username,
      password,
      ensurement,
      handleRegister
    } = useRegisterEffect(showToast)
    return {
      username,
      password,
      ensurement,
      toastData,
      handleRegister
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";

.wrapper {
  //  不确定高度，但是可以定位为垂直居中
  position: absolute;
  top: 50%;
  // 这样定位就是占据一行了
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &__pic {
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;

    &__img {
      width: 100%;
    }
  }

  &__input {
    box-sizing: border-box;
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background-color: #f9f9f9;
    border: .01rem solid rgba(0, 0, 0, 0.10);
    border-radius: .06rem;

    &__content {
      width: 100%;
      line-height: .48rem;
      border: none;
      outline: none;
      background: none;
      font-size: .16rem;
      color: $login-fontcolor;

      &::placeholder {
        color: $login-fontcolor;
      }
    }
  }

  &__register {
    &__button {
      height: .48rem;
      line-height: .48rem;
      margin: .32rem .4rem .16rem .4rem;
      background-color: #0091ff;
      box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, .32);
      border-radius: .04rem;
      text-align: center;
      color: #ffffff;
      font-size: .16rem;
      cursor: pointer;
    }

    &__link {
      font-size: .14rem;
      color: $login-fontcolor;
      text-align: center;
    }
  }
}
</style>
