<template>
  <div class="w-full h-full bg-white">
    <div class="w-2/3 mx-auto pt-16">
      <DataTable
        v-if="loadedMovies"
        :value="movies"
        tableStyle="min-width: 20rem"
        sortMode="multiple"
        scrollable
        scrollHeight="400px"
        :virtualScrollerOptions="{ itemSize: 46 }"
      >
        <Column field="Title" header="Title" sortable></Column>
        <Column field="Year" header="Year"></Column>
        <Column field="Rated" header="Rated"></Column>
      </DataTable>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MovieService from "../Services/MovieService";
import { Movie } from "../../../Types/Movie";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default defineComponent({
  components: { DataTable, Column },
  data() {
    return {
      movieService: new MovieService(),
      movies: [] as Movie[],
      loadedMovies: false,
    };
  },
  async created() {
    try {
      this.movies = await this.movieService.getAllMoviesFromFile();
      console.log("filmovi -", this.movies);
    } catch (error) {
      console.log(error);
    } finally {
      this.loadedMovies = true;
    }
  },
});
</script>
<style scoped></style>
