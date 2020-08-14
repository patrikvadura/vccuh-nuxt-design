<template>
  <img
    :src="icon"
    title=""
    :alt="name"
    class="custom-icon"
  >
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: false,
      default: '/icons'
    }
  },
  setup ({ path, name }) {
    const icon = computed<string>(() => {
      try {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        return require(`~/static/images${path}/${name}.svg`)
      } catch (e) {
        console.error(e)
        return ''
      }
    })
    return { icon }
  }
})
</script>

<style lang="scss">
  .custom-icon {
    display: inline-flex;
  }
</style>
