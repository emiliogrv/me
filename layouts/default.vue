<template>
  <v-theme-provider root>
    <v-app>
      <v-main>
        <v-container class="fill-height">
          <Nuxt />
        </v-container>
      </v-main>

      <v-footer>
        <v-row
          justify="center"
          no-gutters
        >
          <v-btn
            href="https://github.com/emiliogrv/me"
            icon
            target="_blank"
          >
            <v-icon> mdi-file-code-outline </v-icon>
          </v-btn>
        </v-row>
      </v-footer>
    </v-app>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
