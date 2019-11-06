<template>
 <v-container>
   <v-layout row wrap>
     <v-flex xs12>
      <v-card class="info mb-4" v-for="meetup in meetups" :key="meetup.id">
        <v-container fluid>
          <v-layout row>
            <v-flex xs5>
              <v-card-media :src="meetup.imageUrl" height="130px" >
              </v-card-media>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title lighten>
                <div>
                  <h3 class="white--text mb-0">{{meetup.title}}</h3>
                  <div>{{meetup.date}}</div>
                </div>
               
              </v-card-title>
              <v-card-actions>
                <v-btn flat :to="'/meetup/' + meetup.id">
                  <v-icon  left light >arrow_forward</v-icon>
                  View Meetup</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>  
      </v-card>
     </v-flex>
   </v-layout>
 </v-container>
</template>

<script>
export default {
  name: 'Meeups',
  computed: {
    meetups () {
      return this.$store.getters.loadMeetups
    }
  }
}
</script>

<style scoped>
  .info{
    float: left;
    width: 100%;
  }
</style>

