import { useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/data-process/selectors';

export default function NavigateOverview(): JSX.Element {
  const currentFilm = useAppSelector(getCurrentFilm);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{currentFilm?.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{currentFilm?.description}</p>

        <p>Gustave prides himself on providing first-className service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

        <p className="film-card__director"><strong>{currentFilm?.director}</strong></p>

        <p className="film-card__starring"><strong>{currentFilm?.starring}</strong></p>
      </div>
    </>
  );
}
