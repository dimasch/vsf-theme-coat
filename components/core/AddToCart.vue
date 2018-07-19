<template>
  <button-full @click.native="addToCart(product)" :disabled="canBeAdded(product)" data-testid="addToCart" class="btn btn-blue .btn-blue:hover">
    {{ $t('Add to cart') }}
  </button-full>
</template>

<script>
import focusClean from 'theme/components/theme/directives/focusClean'
import ButtonFull from 'theme/components/theme/ButtonFull.vue'
import addToCart from 'core/components/AddToCart'
import { formatProductMessages } from 'core/filters/product-messages'

export default {
  mixins: [addToCart],
  directives: { focusClean },
  components: { ButtonFull },
  methods: {
    onAfterRemovedVariant () {
      this.$forceUpdate()
    },
    canBeAdded (product) {
      return formatProductMessages(product.errors) !== ''
    }
  },
  created () {
    this.$bus.$on('product-after-removevariant', this.onAfterRemovedVariant)
  },
  beforeDestroy () {
    this.$bus.$off('product-after-removevariant')
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
