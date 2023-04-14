<template>
  <div class="item_container">
    <itemcontainer :fcomponent="theName"></itemcontainer>
  </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer.vue'
export default {
  name: 'item',
  components: {itemcontainer},
  data () {
    return {
      theName: 'item'
    }
  }
}
</script>

<style>

</style>
