<template>
  <div class="section">
    <div target="nav-collapse" />
    <ul v-for="item in data.menu" id="nav-collapse" :key="item.id" is-nav class="section__links">
      <li :menu="item.link">
        <n-link :to="`/${item.id}`" target="_self">
          {{ item.link }}
        </n-link>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '~/content/cs.json'
export default {
  name: 'Links',
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/style';
  .section {
    &__links {
      display: inline-block;
      list-style: none;
      padding: 3rem 0;
      margin: 0 0 0 auto;
      li {
        display: inline-block;
        border-right: 1px solid $black;
        margin-left: 1.5rem;
        padding-right: 1.5rem;
        &:last-child {
          border-right: 0;
          padding-right: 0;
        }
        a {
          color: $black;
          font-size: 1.4rem;
          font-weight: 300;
          &:hover, &:focus, &:active {
            background: rgba(0,0,0,.1);
            padding: .5rem 1rem;
            border-radius: .5rem;
            color: $black;
            font-weight: 900;
          }
        }
      }
    }
  }
</style>
