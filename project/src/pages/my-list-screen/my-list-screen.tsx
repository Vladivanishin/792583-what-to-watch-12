import PageFooter from '../../components/page-footer/page-footer';
import Header from '../../components/header/header';
import { AppPage, HeaderVersion } from '../../conts';
import CatalogFilms from '../../components/catalog-films/catalog-films';
import { useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/user-process/selectors';

export default function MyListScreen(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  return (
    <div className="user-page">
      <Header versionPage={AppPage.MyList} headerVersion={HeaderVersion.UserPage} />

      <CatalogFilms films={favorites} />

      <PageFooter />
    </div>
  );
}
