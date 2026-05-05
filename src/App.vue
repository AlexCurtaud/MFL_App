<template>
  <div>
    <Navbar/>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";

</script>

<style scoped>
:global(body) {
  background-color: #ECF2EF;
  margin: 0;
}


</style>
