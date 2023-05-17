import { useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/user-process/selectors';

export default function HeaderTitle(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  return (
    <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favorites.length}</span></h1>
  );
}
