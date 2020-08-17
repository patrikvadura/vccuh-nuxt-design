<template>
  <div class="section">
    <!-- Right aligned nav items -->
    <div class="ml-auto">
      <div class="d-flex flex-row align-items-left">
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
        <ButtonDefault :title="`${data.global.search}`" type="submit" class="my-2 my-sm-0" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDefault from '~/components/global/buttons/ButtonDefault'
import data from '~/content/cs.json'
export default {
  name: 'Search',
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

<style scoped>

</style>
