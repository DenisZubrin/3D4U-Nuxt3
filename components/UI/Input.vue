<template>
  <div class="input">
    <label 
      v-if="label" 
      class="input__label" 
      :for="id"
    >
      {{ label }}
    </label>
    <input
      v-model="model"
      class="input__field"
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
    />
    <div 
      v-if="error" 
      class="input__error"
    >
      {{ errorText }}
    </div>
  </div>
</template>

<script setup>

defineProps({
  type: {
    type: String,
    default: 'text',
  },
  id: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
  },
  placeholder: String,
  error: [String, Number],
  errorText: {
    type: String,
    default: 'Проверьте правильность данных',
  },
});

const model = defineModel();

</script>

<style lang="scss">

.input {
  position: relative;
  max-width: 322px;
  width: 100%;

  &__label {
    @extend %p5;
    color: var(--c-text-elements);
    position: absolute;
    top: 24px;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &_focused {
      top: 0;
      color: var(--c-secondary);
    }
  }

  &__field {
    width: 100%;
    background: inherit;
    outline: none;
    @extend %s4;
    color: var(--c-text);
    border: none;
    border-bottom: 1px solid var(--c-text);
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 20px 0 12px;
    box-sizing: border-box;

    &::placeholder {
      opacity: 0;
      @extend %p5;
      color: var(--c-text-elements);
      transition: 0.3s;
    }

    &_focused {
      border-color: var(--c-secondary);
    }
  }

  &__field:focus {
    border-bottom: 1px solid var(--c-secondary);

    &::placeholder {
      opacity: 1;
    }
  }

  &:focus-within &__label {
    top: 0;
    color: var(--c-secondary);
  }

  &__error {
    @extend %err;
    color: var(--c-error);
    position: absolute;
    margin: 2px 0 0;
  }

  // Префиксы для разных типов input

  &__field[type='number']::-webkit-outer-spin-button,
  &__field[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &__field[type='number'],
  &__field[type='number']:hover,
  &__field[type='number']:focus {
    appearance: none;
    -moz-appearance: textfield;
  }
}

@media screen and (max-width: 540px) {
  .input {
    &__label,
    &:focus-within &__label {
      top: 0;
      color: var(--c-text);
    }

    &__field:focus {
      border-bottom: 1px solid var(--c-text);
    }

    &__field::placeholder {
      opacity: 1;
    }
  }
}
</style>
