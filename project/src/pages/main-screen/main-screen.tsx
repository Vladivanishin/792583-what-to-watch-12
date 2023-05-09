import CatalogFilms from '../../components/catalog-films/catalog-films';
import CatalogList from '../../components/catalog-list/catalog-item';
import CatalogMoreBtn from '../../components/catalog-more-btn/catalog-more-btn';
import FilmCard from '../../components/film-card/film-card';
import PageFooter from '../../components/page-footer/page-footer';
import { useAppSelector } from '../../hooks';
import { fetchFilmsAction } from '../../store/api-actions';
import { getFilms } from '../../store/data-process/selectors';
import React, { useEffect } from 'react';

export default function MainScreen(): JSX.Element {

  const films = useAppSelector(getFilms);
  useEffect(() => {
    fetchFilmsAction();
  }, [films]);

  return (
    <>
      <FilmCard />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogList />

          <CatalogFilms />

          <CatalogMoreBtn />
        </section>

        <PageFooter />
      </div>
    </>
  );
}
