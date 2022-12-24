<template>
  <div>
    <TodoVue 
      v-for="todo in todos" 
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoVue from '@/components/Todo.vue';

export default {
  components:{
    TodoVue
  },
  //Vuex의 state가져오기 computed에다가
  computed : {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods : {
    toggleCheckbox(value) {
      this.$emit('toggle-checkbox',value);
    },
    deleteTodo(todoId){
      this.$emit('click-delete',todoId);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>