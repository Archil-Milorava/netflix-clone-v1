import { fetchMovies } from "../services/fetchMovies.service.js";

export const getPopularTvShows = async (req, res) => {
  try {
    const data = await fetchMovies(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
    );

    const nowPlaying =
      data.results[Math.floor(Math.random() * data.results.length)];

    res.status(200).json({
      content: nowPlaying,
    });
  } catch (error) {
    console.log("error from fetching trending Tvshows:", error);
  }
};

export const getTvShowVideos = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchMovies(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
    );

    const videos = data.results;

    res.status(200).json({
      content: videos,
    });
  } catch (error) {
    console.log("error from fetching Tv videos", error);
  }
};

export const getTvShowDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchMovies(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );

    res.status(200).json({
      content: data,
    });
  } catch (error) {
    console.log("error from fetching Tv show details", error);
  }
};

export const getSimillarTvShow = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchMovies(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
    );

    const simillarTvShows = data.results;

    res.status(200).json({
      simillarTvShows,
    });
  } catch (error) {
    console.log("error from simillar Tv shows", error);
  }
};

export const getTvShowsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const data = await fetchMovies(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
    );

    const TvShowsByCategory = data.results;

    res.status(200).json({
        TvShowsByCategory,
    });
  } catch (error) {
    console.log("error from fetchin tv shows by category", error);
  }
};
