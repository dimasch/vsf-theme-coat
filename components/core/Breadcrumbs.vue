<template>
  <div class="breadcrumbs h5 cl-gray bread">
    <span v-for="link in routes" :key="link.route_link">
      <router-link :to="localizedRoute(link.route_link)">
        {{ link.name | htmlDecode }}
      </router-link> /
    </span>
    <span class="cl-mine-shaft">
      {{ activeRoute | htmlDecode }}
    </span>
  </div>
</template>

<script>
import Breadcrumbs from 'core/components/Breadcrumbs'

export default {
  mixins: [Breadcrumbs]
}
</script>

<style scoped>

@tailwind preflight;

.bread {
  @apply .bg-grey-light .text-red .flex .text-4xl;
}

@tailwind utilities;

</style>
