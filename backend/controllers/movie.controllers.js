import { fetchMovies } from "../services/fetchMovies.service.js";

export const getPopularMovies = async (req, res) => {
  try {
    const data = await fetchMovies(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
    );

    const nowPlaying =
      data.results[Math.floor(Math.random() * data.results.length)];

    res.status(200).json({
      content: nowPlaying,
    });
  } catch (error) {
    console.log("error from fetching trending movies:", error);
  }
};

export const getMovieVideos = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchMovies(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );

    const videos = data.results;

    res.status(200).json({
      content: videos,
    });
  } catch (error) {
    console.log("error from fetching videos", error);
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchMovies(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );

    res.status(200).json({
      content: data,
    });
  } catch (error) {
    console.log("error from fetching movie details", error);
  }
};

export const getSimillarMovies = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchMovies(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );

    const simillarMovies = data.results;

    res.status(200).json({
      simillarMovies,
    });
  } catch (error) {
    console.log("error from simillar movies", error);
  }
};

export const getMovieByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const data = await fetchMovies(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );

    const moviesByCategory = data.results;

    res.status(200).json({
      moviesByCategory,
    });
  } catch (error) {
    console.log("error from fetchin movies by category", error);
  }
};
