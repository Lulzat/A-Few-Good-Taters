<template>
  <div class=" w-screen bg-white-200 font-sans leading-normal">
    <div class="">
      <section class="outer-container flex md:items-center pt-16">
        <div class="flex flex-col w-full mb-12 lg:text-center">
          <h1 class="color-title text-center text-6xl mb-6 font-semibold md:tracking-superwide font-title animate__animated animate__pulse">
            A Few Good
            <br class="">
            Taters.
          </h1>
        </div>
      </section>
      <!--Lead Card-->
      <section class="text-gray-700 body-font pt-16">
        <div class="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
          <div class="md:hidden flex justify-center w-5/6 lg:max-w-lg lg:w-full md:w-1/2 md:p-16">
            <Taters />
          </div>
          <div
            class="flex flex-col items-center w-full pt-8 mb-4 flex-grow text-center">
            <h1
              class="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-2xl title-font">
              A pretty long length display headline ready to convert visitors into users.
            </h1>
            <p class="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-1xl">
              Deploy
              your mvp in
              minutes, not days. WT offers you a a wide selection swapable sections for your landing page.You
              are going to have
              fun building it, I did.
            </p>
            <p class="flex items-center mb-2 text-gray-600"><span
                class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              Ain't no sunshine when she's gone.
            </p>
            <p class="flex items-center mb-2 text-gray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              Expensive feature.
            </p>
            <p class="flex items-center mb-6 text-gray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              Really good feauture.
            </p>
          </div>
        </div>
      </section>
      <!--/Lead Card-->

      <section id="Projects" class="text-gray-700 body-font">
        <div class="container px-8 mx-auto lg:px-4">
          <div class="flex flex-wrap justify-center text-left">
            <div
            class="flex flex-col items-center w-full pt-8 flex-grow text-center pb-1 border-b-2">
            <h1
              class="text-2xl font-bold tracking-wide text-center text-blue-800 lg:text-2xl title-font">
              Projects
            </h1>
            </div>
            
            <div class="px-8 py-6 lg:w-1/3 md:w-full">
              <div class="p-6 rounded-md bg-blueGray-200">
                <img class="object-cover object-center w-full h-40 mb-6 rounded"
                  src="/fizzbuzz-icon.png" alt="FizzBuzz Image">
                <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">Fizzy.vue
                </h2>
                <p class="mb-4 text-base leading-relaxed">A Vue.js Implementation of the Classic FizzBuzz Test</p>
                <a href="/Fizzy"
                  class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                  Check it out!
                  <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                    height="20" fill="currentColor">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="mx-auto">
        <div class="container px-5 mx-auto lg:px-16 lg:py-24">
            <div
            class="flex flex-col items-center w-full pt-8 flex-grow text-center pb-1 border-b-2">
            <h1
              class="flex items-center text-2xl font-bold tracking-wide text-center text-blue-800 lg:text-2xl title-font">
              The Tech That I  <svg class="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
            </h1>
            </div>
          <div class="grid grid-cols-3 gap-16 my-16 text-center lg:grid-cols-6">
            <div class="flex justify-center ">
              <img
                src="/Logos/Vue/Vue-JS-01.svg"
                alt="Vue.js" class="block object-contain h-52">
            </div>
            <div class="flex justify-center ">
              <img
                src="/Logos/Python/Python-01.svg"
                alt="Python" class="block object-contain h-52">
            </div>
            <div class="flex justify-center ">
              <img
                src="/Logos/Microsoft/Microsoft-Dotnet-01.svg"
                alt="DotNet" class="block object-contain h-52">
            </div>
            <div class="flex justify-center ">
              <img
                src="/Logos/MSSQL/Microsoft-sql-server-01.svg"
                alt="MSSQL" class="block object-contain h-52">
            </div>
            <div class="flex justify-center ">
              <img
                src="/Logos/Netlify/Netlify-01.svg"
                alt="Netlify" class="block object-contain h-52">
            </div>
            <div class="flex justify-center ">
              <img
                src="/Logos/Tailwindcss/Tailwindcss-wordmark-01.svg"
                alt="Tailwindcss" class="block object-contain h-52">
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer class="mt-16 text-gray-700 bg-white border-t body-font">
      <div class="border-t border-gray-200">
        <div class="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row">
          <a class="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-0">

          </a>
          <div class="flex flex-wrap items-center justify-center mx-auto text-base md:ml-auto md:mr-auto">
            <a href="#Projects" class="justify-center mr-5 text-sm text-center text-gray-600 hover:text-gray-800">
              Projects</a>
            <a href="#" class="justify-center mr-5 text-sm text-center text-gray-600 hover:text-gray-800">
              Contact</a>
            <a href="#" class="justify-center mr-5 text-sm text-center text-gray-600 hover:text-gray-800">
              Services</a>
            <a href="#" class="justify-center mr-5 text-sm text-center text-gray-600 hover:text-gray-800">
              About</a>
          </div>
          <div class="inline-flex items-center justify-center md:justify-start ">
            <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a class="text-blue-807 hover:text-blue-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-4 text-blue-870 hover:text-blue-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
              <a class="ml-4 text-blue-870 hover:text-blue-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import 'animate.css';

export default {}
</script>

<style scoped>
    .outer-container {
        background-image: url("/falling-taters.jpg");
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        height: 100vh;
    }

    .color-title {
        color: rgb(37, 149, 97);
        text-shadow: 4px 3px 2px rgba(11, 34, 8, 0.7);
        font-size:7em;
    }

    .color-subtitle {
      color: rgb(37, 149, 97);
    }

</style>