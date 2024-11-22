import express from "express";
import { getMovieDetails, getMovieVideos, getPopularMovies } from "../controllers/movie.controllers.js";


const movieRouter = express.Router()

movieRouter.get('/trending', getPopularMovies)
movieRouter.get('/videos/:id/trailers', getMovieVideos)
movieRouter.get('/:id/details', getMovieDetails)

export default movieRouter;

