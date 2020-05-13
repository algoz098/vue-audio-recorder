<template>
  <m-card
    title="Basic Example"
    subtitle="Without Customization"
    :html="html"
  >
    <audio-recorder
      v-model="play"
      @audio-url="url = $event"
    />

    @audio-url: {{ url }}
  </m-card>
</template>

<script>
import mCard from './MCard'
import AudioRecorder from '../components/AudioRecorder'

const html = `<audio-recorder
  v-model="play"
  @audio-url="url = $event"
/>`

export default {
  components: {
    mCard,
    AudioRecorder
  },

  data () {
    return {
      html,
      play: false,
      url: ''
    }
  }
}
</script>

<style>

</style>