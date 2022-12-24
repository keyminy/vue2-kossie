<template>
  <div>
    <input 
    v-model="todoText"
    type="text" 
    class="w-100 p-2" 
    placeholder="Type todo"
    @keyup.enter="addTodo"
    >
  </div>
</template>

<script>
export default {
  data(){
    return {
      todoText : ''
    }
  },
  methods : {
    addTodo(e){
      /*Vuex의 mutation 사용하기 commit의
      첫번째 인자에 원하는 함수 쓰고, 두번재로 value넣기*/ 
      //this.$store.commit('ADD_TODO',e.target.value);
      this.$store.dispatch('addTodo',e.target.value);
      //this.$emit('add-todo',e.target.value);
      this.todoText = '';//입력하고 난담에 인풋값 빈값으로
    }
  }
}
</script>

<style lang="scss" scoped>

</style>