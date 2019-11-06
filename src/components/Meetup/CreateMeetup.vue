<template>
  <v-container>
    <v-layout row>
      <v-flex  sm6 offset-sm3>
        <h2 class="red--text">Create Meet Up</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex x12>
        <form action="" @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                required
                v-model="title"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                required
                v-model="location"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image Url"
                id="imageUrl"
                required
                v-model="imageUrl"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex sm6 offset-sm3>
              <img :src="imageUrl" height="300px">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                required
                v-model="description"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex sm6 offset-sm3>
              <h4>Choose time date</h4>
            </v-flex>
          </v-layout>
          <!-- <v-layout row>
            <v-flex sm6 offset-sm3 >
              <v-date-picker v-model="date"></v-date-picker>
              <p>{{date}}</p>
            </v-flex>
          </v-layout>
           <v-layout row  class="mt-2">
            <v-flex sm6 offset-sm3>
              <v-time-picker v-model="time"></v-time-picker>
              <p>{{time}}</p>
            </v-flex>
          </v-layout> -->

          <v-layout row>
            <v-flex sm6 offset-sm3>
              <v-spacer></v-spacer>
              <v-btn flat class="red white--text" :disabled="!formIsVaild" type="submit">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'CreateMeetup',
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: ''
      // date: new Date(),
      // time: new Date()
    }
  },
  computed: {
    formIsVaild () {
      return this.title !== '' &&
        this.location !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
    }
    // submittableDateTime () {
    //   const date = new Date(this.data)
    //   if (typeof this.time === 'string') {
    //     const hours = this.time.match(/^(\d+)/[1])
    //   }
    //   else {
    //     date.setHours(this.time.getHours())
    //     date.setMinutes(this.time.getMinutes())
    //   }
    // }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsVaild) {
        return
      }
      const data = {
        title: this.title,
        location: this.title,
        imageUrl: this.location,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createMeetup', data)
      this.$router.push('/meetups')
    }
  }
}
</script>
