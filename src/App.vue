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

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Basic Example</div>
        <div class="text-subtitle2">Without Customization</div>
      </q-card-section>

      <q-card-section>
        <audio-recorder
          v-model="play"
          @audio-url="url = $event"
        />
      </q-card-section>
    </q-card>

    <audio-recorder
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
    </audio-recorder>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/quasar@1.11.1/dist/quasar.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/quasar@1.11.1/dist/lang/pt-br.umd.min.js"></script>

<script>
import AudioRecorder from './components/AudioRecorder'
// Quasar.lang.set(Quasar.lang.ptBr)
export default {
  name: 'App',

  components: {
    AudioRecorder
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
 @import "https://cdn.jsdelivr.net/npm/quasar@1.11.1/dist/quasar.min.css";
 @import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons";

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
