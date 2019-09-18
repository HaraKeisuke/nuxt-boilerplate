import axios from 'axios'

export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  async getAsyncAction(context) {
    const res = await axios.get('http://localhost:3000')
    context.commit('add', res.data)
  }
}
