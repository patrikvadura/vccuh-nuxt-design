<template>
  <b-container class="section">
    <b-row>
      <b-col md="3">
        <h2 class="pb-3">
          {{ data.sectionBrand.title }}
        </h2>
        <p class="pb-3">
          {{ data.sectionBrand.desc }}
        </p>
        <ButtonDefault :title="`${data.sectionBrand.button}`" />
      </b-col>
      <b-col md="9">
        <b-container class="bv-example-row">
          <b-row v-for="item in data.sectionBrandItems" :key="item.id" class="justify-content-center">
            <b-col cols="3" class="p-3 section__card">
              <div :section-brand-items="item.title">
                <img :src="`~/static/images/icons/${item.image}.svg`" alt="icon" class="section__icon" />
                <h2 class="section__title">
                  {{ item.title }}
                </h2>
                <p class="section__description">
                  {{ item.content }}
                </p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ButtonDefault from '~/components/global/buttons/ButtonDefault'
import data from '~/content/cs.json'
export default {
  name: 'SectionBrand',
  components: {
    ButtonDefault
  },
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/style';
  .section {
    max-width: 1300px;
    padding: 3rem;
    &__card {
      box-shadow: 0em 0em 3em rgba(0,0,0,0.1);
    }
    &__icon {
      background: $primary;
      border-radius: .5rem;
      padding: .5rem;
      width: 40px;
    }
    &__title {
      font-size: 2.5rem;
      padding: 16px 0;
    }
    &__description {
      font-size: 1.4rem;
    }
  }
</style>
