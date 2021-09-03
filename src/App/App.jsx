import { Route, Switch } from 'react-router-dom';
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import HomePage from 'components/HomePage';
import MoviesPage from 'components/MoviesPage';
import MovieDetailsPage from 'components/MovieDetailsPage';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={HomePage}/>          
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </Container>
  );
}

export default App;
