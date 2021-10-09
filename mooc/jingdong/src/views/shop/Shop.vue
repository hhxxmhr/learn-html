<template>
  <div class="wrap">
    <div class="search">
      <div class="search__back iconfont" @click="goBack">&#xe7e0;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe613;</span>
        <input class="search__content__input" placeholder="请输入商品名称"/>
      </div>
    </div>
    <!--    可解决未加载完图片，显示裂图的情况-->
    <NearbyItem :item="item" :has-border="false" v-show="item.imgUrl"/>
    <Content/>
  </div>
</template>

<script>
import NearbyItem from '../../components/NearbyItem'
import { useRouter, useRoute } from 'vue-router'
import Content from './Content'

export default {
  name: 'Shop',
  components: {
    Content,
    NearbyItem
  },
  setup () {
    // 大的整体的路由信息
    const router = useRouter()
    // 当前路由的信息
    const route = useRoute()
    // 获取路由参数
    const id = route.params.id
    console.log(id)
    const item = {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: '回到家啥活动时间回家卡号的火山口的爽肤水'
    }
    const goBack = () => {
      router.back()
    }
    return {
      item,
      goBack
    }
  }
}
</script>

<style scoped lang="scss">
.wrap {
  padding: 0 .18rem;

  .search {
    display: flex;
    //height: .32rem; 可省略，里面撑开即可
    margin: .14rem 0 .04rem 0;

    &__back {
      width: .3rem;
      height: .32rem;
      line-height: .32rem;
      font-size: .24rem;
      color: #b6b6b6;
      cursor: pointer;
    }

    &__content {
      flex: 1;
      display: flex;
      //line-height: .32rem; 可省略，里面撑开即可
      background-color: #f5f5f5;
      border-radius: .16rem;

      &__icon {
        width: .44rem;
        line-height: .32rem;
        //background-color: pink;
        text-align: center;
        color: #b7b7b7;
      }

      &__input {
        width: 100%;
        height: .32rem;
        border: none;
        outline: none;
        background: none;
        padding-right: .2rem;
        color: #333333;
        font-size: .14rem;

        &::placeholder {
          color: #333333;
        }
      }
    }
  }
}
</style>
