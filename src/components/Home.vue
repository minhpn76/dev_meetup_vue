<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-md-center">
        <v-btn large to="/meetups" class="blue darken-1 " dark>Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6  class="text-md-center">
        <v-btn large to="/meetup/new" class="blue darken-1" dark>Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item 
            v-for="meetup in meetups" 
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetUp(meetup.id)">
            <div class="title">
              <span class="text" @click="onLoadMeetUp(meetup.id)">{{meetup.title}}</span>
            </div>  
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-md-center">
        <p >Join Awesome!!!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  // data () {
  //   return {
  //     meetups: [
  //       { imageUrl: 'https://www.mumbailive.com/images/news/Time-Square-New-York-City-iStock-487537456-2_1511331164472.jpg?w=1368', id: 'asd12e12', title: 'Meetup in New York' },
  //       { imageUrl: 'https://i.ytimg.com/vi/q1EniN1oRvw/maxresdefault.jpg', id: '1231adas', title: 'Meetup in Paris' },
  //       { imageUrl: 'https://www.telegraph.co.uk/content/dam/video_previews/x/5/x5cgi0ode66q6vuxezqmehmexwer6bt-xlarge.jpg', id: 'vasdasd', title: 'Meetup in London' }
  //     ]
  //   }
  // },
  computed: {
    meetups () {
      return this.$store.getters.loadMeetups
    }
  },
  methods: {
    onLoadMeetUp (id) {
      this.$router.push('/meetup/' + id)
    }
  },
  name: 'Home'
}
</script>
<style scoped>
  .title{
    position: absolute;
    bottom: 75px;
    text-align: center;
    /* font-size: 50px; */
    color: #fff;
    width: 100%;
    
  }
  .text{
    font-weight: bold;
    background: #33333375;
    padding: 20px;
    margin: 0 auto;
  }

</style>
