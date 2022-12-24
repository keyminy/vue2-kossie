<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <!--CompletedTodoVue : 완성된 todo목록이 몇개인지-->
    <CompletedTodoVue/>
    <!--input태그에 enter키 눌렀을 때, 이벤트 추가 -->
    <AddTodoVue/>
    <hr>
    <TodoListVue/>
    <UserListVue/>
  </div>
</template>

<script>
import TodoListVue from './components/TodoList.vue';
import AddTodoVue from './components/AddTodo.vue';
import CompletedTodoVue from './components/CompletedTodo.vue';
import UserListVue from './components/UserList.vue';

export default {
  components : {
    TodoListVue
    ,AddTodoVue
    ,CompletedTodoVue
    ,UserListVue
  }
}
</script>