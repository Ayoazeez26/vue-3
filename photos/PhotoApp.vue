<template>
  <div>
    <layout>
      <template v-slot:header>
        Header
      </template>
      <template v-slot:sidebar>
        <album
          v-for="album in albums"
          :key="album.id"
          :album="album"
        />
      </template>
      <template v-slot:content>
        <router-view />
      </template>
    </layout>
  </div>
</template>

<script>
import Layout from './Layout.vue'
import Album from './Album.vue'
export default {
  components: {
    Layout,
    Album
  },

  async created() {
    this.$store.dispatch('albums/fetchAlbums')
  },

  computed: {
    currentAlbumPhotos() {
      return this.$store.state.photos.currentAlbumPhotos
    },
    albums() {
      return this.$store.state.albums.all
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>