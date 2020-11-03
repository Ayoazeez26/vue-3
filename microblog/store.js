import { reactive, computed } from "vue"
import { testPosts } from "./testPosts.js"

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentHashtag: null
    })
  }

  get filteredPosts() {
    return computed(() => {
      let filtered = this.state.posts
      if (!this.state.currentHashtag) {
        return filtered
      }
      return filtered.filter(
        el => {
          const tags = el.hashtags.filter(item => item.includes(this.state.currentHashtag))
          return tags.length > 0
        })
    })

  }

  setHashtag(tag) {
    this.state.currentHashtag = tag
  }

  incrementLike(post) {
    const thePost = this.state.posts.find(x => x.id === post.id)
    if (!thePost) {
      return
    }
    thePost.likes += 1
  }
}

export const store = new Store()