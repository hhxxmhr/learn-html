<template>
  <div class="wrapper">
    <div class="wrapper__pic">
      <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="user" class="wrapper__pic__img">
    </div>
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入手机号">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" autocomplete="new-password">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="确认密码">
    </div>
    <div class="wrapper__register">
      <div class="wrapper__register__button" @click="register">注册</div>
      <router-link :to="{name:'Login'}">
        <div class="wrapper__register__link">已有账号去登录</div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import { useRouter } from 'vue-router'

export default {
  name: 'Register',
  setup () {
    const register = () => {
    }
    return { register }
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
