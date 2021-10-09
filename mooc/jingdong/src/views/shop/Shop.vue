<template>
  <div class="wrap">
    <NearbyItem :item="item" :has-border="false"/>
  </div>
</template>

<script>
import NearbyItem from '../../components/NearbyItem'

export default {
  name: 'Shop',
  components: { NearbyItem },
  setup () {
    const item = {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: '回到家啥活动时间回家卡号的火山口的爽肤水'
    }
    return { item }
  }
}
</script>

<style scoped lang="scss">
.wrap {
  padding: 0 .18rem;
}
</style>
