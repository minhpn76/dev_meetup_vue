import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // trang thai ban dau
  state: {
    loadMeetups: [
      { imageUrl: 'https://www.mumbailive.com/images/news/Time-Square-New-York-City-iStock-487537456-2_1511331164472.jpg?w=1368', id: 'asd12e12', title: 'Meetup in New York', date: '2017-03-17', desc: '1asd12eaddakldjahdjhakldjakdguiajgdasjdaklashfadk' },
      { imageUrl: 'https://i.ytimg.com/vi/q1EniN1oRvw/maxresdefault.jpg', id: '1231adas', title: 'Meetup in Paris', date: '2017-03-19', desc: 'lolkihjhklnmjknjkbnj890iikj09uikn' },
      { imageUrl: 'https://www.telegraph.co.uk/content/dam/video_previews/x/5/x5cgi0ode66q6vuxezqmehmexwer6bt-xlarge.jpg', id: 'vasdasd', title: 'Meetup in London', date: '2017-03-21', desc: 'oiouiouiyughbv97y712312' }
    ],
    user: null
  },
  // insert them
  mutations: {
    createMeetup (state, payload) {
      state.loadMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '12313'
      }
      // React Firebase
      commit('createMeetup', meetup)
    },
    createUser ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registerMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          err => {
            console.log(err)
          }
        )
    }
  },
  // dung getter de su dung dc o cac noi khac
  getters: {
    loadMeetups (state) {
      return state.loadMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featureMeetups (state, getters) {
      return getters.loadMeetups.slice(0, 5)
    },
    loadMeetup (state) {
      return (meetupId) => {
        return state.loadMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    loadUser (state) {
      return state.user
    }
  }
})
