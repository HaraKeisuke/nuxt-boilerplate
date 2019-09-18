<template>
  <ul>
    <li v-for="(todo, key, index) in todos" :key="index">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </li>
    <button @click="getAsync">getAsync</button>
  </ul>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  methods: {
    getAsync(e) {
      this.$store.dispatch('todos/getAsync')
    },
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    }),
    ...mapActions({
      getAsync: 'todos/getAsyncAction'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
