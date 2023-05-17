import { useAppSelector } from '../../hooks';
import { getGenreFilter } from '../../store/service-process/selectors';
import { Films } from '../../types/data';
import CardCatalog from '../card-catalog/card-catalog';

type CatalogFilmsProps = {
  films: Films;
}

export default function CatalogFilms({ films }: CatalogFilmsProps): JSX.Element {
  const genreFilter = useAppSelector(getGenreFilter);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CardCatalog key={film.id} film={film} />
      ))}
    </div>
  );
}
