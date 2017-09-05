<template>
  <div class="app"> 
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>
<style>
 html,body{
     height: 100%;
     width: 100%;
 }   

.app{
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
 
 
}


</style>
