<template>
  <div>
    <article v-for="item in data.posts" :key="item.id" class="links container--buttons">
      <div :posts="item.title">
        <n-link :to="`/posts/${item.id}`" class="button--green">
          {{ item.title }}
        </n-link>
        <ButtonDefault title="title" />
      </div>
    </article>
  </div>
</template>

<script>
import ButtonDefault from '~/components/global/buttons/ButtonDefault'
import data from '~/content/cs.json'
export default {
  name: 'Footer',
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
  .container--buttons {
    display: inline-block;
  }
  .links {
    padding: 15px 10px;
  }
  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid rgb(0, 197, 142);
    color: rgb(0, 197, 142);
    text-decoration: none;
    padding: 10px 30px;
    transition: all 600ms ease-in-out;
    &:hover {
      color: #fff;
      background-color: rgb(0, 197, 142);
    }
  }
</style>
