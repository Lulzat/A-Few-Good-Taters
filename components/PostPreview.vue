<template>
  <div class="text-lg text-white">
    <NuxtLink :to="'blog/'+post.slug" class="post-header">{{ post.title }}</NuxtLink>
    <p class="mt-4">{{ post.description }}</p>
    <p>{{post.date}}</p>
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

<style>
  .post-wrapper {
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5)
  }

  .post-header {
    font-size: 1.5rem;
    background-color: #d94848;
    padding: .5rem;
    border-radius: 1px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  }

  .post-header:hover {
    background-color: #f9fafb;
    border: 1px solid #d94848;
    color: #d94848;
  }
</style>