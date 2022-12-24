import axios from 'axios';
/* user는 state와,mutations,actions를 쓰고있다 */
export default {
  namespaced:true,
  state : {
    users: []
  },
  mutations : {
    SET_USERS(state,users){
      state.users = users;
    },
  },
  actions : {
    //(비동기작업) setTimeout같은
    getUsers({commit}){
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            commit('SET_USERS',res.data);
          });
    },
  }
}