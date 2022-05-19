<template>this is chart</template>
<script lang="ts">
import { createContext, line, rect } from '@maple/sparrow'
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    const context = createContext(600, 600)
    const _line = rect(context, { x: 0, y: 0, width: 20, height: 40 })
    // const root = context.node
    document.body.appendChild(_line)
  },
})
</script>
