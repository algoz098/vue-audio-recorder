
# audio-recorder

A Lightweight Vue Component for Audio recording
Examples: https://algoz098.github.io/vue-audio-recorder/
  
## Install

```
npm i --save @algoz098/audio-recorder

import AudioRecorder from '@algoz098/audio-recorder'

Vue.use(AudioRecorder)

```

## Basic syntax
Use `v-model`to control to start and stop the recording
```

<audio-recorder
	v-model="play"
></audio-recorder>

```
## API
### Slots:
Default: replaces all content for a custom one
### Events:
@input: true/false
@seconds: number, how many seconds has been recorded
@time-passed: string, how many seconds has been recorded formated as mm:ss
@audio-blob: blog, emitted when recorded stoped, emit the audio blob recorded
@audio-url: string, emitted when recorded stoped, emit the url for the audio recorded