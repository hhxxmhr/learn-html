<template>
  <div class="nearby__item">
    <a href="javascript:;" class="nearby__item__link">
      <div class="nearby__item__logo">
        <img
          :src="item.imgUrl"
          alt="dian"
          class="nearby__item__logo__img"
        />
      </div>
      <div :class="{'nearby__item__content':true,'nearby__item__content--bordered':hasBorder}">
        <p class="nearby__item__content__name">{{ item.title }}</p>
        <div class="nearby__item__content__tags">
          <span class="nearby__item__content__tags__item" v-for="(it,index) in item.tags" :key="index">{{ it }}</span>
        </div>
        <p class="nearby__item__content__highlight">
          {{ item.desc }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NearbyItem',
  props: ['item', 'hasBorder']
}
</script>

<style scoped lang="scss">
@import "../style/viriables.scss";

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

      &--bordered {
        border-bottom: 0.01rem solid #f1f1f1;
      }

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
