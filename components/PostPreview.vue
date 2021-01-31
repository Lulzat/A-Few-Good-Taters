<template>
<!--<h1>Blog Postings</h1>
<li v-for="post of posts" :key="post.slug">
  <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
</li>-->

    <div class="flex mt-6 justify-center">
        <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
            <div class="flex justify-between items-center"><span class="font-light text-gray-600">{{ post.date }}</span>
            </div>
            <div class="mt-2"><NuxtLink :to="'blog/'+post.slug" class="text-2xl text-gray-700 font-bold hover:underline">{{ post.title }}</NuxtLink>
                <p class="mt-2 text-gray-600">{{ post.description }}</p>
            </div>
            <div class="flex justify-between items-center mt-4"><NuxtLink :to="'blog/'+post.slug"
                    class="text-blue-500 hover:underline">Read more</NuxtLink>
                <div><a href="#" class="flex items-center"><img
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            alt="avatar" class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block">
                        <h1 class="text-gray-700 font-bold hover:underline">{{ post.author }}</h1>
                    </a></div>
            </div>
        </div>
    </div>                
</template>

<script>
export default {
  props: {
    post: {
      type: String,
      required: false,
    }
  }
}
</script>