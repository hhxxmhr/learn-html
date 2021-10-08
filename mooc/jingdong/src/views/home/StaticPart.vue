<template>
  <div class="position">
    <i class="iconfont position__icon">&#xe619;</i>
    你猜我猜不猜得到你猜的对不对哈哈哈哈哈哈哈哈哈00哈哈哈
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
      <li class="navs__item" v-for="(item, index) in navs" :key="index">
        <a href="javascript:;" class="navs__item__link">
          <p class="navs__item__pic">
            <img
              :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
              alt=""
              class="navs__item__pic__img"
            />
          </p>
          <span class="nav__title">{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup () {
    const navs = [
      {
        imgName: '菜市场',
        title: '菜市场'
      }, {
        imgName: '水果店',
        title: '水果店'
      }, {
        imgName: '鲜花',
        title: '鲜花绿植'
      }, {
        imgName: '医药健康',
        title: '医药健康'
      }, {
        imgName: '家居',
        title: '家居时尚'
      }, {
        imgName: '超市',
        title: '京东超市'
      }, {
        imgName: '蛋糕',
        title: '烘焙蛋糕'
      }, {
        imgName: '签到',
        title: '签到'
      }, {
        imgName: '大牌免运',
        title: '大牌免运'
      },
      {
        imgName: '红包',
        title: '红包套餐'
      }
    ]
    return { navs }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

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
</style>
