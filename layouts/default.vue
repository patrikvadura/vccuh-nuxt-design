<template>
  <div class="container">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.container {
  padding: 0;
}
</style>
