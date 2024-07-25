<template>
  <NuxtLink to="#" class="article">
    <article class="article__container">
      <NuxtImg :src="`./backgrounds/${img}`" alt="bg" class="article__bg"/>
      <div class="article__text">
        <h4 class="article__heading">
          {{ heading }}
        </h4>
        <div class="article__inner">
          <p class="article__description" v-if="text">
            {{ text }}
          </p>
          <span class="article__more-info">
            Подробнее
            <svg
              class="article__more-info-icon"
              viewBox="0 0 22 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1874 5.5V14.4375C17.1874 14.6198 17.115 14.7947 16.986 14.9236C16.8571 15.0526 16.6822 15.125 16.4999 15.125C16.3176 15.125 16.1427 15.0526 16.0138 14.9236C15.8848 14.7947 15.8124 14.6198 15.8124 14.4375V7.15945L5.9863 16.9864C5.8573 17.1154 5.68233 17.1879 5.49989 17.1879C5.31746 17.1879 5.14249 17.1154 5.01349 16.9864C4.88448 16.8574 4.81201 16.6824 4.81201 16.5C4.81201 16.3176 4.88448 16.1426 5.01349 16.0136L14.8404 6.1875H7.56239C7.38006 6.1875 7.20519 6.11507 7.07626 5.98614C6.94733 5.8572 6.87489 5.68234 6.87489 5.5C6.87489 5.31766 6.94733 5.1428 7.07626 5.01386C7.20519 4.88493 7.38006 4.8125 7.56239 4.8125H16.4999C16.6822 4.8125 16.8571 4.88493 16.986 5.01386C17.115 5.1428 17.1874 5.31766 17.1874 5.5Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>
<script setup>
defineProps({
  img: {
    type: String,
  },
  heading: {
    type: String,
  },
  text: {
    type: String,
  },
});
</script>
<style lang="scss">

.article {
  text-decoration: none;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(
    to top right,
    var(--c-gradient-start),
    var(--c-gradient-end)
  );

  &__container {
    width: 100%;
    display: flex;
    padding: 24px;
    box-sizing: border-box;
    position: relative;
    justify-content: space-between;
    align-items: end;
    max-width: 668px;
    min-height: 560px;
  }

  // 1 и 2 карточки большие, 3, 4, 5 маленькие. Повторяется каждые 5 карточек
  &:nth-child(5n + 3) &__container,
  &:nth-child(5n + 4) &__container,
  &:nth-child(5n + 5) &__container {
    flex-direction: column;
    justify-content: end;
    align-items: center;
    max-width: 437px;
    min-height: 370px;
  }

  &__container:hover &__bg {
    transform: scale(1);
    filter: brightness(50%);
    transition: 0.3s;
  }

  &__bg {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    transition: transform 0.3s;
    transform: scale(1.1);
  }

  &__text,
  &__external {
    z-index: 1;
    color: var(--c-text);
  }

  &__text {
    display: flex;
    flex-direction: column;
  }

  &:hover &__inner {
    max-height: 300px;
    transition: max-height 0.5s;
  }

  &__inner {
    max-height: 0;
    transition: max-height 0.3s;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    justify-content: space-between;
  }

  &:nth-child(5n + 3) &__inner,
  &:nth-child(5n + 4) &__inner,
  &:nth-child(5n + 5) &__inner {
    flex-direction: column;
  }

  &__heading {
    @extend %s2;
    margin: 0;
  }

  &__description {
    @extend %p4;
    margin: 24px 0 0;
    color: var(--c-text);
  }

  &__more-info {
    display: flex;
    margin: 24px 0 0;

    &-icon {
      width: 22px;
      height: 22px;
      fill: var(--c-text);
    }
  }
}

@media screen and (max-width: 1439px) {
  .article {
    &__container,
    &:nth-child(5n + 3) &__container,
    &:nth-child(5n + 4) &__container,
    &:nth-child(5n + 5) &__container {
      max-width: 100%;
      min-height: 560px;
    }

    &__inner {
      flex-direction: column;
    }

    &__text {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .article {
    &__container,
    &:nth-child(5n + 3) &__container,
    &:nth-child(5n + 4) &__container,
    &:nth-child(5n + 5) &__container {
      min-height: 470px;
    }
  }
}

@media screen and (max-width: 768px) {
  .article {
    &__container,
    &:nth-child(5n + 3) &__container,
    &:nth-child(5n + 4) &__container,
    &:nth-child(5n + 5) &__container {
      min-height: 370px;
    }
  }
}

@media screen and (max-width: 668px) {
  .article {
    &__container,
    &:nth-child(5n + 3) &__container,
    &:nth-child(5n + 4) &__container,
    &:nth-child(5n + 5) &__container {
      min-height: 460px;
    }
  }
}

@media screen and (max-width: 540px) {
  .article {
    &__container,
    &:nth-child(5n + 3) &__container,
    &:nth-child(5n + 4) &__container,
    &:nth-child(5n + 5) &__container {
      min-height: 370px;
    }
  }
}

@media screen and (max-width: 360px) {
  .article {
    &__container,
    &:nth-child(5n + 3) &__container,
    &:nth-child(5n + 4) &__container,
    &:nth-child(5n + 5) &__container {
      max-width: 100%;
      min-height: 274px;
    }
  }
}
</style>
