<template>
  <button
    :class="[
      'button',
      {
        'button_outline': outline,
      },
    ]"
  >
    <span class="button__text">{{ text }}</span>
    <slot name="icon"></slot>
  </button>
</template>

<script setup>

defineProps({
  text: {
    type: String,
    required: true,
  },
  outline: Boolean
});

</script>

<style lang="scss">

.button {
  border: none;
  border-radius: 8px;
  min-height: 53px;
  box-sizing: border-box;
  background-color: var(--c-text);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 42px;
  color: var(--c-filler);
  position: relative;
  cursor: pointer;

  &__text {
    display: block;
    @extend %button_l;
  }

  &__icon {
    position: absolute;
    top: calc(50% - 11px);
    right: 8px;
  }

  &:hover,
  &:active {
    background-color: var(--c-secondary);
    color: var(--c-text);
    border-color: var(--c-secondary);
  }

  &_outline {
    background-color: transparent;
    color: var(--c-text);
    border: 1px solid var(--c-text);
  }
}
</style>
