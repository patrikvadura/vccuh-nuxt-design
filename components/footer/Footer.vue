<template>
  <div>
    <article v-for="item in data.posts" :key="item.id" class="links">
      <div :posts="item.title">
        <n-link :to="`/posts/${item.id}`" class="button--green">
          {{ item.title }}
        </n-link>
      </div>
    </article>
  </div>
</template>

<script>
import data from '~/content/cs.json'
export default {
  name: 'Footer',
  props: ['posts'],
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
  .links {
    padding-top: 15px;
  }
  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid rgb(0, 197, 142);
    color: rgb(0, 197, 142);
    text-decoration: none;
    padding: 10px 30px;
  &:hover {
     color: #fff;
     background-color: rgb(0, 197, 142);
   }
  }
</style>
