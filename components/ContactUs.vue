<template>
  <section class="contact-us">
    <NuxtImg
      class="contact-us__background"
      src="./backgrounds/contact_us_bg_wide.png"
      alt="bg"
    />
    <div class="contact-us__container container">
      <div class="contact-us__text">
        <h2 class="contact-us__heading">Свяжитесь с нами</h2>
        <p class="contact-us__description">
          Расскажите нам о своем проекте, мы рады сотрудничеству!
        </p>
      </div>
      <Form class="form contact-us__form" />
      <a class="contact-us__link-to-top" href="#main-screen">
        <svg
          class="contact-us__arrow-top-icon"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M6.47015 13.47L15.4702 4.47C15.6108 4.32955 15.8014 4.25066 16.0002 4.25066C16.1989 4.25066 16.3895 4.32955 16.5302 4.47L25.5302 13.47C25.6626 13.6122 25.7348 13.8002 25.7313 13.9945C25.7279 14.1888 25.6492 14.3742 25.5118 14.5116C25.3744 14.649 25.189 14.7277 24.9947 14.7312C24.8004 14.7346 24.6123 14.6625 24.4702 14.53L16.7502 6.81125L16.7502 27C16.7502 27.1989 16.6711 27.3897 16.5305 27.5303C16.3898 27.671 16.1991 27.75 16.0002 27.75C15.8012 27.75 15.6105 27.671 15.4698 27.5303C15.3292 27.3897 15.2502 27.1989 15.2502 27L15.2502 6.81125L7.53015 14.53C7.38798 14.6625 7.19993 14.7346 7.00563 14.7312C6.81133 14.7277 6.62594 14.649 6.48853 14.5116C6.35112 14.3742 6.2724 14.1888 6.26898 13.9945C6.26555 13.8002 6.33767 13.6122 6.47015 13.47Z"
            />
          </g>
        </svg>
      </a>
    </div>
  </section>
</template>
<script setup>

</script>
<style lang="scss">

.contact-us {
  position: relative;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 0;
    filter: brightness(30%);
  }

  &__container {
    padding-top: 85.5px;
    padding-bottom: 85.5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  &__text {
    z-index: 1;
  }

  &__heading {
    margin: 0 0 24px;
    @extend %h1;
    color: var(--c-text);
  }

  &__description {
    margin: 0 0 48px;
    @extend %p4;
    color: var(--c-text);
  }

  &__link-to-top {
    position: absolute;
    bottom: 24px;
    right: 40px;
  }

  &__arrow-top-icon {
    width: 32px;
    height: 32px;
    fill: var(--c-text);

    &:hover {
      fill: var(secondary);
    }
  }
}

@media screen and (max-width: 768px) {
  .contact-us {
    &__container {
      padding: 60px 32px;
    }

    &__link-to-top {
      right: 16px;
    }
  }
}

</style>
