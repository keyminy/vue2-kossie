<template>
  <div>
    User List
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
  created(){
    this.getUsers();
  },
  computed : {
    // ...mapState({
    //   users : state => state.user.users
    // })
    ...mapState('user',{
      users : state => state.users
    })
  },
  methods : {
    ...mapActions('user',['getUsers'])
    // getUsers(){
    //   this.$store.dispatch('getUsers')
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>