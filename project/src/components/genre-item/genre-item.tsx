import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getGenreFilter } from '../../store/service-process/selectors';
import { changeGenre } from '../../store/service-process/service-process';
import { GenreFilter } from '../../conts';

type GenreItemProps = {
  genreFilter: GenreFilter;
}

export default function GenreItem({ genreFilter }: GenreItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenreFilter = useAppSelector(getGenreFilter);
  return (
    <li className={`catalog__genres-item ${genreFilter === currentGenreFilter ? 'catalog__genres-item--active' : ''}`}>
      <Link to="/" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        dispatch(changeGenre(genreFilter));
      }}
      >{genreFilter}
      </Link>
    </li>
  );
}
