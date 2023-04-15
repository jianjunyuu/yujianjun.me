<script setup lang="ts">
interface Item {
  url: string
  name: string
}
const lists: Array<Item> = [
  {
    name: 'ni18n-cli',
    url: 'https://www.npmjs.com/package/ni18n-cli',
  },
  {
    name: 'Timeline',
    url: 'https://www.npmjs.com/package/timeline-axis',
  },
]
</script>

<template>
  <div class="category-title">
    Articles
  </div>

  <a v-for="(item, index) in lists" :key="index" :href="item.url" class="item" target="_blank">{{ index + 1 }}. {{ item.name }}</a>
</template>

<style lang="scss" scoped>
.item {
  padding-bottom: 8px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
}
</style>
