<template>
  <header :class="{ 'navbar--hidden': !showNavbar }"
    class="navbar flex items-center fixed p-3 z-50 w-full flex body-font justify-between md:justify-between p-1">
    <a href="/" class="flex items-center justify-center">
      <h1 :class="scrolled ? 'scroll-text' : ''" class=" text-2xl tracking-widest logo-text">Taters.</h1>
    </a>
    <a id="burger" :class="isOpen ? 'toggled' : ''" class=" transition duration-500 ease-in-out transform target-burger"
      @click.prevent="drawer" aria-label="Open Menu">
      <ul class="buns">
        <li class="bun"></li>
        <li class="bun"></li>
      </ul>
      <!--buns-->
    </a>

    <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
      leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
      <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 h-screen fixed inset-0 transition-opacity">
        <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
      </div>
    </transition>
    <aside
      class="transform h-screen top-0 left-0 w-64 bg-gray-50 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-tater-blue hover:text-white"><span
          class="mr-2">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
            </path>
          </svg>
        </span>
        <span><a href="/">Home</a></span></span>
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-tater-blue hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
        </span>
        <span><a href="/#projects">Projects</a></span></span>
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-tater-blue hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </span>
        <span><a href="/blog">Blog</a></span></span>
    </aside>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        scrolled: false,
        showNavbar: true,
        lastScrollPosition: 0
      };
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 0;
      },
      drawer() {
        this.isOpen = !this.isOpen;
      },
      onScroll() {
        // Get the current scroll position
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition < 0) {
          return
        } // Here we determine whether we need to show or hide the navbar
        this.showNavbar = currentScrollPosition < this.lastScrollPosition // Set the current scroll position as the last scroll position
        this.lastScrollPosition = currentScrollPosition
      }
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
          }
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    }
  };
</script>
<style scoped>
  .navbar {
    transform: translate3d(0, 0, 0);
    transition: all .2s ease-in;
  }

  .navbar.navbar--hidden {
    opacity: 0;
    visibility: hidden;
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
    transition: all 400ms;
  }

  /* remove blue outline */
  button:focus {
    outline: 0;
  }

  .burger-button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 90;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6s cubic-bezier(.165, .84, .44, 1);
  }

  .burger-bar {
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .6s cubic-bezier(.165, .84, .44, 1), opacity .3s cubic-bezier(.165, .84, .44, 1), background-color .6s cubic-bezier(.165, .84, .44, 1);
    background-color: #535353
  }

  .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  .burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
  }

  .burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
    background-color: #d94848;
  }

  .no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
    background-color: #d94848;

  }

  .burger-bar--3 {
    transform: translateY(6px);
  }

  #burger.active .burger-button {
    transform: rotate(-180deg);
  }

  #burger.active .burger-bar--1 {
    transform: rotate(45deg)
  }

  #burger.active .burger-bar--2 {
    opacity: 0;
  }

  #burger.active .burger-bar--3 {
    transform: rotate(-45deg)
  }

  .scroll {
    transition: all .2s ease-in;
  }

  .logo-text {
    padding: 0.25rem;
    font-family: Bitter;
    letter-spacing: .5rem;
    padding-left: 0.5rem;
    color: #ffffff;
  }

  .logo-text:hover {
    color: #ff4343;
  }

  .nav-links {
    padding: .25rem;
    width: 6rem;
    display: flex;
    justify-content: center;
    font-family: calendas_plusregular;
    letter-spacing: .25rem;
    color: #ffffff;
    ;
  }

  .nav-links:hover {
    color: #ff4343;
  
  }

  .po-tay-toes {
    background-color: #535353;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7));
  }

  .target-burger {
    margin: 1.125em;
    width: 3.250em;
    height: 3.250em;
    display: block;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .target-burger:hover {
    cursor: pointer;
    -webkit-opacity: 0.45;
    -moz-opacity: 0.45;
    opacity: 0.45;
  }

  a.target-burger.toggled ul.buns li.bun {
    -webkit-transform: rotate(45deg) translateZ(0);
    transform: rotate(45deg) translateZ(0);
  }

  a.target-burger.toggled ul.buns li.bun:last-child {
    -webkit-transform: rotate(-45deg) translateZ(0);
    transform: rotate(-45deg) translateZ(0);
  }

  .buns {
    width: 1.625em;
    height: 1.625em;
    list-style: none;
    margin: -0.8125em 0 0 -0.8125em;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    color: #fff;
  }

  .bun {
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    margin-top: -0.75px;
    -webkit-transform: translateY(-3.75px) translateZ(0);
    transform: translateY(-3.75px) translateZ(0);
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1), background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .bun:last-child {
    -webkit-transform: translateY(3.75px) translateZ(0);
    transform: translateY(3.75px) translateZ(0);
  }
</style>