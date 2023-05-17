import { GenreFilter } from '../../conts';
import GenreItem from '../genre-item/genre-item';

export default function GenreList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {Object.values(GenreFilter).map((genreFilter) => (
        <GenreItem genreFilter={genreFilter} key={genreFilter} />
      ))}
    </ul>
  );
}
