<template>
<ul class="footer">
    <li class="footer__item">
      <a
        href="javascript:;"
        class="footer__item__link footer__item__link--active"
      >
        <p class="iconfont">&#xe60e;</p>
        首页
      </a>
    </li>
    <li class="footer__item">
      <a href="javascript:;" class="footer__item__link">
        <p class="iconfont">&#xe60d;</p>
        购物车
      </a>
    </li>
    <li class="footer__item">
      <a href="javascript:;" class="footer__item__link">
        <p class="iconfont">&#xe60f;</p>
        订单
      </a>
    </li>
    <li class="footer__item">
      <a href="javascript:;" class="footer__item__link">
        <p class="iconfont">&#xe617;</p>
        我的
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Footer'
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
