<template>
  <div class="container" ref="container"></div>
</template>
<script lang="ts">
import { createContext, rect } from '@maple/sparrow'
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    const context: Context = createContext(600, 600)
    const rectEle = rect(context, {
      x: 0,
      y: 0,
      width: 20,
      height: 40,
      fill: 'red',
    })
    this.$refs.container.appendChild(context.node)
  },
})
</script>
