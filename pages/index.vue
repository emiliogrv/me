<template>
  <v-row
    align-content="center"
    class="fill-height"
    justify="center"
    no-gutters
  >
    <v-col class="text-center">
      <img
        alt="EmilioGRV"
        class="mb-3 rounded-circle"
        src="https://avatars.githubusercontent.com/u/13983577"
      >

      <p class="headline">
        Emilio Romero
      </p>

      <p>Senior Software Engineer</p>

      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          href="https://www.linkedin.com/in/emiliogrv/"
          icon
          target="_blank"
        >
          <v-icon large>
            mdi-linkedin
          </v-icon>
        </v-btn>

        <v-btn
          href="https://github.com/emiliogrv"
          icon
          target="_blank"
        >
          <v-icon large>
            mdi-github
          </v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
img {
  width: 200px;
}
</style>
