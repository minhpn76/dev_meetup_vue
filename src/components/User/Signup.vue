<template>
  <v-container>
    <v-layout row>
      <v-flex sm12>
        <v-card>
          <v-card-text>
            <v-container>
              <v-layout row>
                <v-flex sm6 offset-sm3>
                  <h3 sm6 offset-sm3>Sign Up</h3>
                </v-flex>
              </v-layout>
              <form @submit.prevent="onSubmit">
                <v-layout row>
                  <v-flex sm6 offset-sm3>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex offset-sm3 sm6>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex offset-sm3 sm6>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[checkPass]"
                      required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex offset-sm3 sm6>
                    <v-btn flat type="submit" class="red white--text">Submit</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    checkPass () {
      return this.password !== this.confirmPassword ? 'Password do not match' : ''
    },
    user () {
      return this.$store.getters.loadUser
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSubmit () {
      // console.log(this.email, this.password, this.confirmPassword)
      this.$store.dispatch('createUser', {email: this.email, password: this.password})
    }
  }
}
</script>
