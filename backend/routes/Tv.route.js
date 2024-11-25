import express from "express";
import { getPopularTvShows, getSimillarTvShow, getTvShowDetails, getTvShowsByCategory, getTvShowVideos } from "../controllers/Tv.controllers.js";


const tvRouter = express.Router()

tvRouter.get('/trending', getPopularTvShows)
tvRouter.get('/:id/trailers', getTvShowVideos)
tvRouter.get('/:id/details', getTvShowDetails)
tvRouter.get('/:id/simillar', getSimillarTvShow)
tvRouter.get('/:category', getTvShowsByCategory)

export default tvRouter;

