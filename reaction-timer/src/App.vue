<template>
  <h1>Travis' Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Results v-if="showResults"
    :score="score"
    :average="average"
  />
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: { Block, Results },

  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
      scoreTotal: 0,
      playCount: 0,
      average: 0
    }
  },

  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },

    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
      this.playCount++;
      this.scoreTotal += this.score;
      this.average = Math.floor(this.scoreTotal / this.playCount);
    }
  }
}
</script>

<style>
html {
  background: #d9d9d9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
