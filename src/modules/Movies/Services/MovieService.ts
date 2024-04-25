import { AxiosResponse } from "axios";
import { Movie } from "../../../Types/Movie";
import ApiService from "../../../Services/ApiService";

export default class MovieService {
  async getAllMovies(): Promise<Movie[]> {
    const response = await ApiService.get(`api/movie`);
    return response.data;
  }

  async getMovieById(id: number): Promise<Movie> {
    const response = await ApiService.get(`api/movie/${id}`);
    return response.data;
  }

  async editMovie(movie: Movie): Promise<any> {
    const { id, ...restOfObject } = movie;
    const response = await ApiService.put(`/api/movie/${id}`, restOfObject);
    return response.data;
  }

  async createMovie(movie: Movie): Promise<any> {
    const response = await ApiService.post("/api/movie/", movie);
    return response.data;
  }

  async deleteMovie(id: number): Promise<any> {
    const response = await ApiService.delete(`api/movie/${id}`);
    return response.data;
  }

  async getAllMoviesFromFile(): Promise<Movie[]> {
    const response = await fetch(`/movies.json`);
    const movies: Movie[] = await response.json();
    return movies;
  }
}
