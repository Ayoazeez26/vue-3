<template>
  <div>
    <button @click="increment">{{ count }}</button>
    <button @click="a++">{{ a }}</button>
    <button @click="b++">{{ b }}</button>
    <div
      :key="msg"
      v-for="msg in history"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script>
import { useNumbers } from './numbers'
export default {
  setup() {
    const {
      history,
      increment,
      count,
      a,
      b
    } = useNumbers()

    return {
      history,
      increment,
      a,
      b,
      count
    }
  }
}
</script>