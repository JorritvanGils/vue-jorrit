<template>
  <div class="todolist">
    <v-btn>Click me!</v-btn>
    <v-navigation-drawer app>
      Hello
    </v-navigation-drawer>
    <v-app-bar app>
      bar
    </v-app-bar>
    <todo></todo>
    <todo-form></todo-form>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'
import TodoForm from '@/components/TodoForm.vue'

export default {
  name: 'TodoList',
  components: {
    Todo, TodoForm
  },
  mounted () {
    // Log the store to the console
    console.log(this.$store)
  }
}
</script>
