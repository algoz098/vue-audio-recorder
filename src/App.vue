<template>
  <div id="app">
    <div>
      <h1 class="q-my-md">
        Audio-recorder
      </h1>

      <p>
        A Lightweight Vue Component for Audio recording
      </p>
    </div>

    <basic-example />
    <improved-example />

    <!-- <audio-recorder
      v-model="play"
      @audio-url="url = $event"
    >
      <button @click="play = !play">
        CUSTOM PLAY
      </button>

      {{ play }}

      <audio
        v-if="url"
        controls
        :src="url"
      />

      {{ url }}
    </audio-recorder> -->
  </div>
</template>

<script>
import BasicExample from './example/BasicExample'
import ImprovedExample from './example/ImprovedExample'
export default {
  name: 'App',

  components: {
    BasicExample,
    ImprovedExample
  },

  data () {
    return {
      play: false,
      url: ''
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  font-size: 50px;
  line-height: 1;
}

</style>
