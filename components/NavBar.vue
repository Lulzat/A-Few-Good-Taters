<template>
  <nav class="navbar fixed w-full bg-white dark:bg-gray-800 shadow"
  :class="{ 'navbar--hidden': !showNavbar }">
    <div class="container mx-auto px-6 py-3">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center">

          <a class="hidden md:flex items-center justify-center w-40 title-font mt-3 md:mb-0">
            <Taters />
          </a>


          <!-- Mobile menu button -->
          <div id="burger" @click.prevent="drawer" class="flex md:hidden" aria-label="Open Menu">
            <slot>
              <button type="button" class="burger-button" title="Menu">
                <span class="burger-bar burger-bar--1 bg-gray-600 hover:bg-green-700"></span>
                <span class="burger-bar burger-bar--2 bg-gray-600 hover:bg-green-700"></span>
                <span class="burger-bar burger-bar--3 bg-gray-600 hover:bg-green-700"></span>
              </button>
            </slot>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="hidden md:flex md:items-center md:justify-between flex-1">
          <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
            <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-green-700">Pricing</a>
            <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-green-700">Contact</a>
            <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-green-700">Services</a>
            <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-green-700">Now</a>
          </div>

          <div class="flex items-center mt-4 md:mt-0">
            <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
              <div class="h-8 w-8 overflow-hidden rounded-full border-2  border-gray-400">
                <img src="/GitHub-Mark-32px.png"
                  class="h-full w-full object-cover" alt="avatar">
              </div>
              <h3 class="mx-2 text-sm text-gray-700 dark:text-gray-200 font-medium md:hidden">Joshua Miller</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
