<template>
  <aside
    :class="`${is_expanded ? 'is-expanded bg-dark-pink' : 'bg-dark-pink'}`"
  >
    <div class="logo">
      <img
        src="/logo/petcare.svg"
        alt="animal care center logo"
        class="logo-img"
      />
      <img src="/logo/acc-2.svg" alt="animal care center" class="logo-text" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle text-white" v-on:click="ToggleMenu">
        <i class="bi bi-arrow-right-square"></i>
      </button>
    </div>
    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="icon-button"><i class="bi bi-house"></i></span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <span class="icon-button"><i class="bi bi-file-earmark-text"></i></span>
        <span class="text">About</span>
      </router-link>
      <router-link class="button" to="/team">
        <span class="icon-button"><i class="bi bi-people"></i></span>
        <span class="text">Team</span>
      </router-link>
      <router-link class="button" to="/contact">
        <span class="icon-button"><i class="bi bi-envelope"></i></span>
        <span class="text">Contact</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="dropdown">
      <a
        href="#"
        class="d-flex align-items-center text-decoration-none dropdown-toggle text-white"
        id="dropdownUser2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="/img/woman-icon.png"
          alt=""
          width="35"
          height="35"
          class="rounded-circle me-2"
        />
        <div class="d-inline-block user-dropdown-info text-white w-100">
          <p class="name">Your Name Here</p>
          <p class="job-title">Web Developer</p>
        </div>
      </a>
      <ul
        class="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser2"
      >
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(false);

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;

  if (is_expanded.value == true) {
    setTimeout(function () {
      document.getElementsByClassName("logo-text")[0].style.opacity = 1;
      document.getElementsByClassName("logo-text")[0].style.display =
        "inline-block";
      document.getElementsByClassName("logo-text")[0].style.transition =
        "ease-in";
    }, 230);
  } else {
    document.getElementsByClassName("logo-text")[0].style.opacity = 0;
    document.getElementsByClassName("logo-text")[0].style.display = "none";
  }
};
</script>
