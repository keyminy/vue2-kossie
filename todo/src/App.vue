<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <!--input태그에 enter키 눌렀을 때, 이벤트 추가 -->
    <input 
    v-model="todoText"
    type="text" 
    class="w-100 p-2" 
    placeholder="Type todo"
    @keyup.enter="addTodo"
    >
    <hr>
    <TodoVue 
      v-for="todo in todos" 
      :key="todo.id"
      :todo="todo"/>
  </div>
</template>

<script>
import TodoVue from './components/Todo.vue';

export default {
  components : {
    TodoVue
  },
  data(){
    return {
      todoText:'',
      todos : [
        {id:1, text:'buy a car',checked:false},
        {id:2, text:'play game',checked:false},
      ]
    }
  },
  methods:{
    addTodo(e){
      //console.log(e.target.value);
      this.todos.push({
        id:Math.random(),
        text:e.target.value,
        checked:false
      });
      this.todoText = '';//입력하고 난담에 인풋값 빈값으로
    }
  }
}
</script>