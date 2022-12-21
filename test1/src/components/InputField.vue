<template>
  <div>
    <label for="">Name</label>
      <input type="text" 
      :value="value" 
      style="padding:30px; border: 2px solid green"
      @input="$emit('input',$event.target.value)"
      />
  </div>
</template>

<!--props정의(부모로 부터 받는)-->
<script>
export default {
  props:{
    value : {
      type:String,
      required:true
    }
  }
}

</script>