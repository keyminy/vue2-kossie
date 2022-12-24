<template>
  <div>
    User List
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>

export default {
  created(){
    this.getUsers();
  },
  computed : {
    //computed를 통해,가져온 users를 호출
    users() {
      return this.$store.state.users;
    }
  },
  methods : {
    getUsers(){
      this.$store.dispatch('getUsers')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>