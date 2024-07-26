<template>
  <section class="slide">
    <NuxtImg
      class="slide__bg"
      :src="`./backgrounds/${image}`"
      alt="slider background"
    />
    <div class="container slide__container">
      <div class="slide__text">
        <h2 class="slide__heading">{{ heading }}</h2>
        <p class="slide__description">{{ description }}</p>
      </div>
      <ul class="slide__list">
        <li 
          v-for="(link, index) in links" :key="index" 
          class="slide__item"
        >
          <NuxtLink 
            @mouseover="iconColor = 'var(--c-secondary)'"
            @mouseleave="iconColor = 'var(--c-text-elements)'"
            class="link slide__link" 
            to="#" 
          >
            {{ link }}
          </NuxtLink>
          <IconBase
            class="slide__link-icon"
            :width="22"
            :height="22"
            :iconColor="iconColor"
            :iconName="'Arrow Up Right'"
          >
            <IconArrowUpRight />
          </IconBase>
        </li>
      </ul>
      <IconBase
        class="slide__indicator-icon"
        :width="22"
        :height="22"
        :iconColor="'var(--c-text-elements)'"
        :iconName="'Slide indicator'"
      >
        <IconDoubleArrowDown />
      </IconBase>
    </div>
  </section>
</template>

<script setup>

let iconColor = ref('var(--c-text-elements)');

defineProps({
  links: {
    type: Array,
  },
  image: {
    type: String,
    default: () => '/backgrounds/slider_bg_1.png',
  },
  heading: {
    type: String,
  },
  description: {
    type: String,
  },
});

</script>

<style lang="scss">

.slide {
  position: relative;
  height: 100%;

  &__bg {
    position: absolute;
    top: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &__container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: end;
    padding-bottom: 40px;
    box-sizing: border-box;
    gap: 24px;
  }

  &__text {
    max-width: 668px;
    z-index: 1;
  }

  &__heading {
    @extend %h1;
    color: var(--c-text);
    margin: 0 0 24px;
  }

  &__description {
    @extend %p3;
    color: var(--c-text);
    margin: 0;
    width: 85%;
  }

  &__list {
    margin: 0 20px 0 0;
    padding: 0;
    max-width: 417px;
    width: 100%;
    list-style-type: none;
    z-index: 1;
  }

  &__item {
    padding: 12px 0;
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    border-top: 1px solid var(--c-text-elements);
    box-sizing: border-box;

    &:last-child {
      border-bottom: 1px solid var(--c-text-elements);
    }
  }

  &__link {
    @extend %s3;
    color: var(--c-text);
    text-decoration: none;

    &-icon {
      position: relative;
      top: -1px;
      left: 3px;
    }

    &:hover {
      color: var(--c-secondary);
      transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__link:hover ~ &__link-icon {
    fill: var(--c-secondary);
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__indicator-icon {
    display: none;
  }
}

@keyframes moveDown {
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(10px);
  }
}

@media screen and (max-width: 768px) {
  .slide {
    &__container {
      flex-direction: column;
      justify-content: end;
      align-items: center;
      padding-bottom: 22px;
      gap: 0;
    }

    &__text {
      max-width: 100%;
    }

    &__description {
      display: none;
    }

    &__list {
      margin: 0;
    }

    &__item {
      justify-content: start;
    }

    &__indicator-icon {
      display: block;
      z-index: 1;
      animation: moveDown 2s infinite;
      position: relative;
      bottom: -12px;
    }
  }
}
</style>
