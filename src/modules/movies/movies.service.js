// Almacenamiento en memoria para las películas
const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Ciencia Ficción",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Acción",
  },
];

export const moviesService = {
  getAllMovies: async () => {
    return movies;
  },

  getMovieById: async (id) => {
    return movies.find((movie) => movie.id === Number(id)) || null;
  },

  createMovie: async (movieData) => {
    const newMovie = {
      id: movies.length > 0 ? Math.max(...movies.map((m) => m.id)) + 1 : 1,
      ...movieData,
    };
    movies.push(newMovie);
    return newMovie;
  },
};

// Aliases para conveniencia
moviesService.getAll = moviesService.getAllMovies;
moviesService.getById = moviesService.getMovieById;
moviesService.create = moviesService.createMovie;

export const { getAllMovies, getMovieById, createMovie } = moviesService;
export default moviesService;
