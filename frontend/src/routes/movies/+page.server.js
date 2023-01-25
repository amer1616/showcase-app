import { env } from "$env/dynamic/private";

// server side fetch, when u want to run server private environment variable or api key not exposed to public
// import.meta.env.DEV;

export const load = async () => {
  // console.log("Server load Res");
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${env.MOVDB_API_KEY}`,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const res = await fetch(
      "https://moviesdatabase.p.rapidapi.com/titles",
      options
    );
    const data = await res.json();
    return data.results; 
  };

  return {
    movies: fetchMovies(),
  };
};
