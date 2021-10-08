<template>
  <ul class="footer">
    <li class="footer__item" v-for="(item,index) in tabs" :key="index">
      <a
        href="javascript:;"
        class="footer__item__link"
        :class="{'footer__item__link--active':index===0}"
      >
        <!--图标使用的是v-html，让他不要转义，显示成&#xe60f；-->
        <p class="iconfont" v-html="item.icon"></p>
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Footer',
  setup () {
    const tabs = [
      {
        icon: '&#xe60e;',
        text: '首页'
      },
      {
        icon: '&#xe60f;',
        text: '购物车'
      },
      {
        icon: '&#xe60f;',
        text: '订单'
      },
      {
        icon: '&#xe617;',
        text: '我的'
      }
    ]
    return { tabs }
  }
}
</script>

<style lang="scss">
@import "../style/viriables.scss";

.footer {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.49rem;
  padding: 0 0.18rem;
  box-sizing: border-box;
  border-top: 0.01rem solid #f1f1f1;
  // scss 的语法，可以直接省略掉前缀，直接撰写后面的内容，需要加上 &
  &__item {
    flex: 1;
    text-align: center;

    &__link {
      font-size: 0.1rem;
      color: $content-fontcolor;

      &--active {
        color: #1fa4fc;
      }

      .iconfont {
        margin: 0.07rem 0 0.02rem 0;
        font-size: 0.18rem;
      }
    }
  }
}
</style>
