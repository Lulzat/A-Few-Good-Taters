<template>
  <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
    <div class="md:flex flex-1 justify-between items-center">
      <div class="taters-div">
      <Taters/>
      </div>
    </div>
    <!--<label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg></label>
    <input class="hidden" type="checkbox" id="menu-toggle" />-->
    <Burger @clicked="toggle"/>

    <div v-if="clicked" id="sidebar" :class="{ 'active animate__animated animate__bounceInRight' : !isOpen, 'active animate__animated animate__bounceOutRight' : isOpen }" class="fixed h-screen w-screen bg-red-300">MEEP</div>
    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
          <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
              href="/FizzBuzz">Features</a></li>
          <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
              href="#">Pricing</a></li>
          <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
              href="#">Documentation</a></li>
          <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
              href="#">Support</a></li>
        </ul>
      </nav>
      <a href="www.github.com/lulzat" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
        <img class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
          src="GitHub-Mark-64px.png" alt="github">
      </a>
    </div>
  </header>
</template>
<script>
import Burger from './Burger'
import 'animate.css'
export default {
  name: 'SweetHeader',
  components: {
    Burger
  },
  data() {
    return {
      isOpen: false,
      clicked: false
    }
  },
  methods: {
    toggle(value) {
      this.clicked = true,
      this.isOpen = value
      console.log(value)
    }
  }
}
</script>

<style>
    .header {
        padding: 20px;
        background-color: rgb(210, 174, 29);
        margin-bottom: 0px;
    }

    .page-title {
      font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
        display: block;
        font-weight: 300;
        font-size: 2.5em;
        color: #35495e;
        letter-spacing: 1px;
    }

</style>
