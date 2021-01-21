<template>
    <div>
        <div v-if="this.data"> 
            <div class="content" v-html="this.data.passages[0]">
            </div>         
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
data() {
    return {
        data: [],
    }
},
components: {
},
methods: {
    search() {
    //this.randomVerse = this.verses[Math.floor(Math.random() * this.verses.length)];
    //const url = `/.netlify/functions/searchPassage?passage=${this.randomVerse}`;
    const url = `/.netlify/functions/getDailyVerse`;
    Vue.axios.get(
        url).then(response => {
        console.log(response)
        this.data = response.data
    }).catch(error => {
        this.data = {
             "passages": [
        "<h2 class=\"extra_text\">John 3:16 <small class=\"audio extra_text\">(<a class=\"mp3link\" href=\"https://audio.esv.org/hw/43003016-43003016.mp3\" title=\"John 3:16\" type=\"audio/mpeg\">Listen</a>)</small></h2>\n<h3 id=\"p43003016_01-1\">For God So Loved the World</h3>\n<p id=\"p43003016_07-1\"><b class=\"verse-num woc\" id=\"v43003016-1\">16&nbsp;</b><span class=\"woc\">“For God so loved the world,<sup class=\"footnote\"><a class=\"fn\" href=\"#f1-1\" id=\"fb1-1\" title=\"&lt;note class=&quot;alternative&quot;&gt;Or &lt;i&gt;&lt;span class=&quot;catch-word&quot;&gt;For&lt;/span&gt; this is how God loved the world&lt;/i&gt;&lt;/note&gt;\">1</a></sup> that he gave his only Son, that whoever believes in him should not perish but have eternal life.</span></p>\n<div class=\"footnotes extra_text\">\n<h3>Footnotes</h3>\n<p><span class=\"footnote\"><a href=\"#fb1-1\" id=\"f1-1\">[1]</a></span> <span class=\"footnote-ref\">3:16</span> <note class=\"alternative\">Or <i><span class=\"catch-word\">For</span> this is how God loved the world</i></note>\n</p>\n</div>\n<p>(<a href=\"http://www.esv.org\" class=\"copyright\">ESV</a>)</p>"
        ]
        }
    })
    }
},
beforeMount() {
    this.search();
}
}
</script>

<style>

</style>