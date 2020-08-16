<template>
  <div class="section">
    <ul v-for="item in data.menuSecondary" :key="item.id" class="section__links">
      <li :menuSecondary="item.link">
        <b-img :src="`~/static/images/icons/${item.icon}.svg`" alt="icon" class="section__icon" />
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
    &__icon {
      width: 16px;
    }
    &__links {
      display: inline-block;
      list-style: none;
      padding: 3rem 0;
      margin: 0 0 0 auto;
      li {
        display: inline-block;
        border-right: 1px solid $font-primary;
        margin-left: 1.5rem;
        padding-right: 1.5rem;
        &:last-child {
          border-right: 0;
          padding-right: 0;
        }
        a {
          color: $font-primary;
          font-size: 1.4rem;
          font-weight: 300;
          &:hover, &:focus, &:active {
            color: $font-primary;
            font-weight: 900;
          }
        }
      }
    }
  }
</style>
