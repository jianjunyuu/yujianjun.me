<script setup lang="ts">
// TODO
</script>

<template>
  <Navbar />

  <div class="center">
    <Profile />
    <br>
    <br>
    <Packages />
    <br>
    <br>
    <br>
    <Articles />
  </div>
</template>

<style lang="scss" scoped>
.center {
  position: fixed;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 980px;
}
</style>
