<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <v-layout column>
          <v-list light>
            <v-list-tile
              v-for="(item, index) in ourFiles"
              :key="index"
              avatar
              @click="download(item)"
            >
              <v-list-tile-avatar>
                <v-icon class="blue white--text">assignment</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.fileName }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.fileSize }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon ripple @click="info(item)">
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-layout>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
