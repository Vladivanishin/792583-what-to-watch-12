import { FilmNavigation } from '../../conts';
import NavigateItem from '../navigate-item/navigate-item';

export default function NavigateList(): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {Object.values(FilmNavigation).map((navFilter) => (
          <NavigateItem navFilter={navFilter} key={navFilter} />
        ))}
      </ul>
    </nav>
  );
}
