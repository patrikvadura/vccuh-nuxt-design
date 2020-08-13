<template>
  <div>
    <Logo />
    <h1 class="title">
      {{ header.title }}
    </h1>
    <p>
      {{ header.desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  async fetch () {
    this.article = await this.$content('cs')
  },
  data () {
    return {
      article: null
    }
  }
}
</script>

<style scoped>
  .title {
    font-family:
      'Nunito',
      sans-serif;
    display: block;
    font-weight: 800;
    font-size: 100px;
    color: #94b613;
    letter-spacing: 1px;
  }
</style>
