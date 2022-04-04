<template>
  <v-col class="text-center">
    <h1>
      {{ error.statusCode }}
    </h1>

    <h2>
      {{ error.statusCode === 404 ? pageNotFound : otherError }}
    </h2>

    <NuxtLink to="/">
      Home
    </NuxtLink>
  </v-col>
</template>

<script>
export default {
  name: 'ErrorLayout',

  props: {
    error: {
      type: Object,
      default: null
    }
  },

  data () {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred'
    }
  },

  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError

    return {
      title,
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          crossorigin: true,
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-family: 'Roboto Mono', monospace;
}
</style>
