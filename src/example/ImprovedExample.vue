<template>
  <m-card
    title="Customized Example"
    subtitle="A example with it's contents customized"
    :html="html"
  >
    <div>
      <audio-recorder
        v-model="play"
        @audio-url="url = $event"
        @time-passed="timePassed = $event"
      >
        <q-btn
          v-if="!play"
          round
          dense
          flat
          icon="fas fa-microphone"
          @click="play = !play"
        />

        <div
          v-else
        >
          <q-btn
            round
            dense
            flat
            color="positive"
            icon="fas fa-check"
            @click="play = !play"
          />

          <q-btn
            dense
            flat
            disabled
            :label="timePassed"
          />
        </div>
      </audio-recorder>
    </div>

    @audio-url: {{ url }}<br>

    Player: 
    <audio
      v-if="url"
      controls
      :src="url"
    />
  </m-card>
</template>

<script>
import mCard from './MCard'
import AudioRecorder from '../components/AudioRecorder'

const html = `<audio-recorder
  v-model="play"
  @audio-url="url = $event"
  @time-passed="timePassed = $event"
>
  <q-btn
    v-if="!play"
    round
    dense
    flat
    icon="fas fa-microphone"
    @click="play = !play"
  />

  <div
    v-else
  >
    <q-btn
      round
      dense
      flat
      color="positive"
      icon="fas fa-check"
      @click="play = !play"
    />

    <q-btn
      dense
      flat
      disabled
      :label="timePassed"
    />
  </div>
</audio-recorder>
</div>`

export default {
  components: {
    mCard,
    AudioRecorder
  },

  data () {
    return {
      html,
      timePassed: '00:00',
      play: false,
      url: ''
    }
  }
}
</script>

<style>

</style>