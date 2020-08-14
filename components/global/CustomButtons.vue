<template>
  <div class="custom-button" :class="classes">
    <slot />
    <div class="custom-button__title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    href: {
      type: String,
      required: false,
      default: ''
    },
    wide: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'custom-button--wide': this.wide
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .custom-button {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    height: 3rem;
    line-height: 3rem;
    border-radius: .5rem;
    background: #00000052;
    cursor: pointer;
    &__title {
      font-size: 1.8rem;
      font-weight: 600;
      text-align: center;
      padding: 0 2.5rem;
      color: #fff;
    }
    &--wide {
      width: 100%;
      .custom-button__title {
        width: 100%;
        padding: 0 .5rem;
      }
    }
  }
</style>
