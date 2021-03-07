<template>
  <div class=" w-full bg-white-200 font-sans leading-normal">
    <div class="section-container">
      <section class="flex flex-col h-screen w-full justify-center items-center pt-32 lg:pt-16">
        <div
          class="flex flex-col items-center text-center justify-center w-60 lg:w-1/3 lg:mt-12 h-104 bg-top lg:bg-bottom bg-contain lg:bg-cover lg:bg-center hero-wrapper">
          <div class="taters-wrapper w-screen relative">
            <h1
              class="taters-knockout font-archia text-7vw lg:text-4vw text-cyber-red tracking-pretty-wide lg:tracking-super-wide">
              {{this.dailyVerse}}</h1>
          </div>
        </div>
        <div class="verse-wrapper">
          <DailyVerse @dailyVerse="dailyVerseValue" />
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
    data() {
      return {
        dailyVerse: 'John 3:17'
      }
    },
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    methods: {
      dailyVerseValue: function (params) {
        this.dailyVerse = params;
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
    background-size: cover;
    background-position: center;
    width: 80%;
    position: relative;
    height: 50vh;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.51), hsla(0, 0%, 31.8%, 0.65)), url('/tater-farming.jpg');
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, .3));
  }

  .taters-wrapper {
    white-space: nowrap;
    padding: 0rem;
    mix-blend-mode: color-dodge;
  }

  .taters-knockout {
    font-family: calendas_plusregular;
    font-weight: bold;
    background-color: #535353;
    color: #d94848;
  }

  .who-are-taters {
    text-shadow: 2px 2px 0px rgba(56, 113, 187, 0.57);
  }

  .verse-wrapper {
    font-size: 2rem;
    font-family: Inter;
    color: rgb(45, 58, 68);
    padding: 3rem;
  }

  .votd-header {
    color: rgb(45, 58, 68);
    text-shadow: 2px 2px 0px rgba(187, 56, 56, 0.57);
    border-bottom: solid .25rem rgb(213, 140, 140);
  }

  .posts-header {
    color: rgb(248, 252, 255);
    font-family: calendas_plusregular;
  }

  .projects {
    background-color: rgb(187, 56, 56)
  }

  .post-post-div {
    background-color: #2b2b2b;
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
    background: #373737;
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
    background: #373737;
    /*box-shadow: inset 0px 5px 10px rgba(0,0,0,0.3)*/
  }

  .custom-shape-divider-top-1613438750 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .shape-fill {
    fill: #f9fafb;
  }
</style>