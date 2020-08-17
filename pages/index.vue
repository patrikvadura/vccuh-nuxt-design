<template>
  <div>
    <div>
      <HeroComponents />
      <SectionBrand />
    </div>
  </div>
</template>

<script>
import HeroComponents from '~/components/body/HeroComponents'
import SectionBrand from '~/components/body/SectionBrand'
export default {
  components: {
    HeroComponents,
    SectionBrand
  },
  data () {
    return {
      title: 'Nuxt starter framework',
      description: 'This is a description',
      id: 'nuxt_starter_framework',
      pageImage: 'https://www.patrikvadura.cz/images/og-image.jpg'
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
          content: `https://www.patrikvadura.cz/${this.id}`
        },
        {
          hide: 'twitter:card',
          name: 'twitter:card',
          content: this.pageImage ? 'summary_large_image' : 'summary'
        }
      ].filter(x => x.content)
    }
  }
}
</script>

<style lang="scss">
</style>
