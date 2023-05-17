import { Link, useParams } from 'react-router-dom';
import PageFooter from '../../components/page-footer/page-footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchCheckAuthStatus, fetchFavoriteFilms, fetchFilmSimilarAction, fetchGetFilmAction, fetchSetFavoriteAction } from '../../store/api-actions';
import CatalogFilmsList from '../../components/catalog-films/catalog-films';
import { getCurrentFilm, getFavoriteStatus, getSimilarFilms } from '../../store/data-process/selectors';
import Header from '../../components/header/header';
import { AppPage, AppRoute, FilmNavigation, HeaderVersion } from '../../conts';
import BtnMyList from '../../components/btn-my-list/btn-my-list';
import NavigateList from '../../components/navigate-list/navigate-list';
import { getNavigateFilter } from '../../store/service-process/selectors';
import NavigateOverview from '../../components/navigate-overview/navigate-overview';
import NavigateDetails from '../../components/navigate-details/navigate-details';
import NavigateReviews from '../../components/navigate-reviews/navigate-reviews';

export default function MovieScreen(): JSX.Element {
  const id = Number(useParams().id);
  const dispatch = useAppDispatch();
  const similarFilms = useAppSelector(getSimilarFilms);
  const currentFilm = useAppSelector(getCurrentFilm);
  const navFilter = useAppSelector(getNavigateFilter);
  const isFavoriteStatus = useAppSelector(getFavoriteStatus);

  useEffect(() => {
    if (similarFilms.length) {
      return;
    }
    dispatch(fetchGetFilmAction(id));
    dispatch(fetchFilmSimilarAction(id));
    dispatch(fetchCheckAuthStatus());
    dispatch(fetchFavoriteFilms());
  }, [dispatch, id, currentFilm, navFilter, similarFilms.length]);


  if (currentFilm === undefined) {
    return;
  }

  return (
    <>
      <section className="film-card film-card--full" style={{ backgroundColor: `${currentFilm.backgroundColor}` }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header headerVersion={HeaderVersion.FilmCard} versionPage={AppPage.Film} />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">{currentFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <BtnMyList filmId={currentFilm?.id} isFavorite={isFavoriteStatus} />
                <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm?.posterImage} alt={currentFilm?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <NavigateList />
              {navFilter === FilmNavigation.Overview && <NavigateOverview />}
              {navFilter === FilmNavigation.Details && <NavigateDetails />}
              {navFilter === FilmNavigation.Reviews && <NavigateReviews />}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CatalogFilmsList films={similarFilms} />
        </section>

        <PageFooter />
      </div>
    </>
  );
}
