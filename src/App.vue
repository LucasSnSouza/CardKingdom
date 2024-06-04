<template>
  <div class="root-wrapper flex w-full h-full">
    <MiscMenubar/>
    <RouterView />
  </div>
</template>

<script>
  
import { RouterLink, RouterView } from 'vue-router'
import * as Misc from '@/components/Misc'

export default{
  components: {
    ...Misc,
  }
}
  
</script>


<style scoped>

</style>
