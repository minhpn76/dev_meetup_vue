<template>
  <v-app>
    <v-toolbar dark class="red darken-2">
      <v-toolbar-title >
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-toolbar-side-icon
        @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="menuItem in menuItems" :key="menuItem.title" router :to="menuItem.link">
          <v-icon 
            left
          >
          {{menuItem.icon}}</v-icon>
          {{menuItem.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
       let menuItems = [
        { icon: 'face', title: 'Sign Up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign In', link: '/signin' }
      ]
      if (this.userIsAuth) {
        let menuItems = [
          { icon: 'supervisor_account', title: 'Views Meetup', link: '/meetups' },
          { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
          { icon: 'person', title: 'Profile', link: '/profile' }
        ]
      }
      return menuItems
    },
    userIsAuth () {
      return  this.$store.getters.loadUser !== null && this.$store.getters.loadUser !== undefined
    }
  },
  name: 'App'
}
</script>
