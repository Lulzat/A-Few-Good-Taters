
<template>
  <header class="navbar fixed z-50 w-full flex bg-transparent body-font justify-end md:justify-between mdjustify-center p-4" :class="{ 'navbar--hidden': !showNavbar }">
      <a href="/" class="hidden md:flex items-center justify-center w-40 title-font mt-3 md:mb-0">
        <Taters />
      </a>
      <nav class="hidden md:flex flex-wrap items-center justify-center text-base md:ml-auto justify-center">
        <a href="#Projects" class="mr-5 text-sm font-semibold text-gray-600 hover:text-green-700">Projects</a>
        <a href="/blog" class="mr-5 text-sm font-semibold text-gray-600 hover:text-green-700">Blog</a>
        <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-green-700">Services</a>
        <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-green-700">Now</a>
      </nav>
      <div id="burger" @click.prevent="drawer"
        class="justify-end items-center py-1 font-semibold transition duration-500 ease-in-out transform lg:inline-flex lg:mt-px"
        aria-label="Open Menu">
        <slot>
          <button type="button" class="burger-button" title="Menu">
            <span class="burger-bar burger-bar--1 bg-gray-600 hover:bg-green-700"></span>
            <span class="burger-bar burger-bar--2 bg-gray-600 hover:bg-green-700"></span>
            <span class="burger-bar burger-bar--3 bg-gray-600 hover:bg-green-700"></span>
          </button>
        </slot>
    </div>



    <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
      leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
      <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 h-screen fixed inset-0 transition-opacity">
        <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
      </div>
    </transition>
    <aside
      class="transform h-screen top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
        <Taters />
      </span>
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
            </path>
          </svg>
        </span>
        <span>Home</span></span>
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-tater-blue hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
        </span>
        <span>Trending Globally</span></span>
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-tater-blue hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </span>
        <span>Wishlist</span></span>
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-tater-blue hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </span>
        <span>About</span></span>
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-tater-blue hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
            </path>
          </svg>
        </span>
        <span>Contact</span></span>
      <div class="fixed bottom-0 w-full">
        <button class="flex items-center p-4 text-white bg-tater-green hover:bg-tater-blue w-full">
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
            viewBox="0 0 24 24" class="h-6 w-6 mr-2">
            <path
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">
            </path>
          </svg>
          <span>Share</span>
        </button>
      </div>
    </aside>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      } // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
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
    document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
      },
      window.addEventListener('scroll', this.onScroll)
    );
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  }
};
</script>
<style scoped>

    .navbar {
      transform: translate3d(0, 0, 0);
      transition: all 100ms;
    }

    .navbar.navbar--hidden {
        opacity: 0;
        visibility: hidden;
      box-shadow: none;
      transform: translate3d(0, -100%, 0);
      transition: all 200ms;
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
    }

    .burger-bar--1 {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }

    .burger-bar--2 {
      transform-origin: 100% 50%;
      transform: scaleX(.8);
    }

    .burger-button:hover .burger-bar {
      background-color: rgb(37, 149, 97);
    }
    .burger-button:hover .burger-bar--2 {
      transform: scaleX(1);
    }

    .no-touchevents .burger-bar--2:hover {
      transform: scaleX(1);
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

</style>
