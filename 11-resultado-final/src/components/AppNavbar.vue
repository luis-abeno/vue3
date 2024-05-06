<template>
  <div class="nav-wrapper">
    <div class="container">
      <nav class="nav">
        <div class="flex gap-2">
          <ul class="mr-8">
            <li class="nav__item body-large">
              <router-link to="/" class="nav__link text-base font-medium">Home</router-link>
            </li>
            <li class="nav__item body-large">
              <router-link to="/products" class="nav__link text-base font-medium"
                >Produtos</router-link
              >
            </li>
            <li class="nav__item body-large">
              <router-link to="/admin" class="nav__link text-base font-medium">Admin</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-wrapper {
  background-color: color-mix(in srgb, var(--background), transparent 40%);
  width: 100%;

  &.scrolled {
    background-color: var(--background);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
}

.nav {
  padding: 0.5rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--on-background);

  &__theme {
    display: flex;
    gap: 1rem;

    .material-symbols-outlined {
      position: relative;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        border-radius: 50%;
        background: radial-gradient(circle at center, var(--tertiary), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover::before {
        opacity: 0.6;
      }
    }
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  &__item {
    list-style: none;
  }

  &__link {
    text-decoration: underline;
    color: var(--on-background);
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--tertiary);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
}
</style>
