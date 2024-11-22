import express from "express";
import { getMovieByCategory, getMovieDetails, getMovieVideos, getPopularMovies, getSimillarMovies } from "../controllers/movie.controllers.js";


const movieRouter = express.Router()

movieRouter.get('/trending', getPopularMovies)
movieRouter.get('/:id/trailers', getMovieVideos)
movieRouter.get('/:id/details', getMovieDetails)
movieRouter.get('/:id/simillar', getSimillarMovies)
movieRouter.get('/:category', getMovieByCategory)

export default movieRouter;

