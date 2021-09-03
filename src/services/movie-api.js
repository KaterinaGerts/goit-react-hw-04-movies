const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day?';
const KEY = '5f8f89b44874dae418398127927dd3d2';

 async function fetchMovies() {
  return await fetch(`${BASE_URL}api_key=${KEY}`,)
    .then(response => {    
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      console.log(data.results);
      return data.results;
    });
}

const api = {
  fetchMovies,
}

export default api;
