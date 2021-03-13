<template>
  <v-app>
    <v-main class="black">
      <v-row
        align-content="center"
        class="fill-height"
        justify="center"
        no-gutters
      >
        <v-col class="text-center white--text">
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
              <v-icon
                color="white"
                large
              >
                mdi-linkedin
              </v-icon>
            </v-btn>

            <v-btn
              href="https://github.com/emiliogrv"
              icon
              target="_blank"
            >
              <v-icon
                color="white"
                large
              >
                mdi-github
              </v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-main>

    <v-footer class="black">
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          href="https://github.com/emiliogrv/me"
          icon
          target="_blank"
        >
          <v-icon color="white">
            mdi-file-code-outline
          </v-icon>
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  overflow: auto !important;
}

img {
  width: 200px;
}
</style>
