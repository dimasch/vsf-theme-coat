<template>
  <button-full class="tocart" @click.native="addToCart(product)" :disabled="canBeAdded(product)" data-testid="addToCart">
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

.tocart {
    @apply .min-w_250 .border-none .w-full .riple .text-white .bg-cl-mine-shaft .no-outline .block .cursor-pointer .font-normal .text_18 .px-10 .py-5;
}
.tocart:hover {
    @apply .bg-grey-darkest;
}

@tailwind utilities;
.min-w_250{
  min-width: 250px;
}
.no-outline{
outline: 0;
}
.bg-cl-mine-shaft{
  background-color: #333;
}
.riple{
      position: relative;
    overflow: hidden;
}
.text_18{
  font-size: 18px;
}

</style>
