<template>
  <div>
    <Logo />
    <h1 class="title" v-html="data.header.title">
      {{ data.header.title }}
    </h1>
    <p v-html="data.header.desc">
      {{ data.header.desc }}
    </p>
  </div>
</template>

<script>
import data from '~/content/cs.json'
export default {
  name: 'Header',
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-family: Nunito, sans-serif;
  display: block;
  font-weight: 800;
  font-size: 2.5em;
  color: rgb(0, 197, 142);
}
</style>
