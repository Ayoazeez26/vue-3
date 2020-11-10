<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <slot name="header" />
      </div>
      <div class="main">
        <div class="sidebar">
          <slot name="sidebar" />
        </div>
        <div class="content">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
}

.header {
  height: 50px;
}

.main {
  height: calc(100vh - 50px);
  display: flex;
  border-top: 2px solid silver;
}

.sidebar {
  width: 300px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 300px;
  border-right: 2px solid silver;
  padding: 10px;
}
</style>