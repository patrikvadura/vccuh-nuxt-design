<template>
  <b-container class="section">
    <b-row class="section__row">
      <b-col md="6">
        <h2 class="pb-3 section__title">
          {{ data.heroComponents.title }}
        </h2>
        <p class="pb-3 section__description">
          {{ data.heroComponents.desc }}
        </p>
        <ButtonDefault :title="`${data.heroComponents.button}`" />
      </b-col>
      <b-col md="6">
        <img :src="`~/static/images/illustrations/${data.heroComponents.image}.svg`" alt="Components" class="section__image">
        <img src="../../static/images/illustrations/design_components.svg" alt="Components" class="section__image">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import data from '~/content/cs.json'
export default {
  name: 'HeroComponents',
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
  .section {
    background: #F0F0F0;
    &__row {
      max-width: 1300px;
      padding: 3rem;
    }
    &__title {
      font-size: 3.5rem;
      font-weight: 900;
      padding: 16px 0;
    }
    &__description {
      font-size: 1.8rem;
    }
    &__image {
     width: 400px;
    }
  }
</style>
