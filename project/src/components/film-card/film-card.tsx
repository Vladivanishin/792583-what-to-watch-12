import { AppPage } from '../../conts';
import FilmCardWrap from '../film-card-wrap/film-card-wrap';
import Header from '../header/header';

export default function FilmCard(): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header versionPage={AppPage.Film} />

      <FilmCardWrap />
    </section>
  );
}
