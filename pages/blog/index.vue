<template>
<!--<h1>Blog Postings</h1>
<li v-for="post of posts" :key="post.slug">
  <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
</li>-->
<div class="w-screen bg-gray-100 overflow-x-hidden mt-16">
     <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
            <div class="w-full">
                <div class="flex items-center justify-between">
                    <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Posts</h1>
                </div>
                <ul>
                  <li v-for="post of posts" :key="post.slug">
                    <PostPreview :post="post" />
                  </li> 
                </ul>            
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
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