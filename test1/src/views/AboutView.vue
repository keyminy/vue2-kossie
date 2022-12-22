<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KossieCoder>
      <template v-slot:header="{kossie}">
        <p>header slot {{ kossie }}</p>
      </template>
      <template v-slot:default>
        hello slot default
      </template>
    </KossieCoder>
  </div>
</template>

<script>
 import KossieCoder from '@/components/KossieCoder.vue';

export default {
  components : {
    KossieCoder
  }
}
</script>