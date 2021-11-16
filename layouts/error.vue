<template>
  <v-col>
    <v-row
      justify="center"
      no-gutters
    >
      <h1>
        {{ error.statusCode }}
      </h1>
    </v-row>

    <v-row
      justify="center"
      no-gutters
    >
      <h2>
        {{ error.statusCode === 404 ? pageNotFound : otherError }}
      </h2>
    </v-row>

    <v-row
      justify="center"
      no-gutters
    >
      <NuxtLink to="/">
        Home
      </NuxtLink>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'ErrorLayout',

  layout: 'empty',

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
          crossorigin: true,
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap'
        }
      ]
    }
  }
}
</script>
