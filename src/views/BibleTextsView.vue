<script lang="ts">
import Vue from 'vue'
import BibleTexts from '@/components/BibleTexts.vue'

export default Vue.extend({
  name: 'BibleTextsView',
  components: {
    BibleTexts,
  },
  data() {
    return {
      showInstructions: false,
    }
  },
})
</script>

<template>
  <b-container>
    <main>
      <h1 class="my-3">Bible Texts</h1>

      <div class="my-3">
        <b-button
            variant="dark"
            class="btn-block"
            @click="showInstructions = !showInstructions"
        >
          {{ showInstructions ? 'Hide' : 'Show' }} Instructions
        </b-button>
        <b-collapse id="instructions" v-model="showInstructions">
          <b-card class="mt-2">
            <b-card-text>
              <ol class="mb-0">
                <li>
                  In ChurchTeams, find the appropriate Bible Verse Texts group. Open the group, click on
                  <strong>Communicate</strong> &rarr; <strong>Text Message</strong> &rarr; <strong>Free Texting
                  via Email</strong> &rarr; <strong>Text via your Email</strong> &rarr; <strong>Confirm</strong>.
                </li>
                <li>
                  Once Outlook opens, copy all of the email addresses in the <strong>To</strong> field. Close the
                  Outlook window. Paste those email addresses into the <strong>Email Addresses</strong> field below.
                </li>
                <li>
                  Type the verse into the <strong>Verse</strong> field below. <em>Be sure to replace quotation marks
                  and apostrophes in the verse text if you copy it from somewhere.</em>
                </li>
                <li>
                  Click on each of the <strong>Send Batch #</strong> buttons that appear. For each one, once the Outlook
                  window opens, <em>change the value in the <strong>From</strong> field to office@faithfc.org</em>.
                </li>
              </ol>
            </b-card-text>
          </b-card>
        </b-collapse>
      </div>

      <bible-texts />
    </main>
  </b-container>
</template>