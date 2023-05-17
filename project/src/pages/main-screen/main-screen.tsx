import CatalogFilmsList from '../../components/catalog-films/catalog-films';
import Header from '../../components/header/header';
import PageFooter from '../../components/page-footer/page-footer';
import { AppPage, HeaderVersion } from '../../conts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCheckAuthStatus, fetchFavoriteFilms, fetchFilmsAction, fetchPromoFilmAction } from '../../store/api-actions';
import { getFavoriteStatus, getFilms, getPromo } from '../../store/data-process/selectors';
import React, { useEffect, useState } from 'react';
import BtnMyList from '../../components/btn-my-list/btn-my-list';
import GenreList from '../../components/genre-list/genre-list';

export default function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilms);
  const promo = useAppSelector(getPromo);
  const isFavoriteStatus = useAppSelector(getFavoriteStatus);

  useEffect(() => {
    if (films.length) {
      return;
    }
    dispatch(fetchFilmsAction());
    dispatch(fetchPromoFilmAction());
    dispatch(fetchCheckAuthStatus());
    dispatch(fetchFavoriteFilms());
  }, [dispatch, films]);

  const [count, setCount] = useState(8);
  const cutFilms = films.slice(0, count);

  if (promo === undefined) {
    return;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt={promo?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header versionPage={AppPage.Main} headerVersion={HeaderVersion.FilmCard} />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo?.posterImage} alt={promo?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo?.genre}</span>
                <span className="film-card__year">{promo?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <BtnMyList filmId={promo?.id} isFavorite={isFavoriteStatus} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <CatalogFilmsList films={cutFilms} />
          <div className="catalog__more">
            <button className="catalog__button" type="button" onClick={() => setCount(count + 8)}>Show more</button>
          </div>
          {/* <CatalogMoreBtn /> */}
        </section>

        <PageFooter />
      </div>
    </>
  );
}
