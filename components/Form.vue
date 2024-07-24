<template>
  <form action="#" class="form">
    <div class="form__text">
      <div class="form__field">
        <label
          for="name"
          class="form__label"
          :class="{ form__label_focused: state.userName }"
          >Ваше имя*</label
        >
        <input
          type="text"
          class="form__input"
          :class="{ form__input_focused: state.userName }"
          name="name"
          id="name"
          v-model="state.userName"
        />
        <div class="form__error" v-if="v$.userName.$error">
          Это поле обязательно
        </div>
      </div>
      <div class="form__field">
        <label
          for="phone"
          class="form__label"
          :class="{ form__label_focused: state.userPhone }"
          >Телефон*</label
        >
        <input
          type="number"
          class="form__input"
          :class="{ form__input_focused: state.userPhone }"
          name="phone"
          id="phone"
          v-model="state.userPhone"
        />
        <div class="form__error" v-if="v$.userPhone.$error">
          Это поле обязательно
        </div>
      </div>
      <div class="form__field">
        <label
          for="textarea"
          class="form__label"
          :class="{ form__label_focused: state.userText }"
          >Расскажите нам о своем проекте</label
        >
        <input
          type="text"
          class="form__input"
          :class="{ form__input_focused: state.userText }"
          name="textarea"
          id="textarea"
          v-model="state.userText"
        />
      </div>
      <div class="form__agreement">
        <input
          type="checkbox"
          class="form__checkbox"
          name="checkbox"
          id="checkbox"
          v-model="state.userCheckbox"
        />
        <label for="checkbox" class="form__agreement-label"
          >Я соглашаюсь с Политикой Конфиденциальности сайта</label
        >
        <div class="form__error" v-if="v$.userCheckbox.$error">
          Необходимо поставить галочку
        </div>
      </div>
    </div>
    <Button
      class="form__button"
      @click.prevent="submitForm"
      :text="'Отправить'"
    />
  </form>
</template>
<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, sameAs } from '@vuelidate/validators';

const state = reactive({
  userName: '',
  userPhone: '',
  userText: '',
  userCheckbox: false,
});

const rules = computed(() => {
  return {
    userName: { required },
    userPhone: { required },
    userCheckbox: { required, sameAs: sameAs(true) },
  };
});

const v$ = useVuelidate(rules, state);

const submitForm = async () => {
  await v$.value.$validate();
};
</script>
<style lang="scss">

.form {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 24px;
  z-index: 1;

  &__text {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  &__field {
    position: relative;
    max-width: 322px;
    width: 100%;
  }

  &__label {
    @extend %p5;
    color: var(--c-text-elements);
    position: absolute;
    top: 20px;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &_focused {
      top: 0;
      color: var(--c-secondary);
    }
  }

  &__input {
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
      @extend %p5;
      color: var(--c-text-elements);
    }

    &_focused {
      border-color: var(--c-secondary);
    }
  }

  &__input:focus {
    border-bottom: 1px solid var(--c-secondary);
  }

  &__field:focus-within &__label {
    top: 0;
    color: var(--c-secondary);
  }

  &__agreement {
    &-label {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: start;
      @extend %p5;
      color: var(--c-text-elements);

      &::before {
        content: '';
        display: block;
        margin: 0 12px 0 0;
        width: 18px;
        height: 18px;
        border: 1px solid var(--c-text);
        border-radius: 2px;
        box-sizing: border-box;
        transition-duration: 0.3s;
        cursor: pointer;
      }
    }
  }

  &__checkbox {
    display: none;
  }

  &__checkbox:checked + &__agreement-label::before {
    background-image: url('../assets/img/icons/Check.svg');
    background-color: var(--c-secondary);
    border-color: var(--c-secondary);
  }

  &__button {
    border: none;
    cursor: pointer;
    padding: 16px 118px;
    max-width: 322px;
    width: 100%;
  }

  &__error {
    @extend %err;
    color: var(--c-error);
    position: absolute;
    margin: 2px 0 0;
  }
}

@media screen and (max-width: 1439px) {
  .form {
    flex-direction: column;

    &__text {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1093px) {
  .form {
    &__text {
      justify-content: space-between;
    }

    &__field {
      max-width: calc(50% - 24px);

      &:nth-child(3) {
        max-width: 100%;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .form {
    &__button {
      max-width: 100%;
    }

    &__field {
      max-width: 100%;
    }

    &__text {
      margin: 0;
    }

    &__agreement-label {
      display: inline-block;
      width: 100%;

      &::before {
        float: left;
      }
    }
  }
}

@media screen and (max-width: 360px) {
  .form {
    flex-direction: column;

    &__checkbox:checked + &__agreement-label::before {
      background-image: url('../assets/img/icons/Check_alternative.svg');
      background-position: -1px -1px;
      background-color: var(--c-text);
      color: transparent;
      border-color: var(--c-text);
    }
  }
}
</style>
