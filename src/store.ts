import { reactive } from 'vue'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface SelectedMovie {
  Title: string
  Year: string
  Poster: string
  Runtime: string
  imdbRating: string
  Plot: string
  Released: string
  Actors: string
  Director: string
  Genre: string
}

interface Store {
  query: string
  movies: Movie[]
  selectedMovieID: string | null
  selectedMovie: SelectedMovie | null
  selectMovie: (id: string) => void
  closeSelectedMovie: () => void
  updateQuery: (value: string) => void
}

export const store = reactive<Store>({
  query: '',
  movies: [],
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
})
