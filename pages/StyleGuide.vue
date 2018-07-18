<template>
  <div class="container" style="height: 500px;">
    <add-to-cart :product="product" />
    <button class="btn btn-blue">
      Button
    </button>
  </div>
</template>

<script>
import AddToCart from 'theme/components/core/AddToCart.vue'

export default {
  data () {
    return {
      product: {}
    }
  },
  components: {
    AddToCart
  }
}
</script>

<style scoped>

@tailwind preflight;

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
