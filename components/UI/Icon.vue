<template>
    <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
  >
    <title
      :id="iconName"
      lang="en"
    >
      {{ iconName }} icon
    </title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
<script setup>
const icon = reactive({
  width: '20px',
  height: '20px',
  fill: 'none',
})
</script>
<style lang="scss"></style>