<template>
  <div class="home" :style="computedStyle">
    <div class="title">{{title}}</div>
    <audio :src="src" autoplay controls @ended="change"></audio>
  </div>
</template>

<script>
// @ is an alias to /src
// import Xgplayer from 'xgplayer-vue'
import axios from '@/http'

export default {
  name: 'home',
  data () {
    return {
      title: '',
      src: 'https://api.comments.hk/music/287035',
      background: ''
    }
  },
  computed: {
    computedStyle () {
      return {
        backgroundImage: `url(${this.background})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  methods: {
    handlePlay () {
    },
    change () {
      axios.get('/random_music').then(res => {
        let data = (res && res.data) || {}
        if (data && data.mp3_url) {
          this.src = data.mp3_url
          this.title = data.title
          this.background = data.images
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.change()
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
  }
</style>
