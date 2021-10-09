<template>
  <h3 class="title">附近店铺</h3>
  <NearbyItem v-for="(item,index) in nearby" :key="index" :item="item" :has-border="true"/>
</template>
<script>
import NearbyItem from '../../components/NearbyItem'

export default {
  name: 'Nearby',
  components: { NearbyItem },
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

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.title {
  margin: 0.16rem 0 0.02rem 0;
  font-size: 0.18rem;
  color: $content-fontcolor;
  font-weight: normal;
}

</style>
