import { Link, generatePath } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { selectFilmId } from '../../store/service-process/service-process';
import { Film } from '../../types/data';
import { AppRoute } from '../../conts';
import { fetchGetFilmAction } from '../../store/api-actions';

type CardCatalogProps = {
  film: Film;
}

export default function CardCatalog({ film }: CardCatalogProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <article className="small-film-card catalog__films-card"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={() => dispatch(fetchGetFilmAction(film.id))}
      onMouseEnter={() => dispatch(selectFilmId(film.id))}
      onMouseLeave={() => dispatch(selectFilmId(null))}
    >
      <Link to={generatePath(AppRoute.Film, { id: `${film.id}` })}>
        <div className="small-film-card__image">
          <img src={film.previewImage} alt={film.name} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <span className="small-film-card__link">{film.name}</span>
      </h3>
    </article>
  );
}
