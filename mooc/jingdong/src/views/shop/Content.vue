<template>
  <div class="content">
    <ul class="category">
      <li class="category__item">
        <a href="#" class="category__item__link category__item__link--active">全部商品</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__item__link">秒杀</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__item__link">新鲜水果</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__item__link">休闲食品</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__item__link">时令蔬菜</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__item__link">肉禽蛋奶</a>
      </li>
    </ul>
    <ul class="product">
      <li class="product__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="tu" class="product__item__img">
        <div class="product__item__detail">
          <h4 class="product__item__detail__title">番茄250g/份</h4>
          <p class="product__item__detail__sales">预售10</p>
          <p class="product__item__detail__price">
            <span class="product__item__detail__yen">&yen;</span>33.6
            <span class="product__item__detail__origin">&yen;66.6</span>
          </p>
        </div>
        <div class="product__item__number">
          <span class="product__item__number__minus">-</span>
          0
          <span class="product__item__number__plus">+</span>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style scoped lang="scss">
@import "../../style/mixins.scss";

.content {
  display: flex;
  position: absolute;
  top: 1.48rem;
  bottom: .5rem;
  left: 0;
  right: 0;
}

.category {
  width: .76rem;
  height: 100%;
  background-color: #f5f5f5;
  overflow-y: scroll;

  &__item {
    &__link {
      display: block;
      line-height: .4rem;
      text-align: center;
      color: #333333;
      font-size: .14rem;

      &--active {
        background-color: #fff;
      }
    }
  }
}

.product {
  flex: 1;
  overflow-y: scroll;

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid #f1f1f1;

    &__img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }

    &__detail {
      overflow: hidden;
      &__title {
        font-size: .14rem;
        line-height: .2rem;
        color: #333333;
        margin: 0;
        @include ellipsis
      }

      &__sales {
        margin: .06rem 0;
        font-size: .12rem;
        line-height: .16rem;
        color: #333333;
      }

      &__price {
        margin: 0;
        font-size: .14rem;
        line-height: .2rem;
        color: #e93b3b;
      }

      &__yen {
        font-size: .12rem;
      }

      &__origin {
        margin-left: .06rem;
        font-size: .12rem;
        line-height: .2rem;
        color: #999999;
        text-decoration: line-through;
      }
    }

    &__number {
      position: absolute;
      right: 0;
      bottom: .12rem;

      &__minus, &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .2rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }

      &__minus {
        box-sizing: border-box;
        color: #666666;
        border: .01rem solid #666666;
        margin-right: .08rem;
      }

      &__plus {
        background: #0091ff;
        color: #ffffff;
        margin-left: .08rem;
      }
    }
  }

}
</style>
