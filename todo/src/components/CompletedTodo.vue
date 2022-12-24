<template>
  <div>
    Completed Todo : {{ numberOfCompletedTodo }}
    {{ todos }}
  </div>
</template>

<script>
export default {
  computed : {
    todos(){
      return this.$store.state.todos;
    },
    //완료한 todo가 몇개 있는지??
    numberOfCompletedTodo() {
      return this.todos
                .filter(todo => todo.checked)
                .length;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>