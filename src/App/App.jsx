//import { Route, Switch } from 'react-router-dom';
import Container from 'components/Container';
//import HomePage from 'components/HomePage';
// import MoviesPage from 'components/MoviesPage';
// import MovieDetailsPage from 'components/MovieDetailsPage';

import movieApi from 'services/movie-api';

function App() {
  movieApi()

  return (
    <Container>
      {/* <Switch>
        {/* <Route path="/" exact component={HomePage} /> */}
        {/* <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} /> */}
      {/* </Switch>  */}
    </Container>
  );
}

export default App;