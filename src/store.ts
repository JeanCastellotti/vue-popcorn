import { reactive } from 'vue'

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

// interface SelectedMovie {
//   Title: string
//   Year: string
//   Poster: string
//   Runtime: string
//   imdbRating: string
//   userRating: string
//   Plot: string
//   Released: string
//   Actors: string
//   Director: string
//   Genre: string
// }

// interface WatchedMovie {
//   imdbID: string
//   Title: string
//   Year: string
//   Poster: string
//   Runtime: string
//   imdbRating: string
//   userRating: string
// }

interface Store {
  query: string
  movies: Movie[]
  watchedMovies: Movie[]
  selectedMovieID: string | null
  selectedMovie: Movie | null
  selectMovie: (id: string) => void
  closeSelectedMovie: () => void
  updateQuery: (value: string) => void
  addWatchedMovie: (movie: Movie) => void
  deleteWatchedMovie: (id: string) => void
}

export const store = reactive<Store>({
  query: '',
  movies: [],
  watchedMovies: [],
  selectedMovieID: null,
  selectedMovie: null,

  selectMovie(id) {
    this.selectedMovieID = this.selectedMovieID === id ? null : id
  },

  closeSelectedMovie() {
    this.selectedMovieID = null
  },

  updateQuery(value) {
    this.query = value
  },

  addWatchedMovie(movie) {
    this.watchedMovies.push(movie)
  },

  deleteWatchedMovie(id) {
    this.watchedMovies = this.watchedMovies.filter(
      (movie) => movie.imdbID !== id
    )
  },
})
