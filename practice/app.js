const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.google.com',
      showBooks: true,
      books: [
        { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true },
        { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false },
        { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true }
      ],
      x: 0,
      y: 0
    }
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) console.log(data);
    },

    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },

    toggleFav(book) {
      book.isFav = !book.isFav;
    }
  },

  computed: {
    filteredBooks() {
      return this.books.filter(book => book.isFav);
    }
  }
});

app.mount('#app');
