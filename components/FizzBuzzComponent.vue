<template>
  <div class="columns fizzbox">
    <div class="column">
    <h1 class="random_number">{{rand_int}}</h1>
    </div>
    <div class="column is-one-fifth">
    <br>
    </div>
    <div class="column">
      <h1 class="ml6">
        <span class="text-wrapper">
          <span id="fizzbuzz" class="letters">

          </span>
        </span>
      </h1>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
//import VueAnime from 'vue-animejs';

//Vue.use(VueAnime)


export default {
    data() {
        return {
            fizzbuzz: '',
            rand_int: 0
        }
    },
    mounted() {
        this.getFizzy();
    },
    methods: {
        convertToWord(num) {
            const ones = ['','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE']
            const tens = ['','','TWENTY','THIRTY','FOURTY','FIFTY','SIXTY','SEVENTY','EIGHTY','NINETY']
            const teens = ['','ELEVEN','TWELVE','THIRTEEN','FOURTEEN','FIFTEEN','SIXTEEN','SEVENTEEN','EIGHTEEN','NINETEEN']
            
            var num_word = '';
            if (num < 10 && num > 0) {
                num_word = ones[num];
            }
            else if (num > 10 && num < 20) {
                num_word = teens[num-10]
            }
            else if (num >= 20 && num < 100) {
                var num_string = num.toString().split('')
                if (num_string[1] == 0) {
                    num_word = tens[num_string[0]]
                }
                else {
                num_word = tens[num_string[0]] + '-' + ones[num_string[1]]
                }
            }
            else if (num == 10) {
                num_word = 'TEN'
            }
            else if (num == 0) {
                num_word = 'ZERO'
            }
            else {
                num_word = 'WUT'
            }
            return num_word
        },
        getFizzy() {
       
        var t = Math.round(Math.random() * (100 - 1) + 1);
        var number_word = this.convertToWord(t);
        this.rand_int = t;
        if (t % 3 == 0 && t % 5 == 0) {
            console.log("fizzbuzz")
            this.fizzbuzz = "FIZZBUZZ";
        } else if (t % 3 == 0) {
            console.log("fizz")
            this.fizzbuzz = "FIZZ";
        } else if (t % 5 == 0) {
            console.log("buzz")
            this.fizzbuzz = "BUZZ";
        } else {
            console.log(number_word)
            this.fizzbuzz = number_word;
        }
        this.getMoovy();
        },
        getMoovy() {
        var ref = this;
        var fizztext = this.fizzbuzz.toString();
        var textWrapper = document.querySelector('.ml6 .letters');
        textWrapper.innerHTML = fizztext.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        console.log('getMoovy:' + this.fizzbuzz)

        var animation = anime.timeline({
            loop: false
            }).add({
                targets: '.ml6 .letter',
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 750,
                delay: (el, i) => 50 * i
            }).add({
                targets: '.ml6',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000,
                complete: function (anim) {
                                animation.restart();
                                ref.getFizzy();
                            }
            });
        }
    }
}

</script>

<style>
.ml6 {
  position: relative;
  font-weight: 900;
  font-size: 3.3em;
}

.ml6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml6 .letter {
  display: inline-block;
  line-height: 1em;
}

.random_number {
    font-weight: 900;
    font-size: 3.3em;
}

.fizzbox {
    width:100%;
}
</style>
