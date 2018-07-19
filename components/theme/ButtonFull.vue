<template>
  <component
    :is="link ? 'router-link' : 'button'"
    :type="!link ? type : false"
    :to="localizedRoute(link)"
    class="button-full"
    :class="{ 'no-underline pointer align-center border-box': link, 'disabled': disabled }"
  >
    <slot>
      Button
    </slot>
  </component>
</template>

<script>
import focusClean from 'theme/components/theme/directives/focusClean'
export default {
  name: 'ButtonFull',
  directives: { focusClean },
  props: {
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    link: {
      type: Object,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>

@tailwind preflight;

.button-full {
    @apply .min-w_250 .border-none .w-full .riple .text-white .bg-cl-mine-shaft .no-outline .block .cursor-pointer .font-normal .text_18 .px-10 .py-5;
}
.button-full:hover {
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
