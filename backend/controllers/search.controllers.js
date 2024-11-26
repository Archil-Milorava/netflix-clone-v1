import User from "../models/user.model.js";
import { fetchMovies } from "../services/fetchMovies.service.js";

export const searchPerson = async (req, res) => {
  const { query } = req.params;

  try {
    const data = await fetchMovies(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (data.results.length === 0) {
      return res.status(400).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].profile_path,
          title: data.results[0].name,
          searchType: "person",
          createdAt: Date.now(),
        },
      },
    });

    res.status(200).json({
      success: true,
      content: data.results,
    });
  } catch (error) {
    console.log("error from search person", error);
  }
};

export const searchMovies = async (req, res) => {
  const { query } = req.params;

  try {
    const data = await fetchMovies(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (data.results.length === 0) {
      return res.status(400).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].profile_path,
          title: data.results[0].name,
          searchType: "movie",
          createdAt: Date.now(),
        },
      },
    });

    res.status(200).json({
      success: true,
      content: data.results,
    });
  } catch (error) {
    console.log("error from search movies", error);
  }
};

export const searchTv = async (req, res) => {
  const { query } = req.params;

  try {
    const data = await fetchMovies(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (data.results.length === 0) {
      return res.status(400).json(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].profile_path,
          title: data.results[0].name,
          searchType: "tv",
          createdAt: Date.now(),
        },
      },
    });

    res.status(200).json({
      success: true,
      content: data.results,
    });
  } catch (error) {
    console.log("error from search tv", error);
  }
};

export const searchHistory = async (req, res) => {
  try {
    res.status(200).json({ success: true, content: req.user.searchHistory });
  } catch (error) {
    console.log("error from Search History", error);
  }
};

export const deleteHistoryItem = async (req, res) => {
  let { id } = req.params;

  id = Number(id);

  try {
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Item ID is required" });
    }

    const result = await User.findByIdAndUpdate(
      req.user._id,
      {
        $pull: { searchHistory: { id: id } },
      },
      {
        new: true,
      }
    );

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "User not found or unauthorized" });
    }

    res.status(200).json({
      success: true,
      message: "Item removed successfully",
      updatedSearchHistory: result.searchHistory,
    });
  } catch (error) {
    console.log("Error from search history delete:", error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};
