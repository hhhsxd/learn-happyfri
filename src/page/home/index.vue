<template>
<div class="home_container">
 <itemcontainer :fcomponent="theName" ></itemcontainer>
</div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer.vue'
export default {
  name: 'home',
  components: {
    itemcontainer
  },
  data () {
    return {
      theName: 'home'
    }
  },
  created () {

  }

}
</script>

<style >

</style>
