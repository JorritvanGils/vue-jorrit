<template>
    <div class="about">
        <h1>Hello {{their_name}}, this is the about page.</h1>
        <p>This is the about page</p>
    </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>
