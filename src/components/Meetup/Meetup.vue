<template>
  <v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card>
					<v-card-title primary-title>
							<h3 class="red--text">{{meetup.title}}</h3>
					</v-card-title>
					<v-card-media :src="meetup.imageUrl" height="400px">
					</v-card-media>
					<v-card-title primary-title>
						<div>
							<div class="blue--text">{{meetup.date}}</div>
							<div>{{meetup.desc}}</div>
						</div>
        	</v-card-title>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn flat class=" red darken-2 white--text">Register</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadMeetup(this.id)
    }
  }
}
</script>
