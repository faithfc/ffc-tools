<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ActivityTrackerView',
  mounted() {
    window.addEventListener('keydown', this.handleKeyPress)
    this.focusActivityInput()
  },
  destroyed() {
    window.removeEventListener('keydown', this.handleKeyPress)
  },
  data() {
    return {
      readyForKeyEntry: true,
      form: {
        activity: '',
      },
    }
  },
  methods: {
    handleKeyPress(event: KeyboardEvent) {
      if (!this.readyForKeyEntry) return
      if (event.key === 'Enter') {
        const isFormFocused = document.activeElement && document.activeElement.classList.contains('is-form-element')
        if (!isFormFocused) {
          this.focusActivityInput()
        }
      }
    },
    focusActivityInput() {
      (this.$refs.activity as HTMLElement).focus()
    },
  },
})
</script>

<template>
  <b-container>
    <main>
      <h1 class="my-3">Activity Tracker</h1>

      <div class="my-3">
        <h4>Activity</h4>
        <b-input
            ref="activity"
            v-model="form.activity"
            class="mb-2 is-form-element"
            placeholder="Enter activity description"
            tabindex="10"
        />
      </div>

      <div tabindex="100" @focus="focusActivityInput"></div>
    </main>
  </b-container>
</template>