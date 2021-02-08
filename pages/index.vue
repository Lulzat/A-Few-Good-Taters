<template>
  <div class=" w-full bg-white-200 font-sans leading-normal">
    <div class="section-container">
      <section class="flex h-screen w-full justify-center md:items-center pt-32 lg:pt-16 lg:mb-40">
        <div
          class="flex flex-col items-center text-center justify-center w-60 lg:w-1/3 h-104 bg-top lg:bg-bottom bg-fixed bg-contain lg:bg-cover lg:bg-center hero-wrapper">
          <div class="taters-wrapper w-screen relative">
            <h1
              class="taters-knockout font-taters text-7vw lg:text-4vw text-cyber-red tracking-pretty-wide lg:tracking-super-wide">
              What We Need</h1>
          </div>
        </div>
      </section>

      <section class="skews w-full text-gray-700 body-font">
        <div class="container mx-auto lg:px-4 lg:pb-16">
          <div class="container mx-auto pt-36 lg:px-4">
            <div class="flex flex-col w-full mb-12 text-center">
              <div
                class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-blue-800 bg-gray-200 rounded-full">
                <Taters />
              </div>
              <h1 class="mb-6 text-2xl font-archia tracking-tighter text-white sm:text-7xl who-are-taters">
                A Few Good Taters
              </h1>
              <p class="mx-auto text-base font-inter leading-relaxed text-white lg:w-1/2">The 'tater is simple. The 'tater is simple, yet despite it's simplicity this starchy root vegetable is packed full of vitamins & minerals and is versatile in its varied ways it can be prepared: Mashed, Fried, Boiled and stuck in a stew. I believe in simplicity, when the rest of the world has only gotten more complicated. This site is home to my thoughts as well as my simple web development experiments. Also, who doesn't love 'taters?</p>
            </div>
          </div>
        </div>
      </section>

      <section class="skews-white w-full text-gray-700 body-font">
        <div class="container mx-auto lg:px-4 lg:pb-16">
          <div class="container mx-auto pt-36 lg:px-4">
            <div class="flex flex-col w-full mb-12 items-center text-center">
              <EsvLogo />
              <h1 class="mb-6 mt-6 text-4xl font-archia tracking-tighter text-tater-red votd-header">
                Daily Bible Verse
              </h1>
              <div class="verse-wrapper">
              <DailyVerse />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-screen bg-gray-50 text-gray-700 body-font">
        <h1 class="mb-6 mt-6 text-center text-4xl font-archia tracking-tighter text-tater-red posts-header">
          Recent Posts:
        </h1>
        <div class="px-8 py-6 w-auto">
          <ul>
            <li v-for="post of posts" :key="post.slug">
              <PostPreview :post="post" />
            </li> 
          </ul>
        </div>
      </section>
      <section id="projects" class="w-screen bg-gray-50 text-gray-700 body-font mt-20 projects">
        <div class="py-6 w-auto">
          <h1 class="mb-6 mt-6 text-center text-4xl font-archia tracking-tighter text-tater-red posts-header">
          Projects:
        </h1>
          <div class="p-6 rounded-md bg-blueGray-200">
            <img class="object-cover object-center w-full h-40 mb-6 rounded" src="/fizzbuzz-icon.png"
              alt="FizzBuzz Image">
            <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">Fizzy.vue
            </h2>
            <p class="mb-4 text-base leading-relaxed">A Vue.js Implementation of the Classic FizzBuzz Test</p>
            <a href="/Fizzy"
              class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
              Check it out!
              <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section class="mx-auto">
        <div class="container px-5 mx-auto lg:px-16 lg:py-24">
          <div class="flex flex-col items-center w-full pt-8 flex-grow text-center pb-1 border-b-2">
            <h1
              class="flex items-center text-2xl font-bold tracking-wide text-center text-blue-800 lg:text-2xl title-font">
              The Tech That I <svg class="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </h1>
          </div>
          <div class="grid grid-cols-3 gap-16 my-16 text-center lg:grid-cols-6">
            <div class="flex justify-center ">
              <img src="/Logos/Vue/Vue-JS-01.svg" alt="Vue.js" class="block object-contain h-52">
            </div>
            <div class="flex justify-center ">
              <img src="/Logos/Python/Python-01.svg" alt="Python" class="block object-contain h-52">
            </div>
            <div class="flex justify-center ">
              <img src="/Logos/Microsoft/Microsoft-Dotnet-01.svg" alt="DotNet" class="block object-contain h-52">
            </div>
            <div class="flex justify-center ">
              <img src="/Logos/MSSQL/Microsoft-sql-server-01.svg" alt="MSSQL" class="block object-contain h-52">
            </div>
            <div class="flex justify-center ">
              <img src="/Logos/Netlify/Netlify-01.svg" alt="Netlify" class="block object-contain h-52">
            </div>
            <div class="flex justify-center ">
              <img src="/Logos/Tailwindcss/Tailwindcss-wordmark-01.svg" alt="Tailwindcss"
                class="block object-contain h-52">
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
            <p>Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), copyright ©
              2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.
              You may not copy or download more than 500 consecutive verses of the ESV Bible or more than one half of
              any book of the ESV Bible.</p>
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
  export default {
    head() {
      return {
        script: [{
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }],
      };
    },
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    async asyncData({
      $content
    }) {
      const posts = await $content("blog").fetch();

      return {
        posts,
      };
    },
  };
</script>

<style scoped>
  .color-title {
    color: rgb(130, 46, 46);
    text-shadow: 4px 3px 2px rgba(11, 34, 8, 0.7);
    font-size: 7em;
  }

  .hero-wrapper {
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('/Tater-Farming.jpg');
    /*box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.5);*/
    filter: invert();
  }

  .taters-wrapper {
    mix-blend-mode: luminosity;
    white-space: nowrap;
    background-color: rgba(101,255,212,.57);
    transform: rotate(4deg);
  }

  .taters-knockout {
    color: rgb(255, 0, 0);
  }

  .who-are-taters {
    text-shadow: 2px 2px 0px rgba(56, 113, 187, 0.57);
  }

  .verse-wrapper {
    font-size: 2rem;
    font-family: Inter;
    color: rgb(45, 58, 68);
    border-bottom: solid .25rem rgb(213, 140, 140);
    padding: 2rem;
  }

  .votd-header {
    color: rgb(45, 58, 68);
    text-shadow: 2px 2px 0px rgba(187, 56, 56, 0.57);
    border-bottom: solid .25rem rgb(213, 140, 140);
  }
  
  .posts-header {
    color: rgb(45, 58, 68);
    text-shadow: 2px 2px 0px rgba(187, 56, 56, 0.57);
  }

  .projects {
    background-color: rgb(187, 56, 56)
  }

  /*------------------*/
  /*  SKEW CLOCKWISE  */
  /*------------------*/

  .section-container {
    overflow: hidden;
  }

  .skews {
    width: 100%;
    position: relative;
    background: #100e0b;
    padding: 20px;
    z-index: 1;
  }

  .skews::before {
    content: '';
    position: absolute;
    top: 0;
    left: -25%;
    z-index: -1;
    width: 130%;
    height: 75%;
    transform: rotate(-4deg);
    transform-origin: 0 0;
    background-color: #100e0b;
    /*box-shadow: inset 0px 5px 10px rgba(0,0,0,0.3)*/
  }
  
  .skews-white {
    width: 100%;
    position: relative;
    padding: 20px;
    z-index: 1;
  }

  .skews-white::before {
    content: '';
    position: absolute;
    top: 0;
    left: -25%;
    z-index: -1;
    width: 130%;
    height: 75%;
    transform: rotate(-4deg);
    transform-origin: 0 0;
    background-color: rgb(249, 250, 251);
    /*box-shadow: inset 0px 5px 10px rgba(0,0,0,0.3)*/
  }
</style>