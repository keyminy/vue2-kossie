<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <!--CompletedTodoVue : 완성된 todo목록이 몇개인지-->
    <CompletedTodoVue/>
    <!--input태그에 enter키 눌렀을 때, 이벤트 추가 -->
    <AddTodoVue @add-todo="addTodo"/>
    <hr>
    <TodoListVue 
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoListVue from './components/TodoList.vue';
import AddTodoVue from './components/AddTodo.vue';
import CompletedTodoVue from './components/CompletedTodo.vue';

export default {
  components : {
    TodoListVue,AddTodoVue,CompletedTodoVue
  }, 
  data(){
    return {
      todoText: '',
      // todos : [
      //   {id:1, text:'buy a car',checked:false},
      //   {id:2, text:'play game',checked:false},
      // ]
    }
  },
  methods:{
    deleteTodo(id){
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });//findIndex : predicate형태 callback함수
      // this.todos.splice(index,1);
      /* (M2)todos배열을 filter를 통해 걸러주기 */
      this.todos = this.todos
                      .filter(todo => todo.id !== id);
    },
    addTodo(value){
      //console.log(e.target.value);
      this.todos.push({
        id:Math.random(),
        text:value,
        checked:false
      });
      
    },
    toggleCheckbox({id,checked}){
      //자식에서 넘어온 id,checked를 구조분해 할당 문법으로 가져왔다(매개변수 부분 : {id,checked})
      //console.log(id,checked);
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });//findIndex : predicate형태 callback함수
      //const index값은 todos배열에서 해당 조건을 만족하는 index가 나옴
      //console.log(index);//(0부터 시작하네)
      this.todos[index].checked = checked;
    }
  }
}
</script>