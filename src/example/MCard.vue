<template>
  <q-card class="q-my-sm">
    <q-card-section>
      <div class="text-h6">
        {{ title }}
      </div>
      <div class="text-subtitle2">
        {{ subtitle }}
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row">
        <div class="col">
          <slot />
        </div>

        <div class="col bg-grey-10 text-white q-px-md" style="max-height: 300px; overflow-y: auto">
          <pre><code class="language-html">{{ html }}</code></pre>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    title: { default: '', type: String },
    subtitle: { default: '', type: String },
    html: { default: '', type: String }
  }

}
</script>

<style>

</style>