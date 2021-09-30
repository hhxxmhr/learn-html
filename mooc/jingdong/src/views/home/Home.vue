<template>
  <div class="wrapper">
      <StaticPart />
    <div class="nearby__box">
    <Nearby />
    </div>
  </div>
  <Footer />
</template>
<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Footer from '../../components/Footer'
export default {
  name: 'Home',
  components: {
    StaticPart: StaticPart,
    Nearby: Nearby,
    Footer: Footer
  }
}
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
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

}

</style>
