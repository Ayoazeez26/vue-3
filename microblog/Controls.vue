<template>
  <div>
    <div class="like">
      <button @click="like">
        Like
      </button>
      <div>
        {{ post.likes }}
      </div>
    </div>
    <hashtag
      v-for="tag in post.hashtags"
      :key="tag"
      :hashtag="tag"
    />
  </div>
</template>

<script>
import Hashtag from "./Hashtag.vue";
import { store } from './store'

export default {
  components: { Hashtag },
  props: {
    post: {
      type: Object
    }
  },
  setup(props) {
    const like = () => {
      store.incrementLike(props.post)
    }

    return {
      like
    }
  }
}
</script>

<style scoped>
.like {
  display: flex;
  justify-content: center;
  margin: 10px;
}
</style>