<template>
  <div class="breadcrumbs">
    <span v-for="link in routes" :key="link.route_link">
      <router-link :to="localizedRoute(link.route_link)" class="link">
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

.breadcrumbs {
  @apply .text-grey-darker .pt-10 .pb-5;
}
.breadcrumbs .link:hover {
  @apply .underline;
}

@tailwind utilities;

</style>
