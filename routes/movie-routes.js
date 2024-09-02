import express from "express";
import {
  addMovie,
  getAllMovies,
  getMovieByid,
} from "../controllers/movie-controller.js";

const movieRouter = express.Router();

movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieByid);
movieRouter.post("/", addMovie);

export default movieRouter;
