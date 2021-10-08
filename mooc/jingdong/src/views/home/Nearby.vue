<template>
  <h3 class="title">附近店铺</h3>
  <ul class="nearby">
    <li class="nearby__item" v-for="(item, index) in nearby" :key="index">
      <a href="javascript:;" class="nearby__item__link">
        <div class="nearby__item__logo">
          <img
            :src="item.imgUrl"
            alt="dian"
            class="nearby__item__logo__img"
          />
        </div>
        <div class="nearby__item__content">
          <p class="nearby__item__content__name">{{ item.title }}</p>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tags__item" v-for="(it,index) in item.tags" :key="index">{{ it }}</span>
          </div>
          <p class="nearby__item__content__highlight">
            {{ item.desc }}
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Nearby',
  setup () {
    const nearby = [
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: '回到家啥活动时间回家卡号的火山口的爽肤水'
      }
    ]
    return { nearby }
  }
}
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

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
      padding-bottom: 0.12rem;
      border-bottom: 0.01rem solid #f1f1f1;

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
</style>
