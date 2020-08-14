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
  },
  data () {
    return {
      title: 'Nuxt starter framework',
      description: 'This is a description',
      pageImage: 'https://code.luasoftware.com/img/logo-badge.png'
    }
  },
  computed: {
    pageUrl () {
      const domain = this.$store.state.site.domain
      return `https://${domain}/${this.$route.path}`
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.pageImage
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.pageUrl
        },
        {
          hide: 'twitter:card',
          name: 'twitter:card',
          content: this.pageImage ? 'summary_large_image' : 'summary'
        },
        {
          hide: 'twitter:site',
          name: 'twitter:site',
          content: this.$store.state.site.twitter
        }
      ].filter(x => x.content)
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
