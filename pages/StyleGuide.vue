<template>
  <div class="container" style="height: 500px;">
    <add-to-cart :product="product" style="width: 30%;" />
    <breadcrumbs
      :routes="breadcrumbs.routes"
      :active-route="breadcrumbs.name"
    />
  </div>
</template>

<script>
import AddToCart from 'theme/components/core/AddToCart.vue'
import Breadcrumbs from 'theme/components/core/Breadcrumbs.vue'

export default {
  data () {
    return {
      product: {},
      breadcrumbs: {
        routes: [{name: 'Homepage', route_link: '/'}],
        name: 'styleguide'
      }
    }
  },
  components: {
    AddToCart,
    Breadcrumbs
  }
}
</script>

<style scoped>

</style>
