<script lang="ts">
import Vue from 'vue'
import { BIconBoxArrowUpRight } from 'bootstrap-vue'

function splitEmails(emailsStr: string) {
  let emails = emailsStr.split('; ')

  // Remove duplicates
  emails = emails.reduce((newArr: string[], email) => {
    if (!newArr.includes(email)) {
      newArr.push(email)
    }
    return newArr
  }, [])

  const vtextEmails = emails.filter((email) => email.includes('@vtext.com'))
  const otherEmails = emails.filter((email) => !email.includes('@vtext.com'))

  const groupedVtextEmails = []
  while (vtextEmails.length) {
    const nextGroup = []
    for (let i = 0; i < 10; i++) {
      const nextEmail = vtextEmails.shift()
      if (!nextEmail) break
      nextGroup.push(nextEmail)
    }
    if (!nextGroup.length) break
    groupedVtextEmails.push(nextGroup)
  }

  const vtextEmailsStrArray = groupedVtextEmails.map((group) => group.join(';'))
  const otherEmailsStr = otherEmails.join(';')

  const emailsArray = vtextEmailsStrArray.slice()
  if (otherEmailsStr.length > 0) {
    emailsArray.push(otherEmailsStr)
  }

  return emailsArray
}

export default Vue.extend({
  name: 'BibleTexts',
  components: {
    BIconBoxArrowUpRight,
  },
  data() {
    return {
      targetEmailsStr: '',
      verseText: '',
      clickedBatches: <number[]>[],
    }
  },
  computed: {
    emailCount() {
      return this.targetEmailsStr
          .split('; ')
          .filter((email) => email.trim().length > 0)
          .length
    },
    groupedEmails(): string[] {
      return splitEmails(this.targetEmailsStr)
    },
    isVerseInvalid() {
      return this.verseText.trim().length > 160
    },
  },
  methods: {
    encodeMailToLink(emailsStr: string) {
      const encodedBody = encodeURIComponent(this.verseText.trim())
      return `mailto:?bcc=${emailsStr}&body=${encodedBody}`
    },
    registerBatchClicked(batchIndex: number) {
      if (this.clickedBatches.includes(batchIndex)) return
      this.clickedBatches.push(batchIndex)
    },
  },
  watch: {
    targetEmailsStr() {
      this.clickedBatches = []
    },
  },
})
</script>

<template>
  <div>
    <div class="my-3">
      <h4>Verse</h4>
      <b-input
          v-model="verseText"
          class="mb-2"
          placeholder="Enter verse here"
          :state="isVerseInvalid ? false : null"
      />
      <p :class="{ 'text-danger': isVerseInvalid }">
        <strong>{{ verseText.trim().length }}</strong> characters
      </p>
    </div>

    <div class="my-3">
      <h4>Email Addresses</h4>
      <b-textarea
          v-model="targetEmailsStr"
          placeholder="Paste email addresses here"
          rows="15"
          class="mb-2"
      />
      <strong>{{ emailCount }}</strong> email addresses
    </div>

    <b-list-group
        v-if="emailCount > 0 && verseText.trim().length > 0 && !isVerseInvalid"
        class="my-3"
    >
      <b-list-group-item
          v-for="(emailGroup, i) in groupedEmails"
          :key="emailGroup"
          :href="encodeMailToLink(emailGroup)"
          @click="registerBatchClicked(i)"
          :variant="clickedBatches.includes(i) ? 'secondary' : undefined"
      >
        <b-icon-box-arrow-up-right /> Send Batch {{ i + 1 }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>