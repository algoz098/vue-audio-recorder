<template>
  <div
    v-if="loaded"
    class="__audio-recorder"
  >
    <slot />

    <div v-if="!$slots.default">
      <button @click="start">
        Start
      </button>
      <button @click="stop">
        Stop
      </button>

      <span v-if="recording">
        {{ timePassed }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioRecorder',

  props: {
    value: {
      type: Boolean
    }
  },

  data () {
    return {
      loaded: true,
      recording: false,
      mediaRecorder: null,
      audioChunks: [],

      counter: null,
      timePassed: '00:00',
      seconds: 0
    }
  },

  watch: {
    value (aft) {
      if (aft) this.start()
      else this.stop()
    }
  },

  created () {
    if (this.value) this.load()
  },

  methods: {
    load () {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          this.mediaRecorder = new MediaRecorder(stream)
          this.audioChunks = []

          this.mediaRecorder.addEventListener("dataavailable", event => {
            this.audioChunks.push(event.data);
          })

          this.mediaRecorder.addEventListener("stop", this.handleStop)
          this.start()
        })
    },

    start () {
      if (!this.mediaRecorder) return this.load()
      this.recording = true
      this.mediaRecorder.start()
      this.$emit('input', true)

      this.counter = setInterval(this.handleInterval, 1000)
    },

    stop () {
      this.recording = false
      this.mediaRecorder.stop()
      clearInterval(this.counter)
    },

    handleInterval () {
      this.seconds++
      this.timePassed = new Date(this.seconds * 1000).toISOString().substr(14, 5)
      this.$emit('seconds', this.seconds)
      this.$emit('time-passed', this.timePassed)
    },

    handleStop () {
      const audioBlob = new Blob(this.audioChunks)
      const audioUrl = URL.createObjectURL(audioBlob)

      this.$emit('input', false)
      this.$emit('audio-blob', audioBlob)
      this.$emit('audio-url', audioUrl)
    }
  }
}
</script>

<style>
</style>
