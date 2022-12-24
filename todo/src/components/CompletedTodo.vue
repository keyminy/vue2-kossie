<template>
  <div>
    Completed Todo : {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
  props : {
    todos : {
      type : Array,
      required : true
    }
  },
  computed : {
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