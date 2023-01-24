<script>

  export let data;
  const {movies} =data;

// console.log(movies);
</script>

<h1>Movies Page</h1>

{#each movies as movie }
  <h1>{movie.titleText.text}, {movie.releaseYear.year}</h1>
{/each}