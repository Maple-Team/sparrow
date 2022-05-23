<template>
  <div class="container" ref="container"></div>
</template>
<script lang="ts">
import { createContext, rect } from '@liutsing/sparrow'
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    const context  = createContext(600, 600)

    rect(context, {
      x: 0,
      y: 0,
      width: 20,
      height: 40,
      fill: 'red',
    })

    ;
    (this.$refs.container as HTMLDivElement).appendChild(context.node)
  },
})
</script>
