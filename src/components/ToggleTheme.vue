<script setup lang='ts'>
import { isDark } from '~/states'

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <icon-carbon:moon v-if="isDark" />
    <icon-carbon:sun v-else />
  </a>
</template>
