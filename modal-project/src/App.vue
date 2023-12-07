<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>

  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up Now</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </teleport>

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <template v-slot:links>
        <a href="#">Random 1</a>
        <a href="#">Random 2</a>
        <a href="#">Random 3</a>
      </template>
      <h1>Random buttons</h1>
    </Modal>
  </div>

  <button @click.ctrl="toggleModal">Open Modal (ctrl)</button>
  <button @click="toggleModalTwo">Open Modal 2</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal
  },

  data() {
    return {
      title: 'My First Vue App :)',
      showModal: false,
      showModalTwo: false
    }
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },

    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
