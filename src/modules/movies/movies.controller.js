import moviesService from "./movies.service.js";

export const moviesController = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await moviesService.getAllMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener las películas",
        error: error.message,
      });
    }
  },

  getMovieById: async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await moviesService.getMovieById(id);

      if (!movie) {
        return res.status(404).json({
          message: `Película con id ${id} no encontrada`,
        });
      }

      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener la película",
        error: error.message,
      });
    }
  },

  createMovie: async (req, res) => {
    try {
      const { title, director, year, genre } = req.body;

      if (!title) {
        return res.status(400).json({
          message: "El título de la película es requerido",
        });
      }

      const newMovie = await moviesService.createMovie({
        title,
        director,
        year,
        genre,
      });

      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({
        message: "Error al crear la película",
        error: error.message,
      });
    }
  },
};

// Aliases para conveniencia
moviesController.getMovies = moviesController.getAllMovies;

export const { getAllMovies, getMovieById, createMovie } = moviesController;
export default moviesController;
