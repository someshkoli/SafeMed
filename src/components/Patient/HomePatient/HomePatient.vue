<template>
  <v-container>
    <v-layout column>
      <router-link to="/search">
        <v-text-field readonly label="Search" solo append-icon="search"></v-text-field>
      </router-link>

      <v-carousel height="200" hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="slide-x-transition"
          transition="slide-x-transition"
        ></v-carousel-item>
      </v-carousel>

      <v-card class="recommendations my-3">
        <h1 style="color: white;" class="text-xs-center py-5">Recommendations</h1>
      </v-card>

      <v-card class="categoriesHeader mb-3">
        <h2 style="color: white;" class="text-xs-center py-3">Browse by category:</h2>
      </v-card>

      <v-layout>
          <v-layout row wrap>
            <v-flex v-for="n in 9" :key="n" xs6>
              <v-card flat tile class="pa-1">
                <v-img
                  :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="230px"
                ></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.test {
  background-color: black;
}

.recommendations {
  background-color: black;
  height: 20vh;
}

.categoriesHeader {
  background-color: black;
  height: 8vh;
}
</style>