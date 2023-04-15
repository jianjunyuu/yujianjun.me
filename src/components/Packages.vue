<script setup lang="ts">
interface Item {
  from: 'repo' | 'npm'
  url: string
  name: string
  demo?: string
}
const lists: Array<Item> = [
  {
    name: 'Timeline',
    from: 'npm',
    url: 'https://www.npmjs.com/package/timeline-axis',
    demo: 'https://stellular-sable-ce215a.netlify.app/',
  },
  {
    name: 'ni18n-cli',
    from: 'npm',
    url: 'https://www.npmjs.com/package/ni18n-cli',
  },
]
</script>

<template>
  <div class="category-title">
    Packages
  </div>

  <div v-for="(item, index) in lists" :key="index" class="item">
    <icon-iconoir:npm v-if="item.from === 'npm'" />
    <icon-octicon:repo v-else-if="item.from === 'repo'" />
    <a :href="item.url">{{ item.name }}</a>
    <span v-if="item.demo" class="demo">[<a :href="item.demo">demo</a>]</span>
  </div>
</template>

<style lang="scss" scoped>
.item {
  border: 1px solid var(---border-color);
  display: inline-block;
  padding: 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-weight: 600;

  > svg {
    display: inline-block;
    // font-size: 24px;
    margin-right: 4px;
  }

  &:last-child {
    margin-right: 0;
  }

  > .demo {
    color: var(--fg-shallow);
  }
}
</style>
