<template>
  <div>
    Completed Todo : {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
  computed : {
    // todos(){
    //   return this.$store.state.todos;
    // },
    //완료한 todo가 몇개 있는지??
    numberOfCompletedTodo() {
      return this.$store.getters['todo/numberOfCompletedTodo'];
    }
  }
}
</script>

<style lang="scss" scoped>

</style>