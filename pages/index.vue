<template>
  <div class="container">
    <Header />
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
