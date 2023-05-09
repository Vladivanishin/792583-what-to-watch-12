import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute } from '../../conts';
import AddReviewScreen from '../../pages/add-review-screen/add-revuew-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import { HelmetProvider } from 'react-helmet-async';
import { browserHistory } from '../../browser-history';
import HistoryRouter from '../history-route/history-route';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route index element={<MainScreen />} />
          <Route path={AppRoute.AddReview} element={<AddReviewScreen />} />
          <Route path={AppRoute.MyList} element={<MyListScreen />} />
          <Route path={AppRoute.Film} element={<MovieScreen />} />
          <Route path={AppRoute.Player} element={<PlayerScreen />} />
          <Route path={AppRoute.SignIn} element={<LoginScreen />} />
          <Route path={'*'} element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>

  );
}

export default App;
