<template>
  <div class="custom-button">
    <a class="custom-button__title">
      {{ title }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'ButtonDefault',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
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
  }
</style>
