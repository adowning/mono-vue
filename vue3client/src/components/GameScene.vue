<script setup lang="ts">
import { Scene, Container, Rectangle, Text } from 'phavuer'
import { ref } from 'vue'
      const count = ref(1)
    const onClick = () => count.value++
</script>
<template>
    <Scene name="GameScene">
      <Text @pointerdown="onClick" text="Add a Rectangle" />
      <Container v-for="(n, i) in count" :key="i" :x="i * 130" :y="30">
        <Rectangle :width="120" :height="30" :origin="0" :fillColor="0x333333" />
        <Text :x="60" :y="15" :origin="0.5" :text="`Rectangle-${n}`" />
        <!-- <MyCustomComponent /> -->
      </Container>
    </Scene>
  </template>
  
