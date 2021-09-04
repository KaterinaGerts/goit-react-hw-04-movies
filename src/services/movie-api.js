const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '5f8f89b44874dae418398127927dd3d2';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies() {
  return fetchWithErrorHandling(`${BASE_URL}trending/all/day?api_key=${KEY}`,);   
};

export function fetchForSearchMovies() {
  return fetchWithErrorHandling(`${BASE_URL}search/movie?${KEY}&language=en-US&page=1&include_adult=false`,);   
};

export function fetchInfoAboutMovies(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`,);   
};

export function fetchAboutActorsOfMovie(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`,);   
};

export function fetchOfReviewOfMovie(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`,);   
};