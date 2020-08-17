<template>
  <header class="header">
    <div class="header__content">
      <b-container fluid>
        <b-row>
          <b-col lg="2" md="3" sm="4" class="d-flex flex-row align-items-center">
            <nuxt-link to="/">
              <LogoNegative width="40" />
            </nuxt-link>
            <div class="header__motto">
              {{ data.header.title }}
            </div>
          </b-col>
          <b-col lg="8" md="6" sm="6" class="d-flex flex-row align-items-left">
            <div class="header__links">
              <Menu />
            </div>
          </b-col>
          <b-col lg="2" md="3" sm="2" class="d-flex flex-row align-items-right">
            <div class="header__links">
              <MenuSecondary />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </header>
</template>

<script>
import Menu from '@/components/header/Menu'
import MenuSecondary from '@/components/header/MenuSecondary'
import data from '~/content/cs.json'
export default {
  name: 'Header',
  components: {
    Menu,
    MenuSecondary
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
  .header {
    display: block;
    background-color: $primary;
    width: 100%;
    &__content {
      position: relative;
    }
    &__motto {
      font-family: $font-primary;
      font-size: 2rem;
      line-height: 1.25;
      text-align: center;
      white-space: pre-line;
      margin-left: 1rem;
      padding-bottom: 2rem;
    }
    &__links {
      display: flex;
      align-items: center;
      flex-direction: row;
    }
  }
</style>
