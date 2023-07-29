import { reactive, watch } from 'vue'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
  Runtime?: string
  imdbRating?: string
  userRating?: string
  Plot?: string
  Released?: string
  Actors?: string
  Director?: string
  Genre?: string
}

interface Store {
  query: string
  movies: Movie[]
  watchedMovies: Movie[]
  selectedMovieID: string | null
  selectedMovie: Movie | null
  updateQuery: (value: string) => void
  selectMovie: (id: string) => void
  closeSelectedMovie: () => void
  addWatchedMovie: (movie: Movie) => void
  deleteWatchedMovie: (id: string) => void
}

export const store = reactive<Store>({
  query: '',
  movies: [],
  watchedMovies: [],
  selectedMovieID: null,
  selectedMovie: null,

  updateQuery(value: string) {
    this.query = value
  },

  selectMovie(id: string) {
    this.selectedMovieID = this.selectedMovieID === id ? null : id
  },

  closeSelectedMovie() {
    this.selectedMovieID = null
  },

  addWatchedMovie(movie: Movie) {
    this.watchedMovies.push(movie)
    this.closeSelectedMovie()
  },

  deleteWatchedMovie(id: string) {
    this.watchedMovies = this.watchedMovies.filter(
      (movie) => movie.imdbID !== id
    )
  },
})

watch(
  () => store.watchedMovies,
  () => {
    localStorage.setItem('watchedMovies', JSON.stringify(store.watchedMovies))
  }
)
