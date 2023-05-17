import { AppPage, HeaderVersion } from '../../conts';
import HeaderTitle from '../header-title/header-title';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import HeaderUserBlock from '../header-user-block/header-user-block';
import HeaderTitleLogin from '../header-title-login/header-title-login';
import Logo from '../logo/logo';

type HeaderProps = {
  versionPage: AppPage;
  headerVersion: HeaderVersion;
}

export default function Header({ versionPage, headerVersion }: HeaderProps): JSX.Element {
  return (
    <header className={`page-header ${headerVersion}`}>
      <Logo />
      {versionPage === AppPage.MyList && <HeaderTitle />}
      {versionPage === AppPage.AddReview && <Breadcrumbs />}
      {versionPage !== AppPage.SignIn && <HeaderUserBlock />}
      {versionPage === AppPage.SignIn && <HeaderTitleLogin />}
    </header>
  );
}
