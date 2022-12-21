<template>
  <div>
    <h1>This is Home page</h1>
    <KossieCoderVue title="HomeTitle" name="Kossie Coder"/>
  </div>
</template>

<script>
import KossieCoderVue from '@/components/KossieCoder.vue';

export default {
  components:{
    KossieCoderVue
  },
  data() {
    return {
      name: 'Kossie Coder'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>