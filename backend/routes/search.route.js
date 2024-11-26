import express from "express"
import { deleteHistoryItem, searchHistory, searchMovies, searchPerson, searchTv } from '../controllers/search.controllers.js';

const searchRouter = express.Router();


searchRouter.get('/person/:query', searchPerson)
searchRouter.get('/movie/:query', searchMovies)
searchRouter.get('/tv/:query', searchTv)
searchRouter.get('/history', searchHistory )
searchRouter.put('/history/:id',  deleteHistoryItem)

export default searchRouter;