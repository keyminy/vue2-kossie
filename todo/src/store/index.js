import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  //state : data가 들어가는 곳
  state:{
    todos : [
      {id:1, text:'buy a car',checked:false},
      {id:2, text:'play game',checked:false},
    ],
    users: []
  },
  //mutations : 데이터를 변경하는 작업
  mutations : {
    SET_USERS(state,users){
      state.users = users;
    },
    ADD_TODO(state,value) {
      state.todos.push({
        id:Math.random(),
        text:value,
        checked:false
      });
    },
    TOGGLE_TODO(state,{id,checked}) {
      //자식에서 넘어온 id,checked를 구조분해 할당 문법으로 가져왔다(매개변수 부분 : {id,checked})
      //console.log(id,checked);
      const index = state.todos.findIndex(todo => {
        return todo.id === id;
      });//findIndex : predicate형태 callback함수
      //const index값은 todos배열에서 해당 조건을 만족하는 index가 나옴
      //console.log(index);//(0부터 시작하네)
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state,todoId) {
      state.todos = state.todos
                        .filter(todo => (todo.id !== todoId));
    }
  },
  //actions : 함수가 들어가서 비동기적인 일 처리
  actions : {
    //(비동기작업) setTimeout같은
    getUsers({commit}){
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            commit('SET_USERS',res.data);
          });
    },
    addTodo({commit},value){
      setTimeout(function(){
        commit('ADD_TODO',value);
      },500);
    },
    toggleTodo({commit},payload){
      setTimeout(function(){
        commit('TOGGLE_TODO',payload);
      },500);
    },
    deleteTodo({commit},todoId){
      setTimeout(function(){
        commit('DELETE_TODO',todoId);
      },500);
    }
  },
  //getters : vue component안의 computed와 비슷
  getters : {
    numberOfCompletedTodo : (state) => {
      return state.todos
            .filter(todo => todo.checked)
            .length;
    }
  }
});