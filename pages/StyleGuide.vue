<template>
  <div class="container" style="height: 500px;">
    <add-to-cart :product="product" />
    <button class="btn btn-blue">
      Button
    </button>
    <breadcrumbs
      class="pt40 pb20 hidden-xs"
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

@tailwind preflight;

.breadcrumbs{
  @apply .bg-grey-light .text-red .flex .text-4xl;
}
.btn {
  @apply .font-bold .py-2 .px-4 .rounded;
}
.btn-blue {
  @apply .bg-blue .text-white;
}
.btn-blue:hover {
  @apply .bg-blue-dark;
}

@tailwind utilities;

</style>
