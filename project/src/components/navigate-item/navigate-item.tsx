import { Link } from 'react-router-dom';
import { FilmNavigation } from '../../conts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getNavigateFilter } from '../../store/service-process/selectors';
import { changeNavigation } from '../../store/service-process/service-process';

type NavigateItemProps = {
  navFilter: FilmNavigation;
}

export default function NavigateItem({ navFilter }: NavigateItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentNavFilter = useAppSelector(getNavigateFilter);
  return (
    <li className={`film-nav__item ${navFilter === currentNavFilter ? 'film-nav__item--active' : ''}`}>
      <Link to="/" className="film-nav__link" onClick={(evt) => {
        evt.preventDefault();
        dispatch(changeNavigation(navFilter));
      }}
      >{navFilter}
      </Link>
    </li>
  );
}
