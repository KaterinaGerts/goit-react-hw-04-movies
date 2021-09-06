import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import Spinner from 'components/Loader';
// import HomePage from 'views/HomePage';
// import MoviesPage from 'views/MoviesPage';
// import MovieDetailsPage from 'views/MovieDetailsPage';

const HomePage = lazy(() =>
  import('views/HomePage' /* webpackChunkName: "home" */),
);

const MoviesPage = lazy(() =>
  import('views/MoviesPage' /* webpackChunkName: "movies" */),
);
const MovieDetailsPage = lazy(() =>
  import('views/MovieDetailsPage' /* webpackChunkName: "movie details" */),
);

function App() {
  return (
    <Container>

      <AppBar/>
      <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>      
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>  
        <Route path="/">
          <HomePage />
        </Route>      
      </Switch>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}

export default App;
