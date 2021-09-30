<template>
  <div class="wrapper">
    <div class="position">
      <i class="iconfont position__icon">&#xe619;</i>
      你猜我猜不猜得到你猜的对不对哈哈哈哈哈哈哈哈哈哈哈哈
      <i class="iconfont position__bell">&#xe628;</i>
    </div>
    <div class="search">
      <i class="iconfont">&#xe613;</i>
      <form class="search__form">
        <input
          type="text"
          class="search__form__input"
          name="words"
          autocomplete="off"
          placeholder="搜索商品/折扣/关键字"
        />
      </form>
    </div>
    <div class="banner">
      <img
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        alt="banner"
        class="banner__img"
      />
    </div>
    <div class="classify">
      <ul class="navs">
        <li class="navs__item" v-for="(i, index) in 10" :key="index">
          <a href="javascript:;" class="navs__item__link">
            <p class="navs__item__pic">
              <img
                src="http://www.dell-lee.com/imgs/vue3/超市.png"
                alt=""
                class="navs__item__pic__img"
              />
            </p>
            <span class="nav__title">京东超市</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="gap"></div>
    <div class="nearby__box">
      <h3 class="title">附近店铺</h3>
      <ul class="nearby">
        <li class="nearby__item" v-for="(i, index) in 10" :key="index">
          <a href="javascript:;" class="nearby__item__link">
            <div class="nearby__item__logo">
              <img
                src="http://www.dell-lee.com/imgs/vue3/near.png"
                alt="dian"
                class="nearby__item__logo__img"
              />
            </div>
            <div class="nearby__item__content">
              <p class="nearby__item__content__name">沃尔玛</p>
              <div class="nearby__item__content__tags">
                <span class="nearby__item__content__tags__item">月售1万+</span>
                <span class="nearby__item__content__tags__item">配送¥0</span>
                <span class="nearby__item__content__tags__item"
                  >基础运费¥5</span
                >
              </div>
              <p class="nearby__item__content__highlight">
                回到家啥活动时间回家卡号的火山口的爽肤水
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
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

<style lang="scss">
@import "./style/viriables.scss";
@import "./style/mixins.scss";
.wrapper {
  overflow-y: auto;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  padding: 0 0.18rem;
  color: $content-fontcolor;
  .position {
    position: relative;
    padding: 0.16rem 0.24rem 0.16rem 0.24rem;
    line-height: 0.22rem;
    font-size: 0.16rem;
    @include ellipsis;
    &__icon {
      position: absolute;
      top: 0.16rem;
      left: 0;
    }
    &__bell {
      position: absolute;
      top: 0.16rem;
      right: 0;
    }
    .iconfont {
      font-size: 0.18rem;
    }
  }
  .search {
    display: flex;
    align-items: center;
    height: 0.32rem;
    padding: 0 0.2rem;
    border-radius: 0.16rem;
    background-color: #f5f5f5;
    &__form {
      margin-left: 0.08rem;
      flex: 1;
      &__input {
        width: 100%;
        background: none;
        border: none;
        outline: none;
        font-size: 0.14rem;
      }
    }
  }
  .banner {
    margin-top: 0.16rem;
    // 当图片加载慢的时候，他下面的内容会先加载出来，等到图片加载完成时，下面的内容会移动位置到下面---抖动效果
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%; // 图片的高宽比
    &__img {
      width: 100%;
    }
  }
  .classify {
    margin-top: 0.16rem;
    .navs {
      // 最外层设置了padding之后，要是又想取消，设置margin 左右负值
      // margin: 0 -0.18rem;
      display: flex;
      flex-wrap: wrap;
      &__item {
        width: 20%;
        margin-bottom: 0.15rem;
        &__link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: $content-fontcolor;
        }
        &__pic {
          margin-bottom: 0.04rem;
          &__img {
            width: 0.4rem;
            height: 0.4rem;
          }
        }
      }
    }
  }
  .gap {
    height: 0.1rem;
    background-color: #f1f1f1;
    margin: 0 -0.18rem;
  }
  .nearby__box {
    .title {
      margin: 0.16rem 0 0.02rem 0;
      font-size: 0.18rem;
      color: $content-fontcolor;
      font-weight: normal;
    }
    .nearby {
      &__item {
        padding-top: 0.12rem;
        &__link {
          display: flex;
          color: $content-fontcolor;
          // align-items: center;
        }
        &__logo {
          width: 0.56rem;
          height: 0.56rem;
          margin-right: 0.16rem;
          &__img {
            width: 100%;
          }
        }
        &__content {
          flex: 1;
          padding-bottom: .12rem;
          border-bottom: .01rem solid #f1f1f1;
          &__name {
            font-size: 0.16rem;
            line-height: 0.22rem;
          }
          &__tags {
            margin-top: 0.08rem;
            font-size: 0.13rem;
            line-height: 0.18rem;
            &__item {
              margin-right: 0.16rem;
            }
          }
          &__highlight {
            margin: 0.08rem 0 0 0;
            font-size: 0.13rem;
            line-height: 0.18rem;
            color: #e93b3b;
          }
        }
      }
    }
  }
}
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
