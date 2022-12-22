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
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
      />
      {{ todos }}
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
    deleteTodo(id){
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });//findIndex : predicate형태 callback함수
      // this.todos.splice(index,1);
      /* (M2)todos배열을 filter를 통해 걸러주기 */
      this.todos = this.todos
                      .filter(todo => todo.id !== id);
    },
    addTodo(e){
      //console.log(e.target.value);
      this.todos.push({
        id:Math.random(),
        text:e.target.value,
        checked:false
      });
      this.todoText = '';//입력하고 난담에 인풋값 빈값으로
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