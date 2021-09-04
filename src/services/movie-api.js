const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '5f8f89b44874dae418398127927dd3d2';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies() {
  return fetchWithErrorHandling(`${BASE_URL}trending/movie/day?api_key=${KEY}`,);   
};

export function fetchForSearchMovies(query) {
  return fetchWithErrorHandling(`${BASE_URL}search/movie?${KEY}&language=en-US&page=1&include_adult=false`,);   
};

export function fetchInfoAboutMovies(id) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`,);   
};

export function fetchAboutActorsOfMovie(id) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`,);   
};

export function fetchOfReviewOfMovie(id) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US`,);   
};