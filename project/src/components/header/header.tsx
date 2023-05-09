import { AppPage } from '../../conts';
import HeaderTitle from '../header-title/header-title';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import HeaderUserBlock from '../header-user-block/header-user-block';
import HeaderTitleLogin from '../header-title-login/header-title-login';
import Logo from '../logo/logo';

type HeaderProps = {
  versionPage: AppPage;
}

export default function Header({ versionPage }: HeaderProps): JSX.Element {
  return (
    <header className={`page-header ${versionPage}__head`}>
      <Logo />
      {versionPage === AppPage.MyList && <HeaderTitle />}
      {versionPage === AppPage.AddReview && <Breadcrumbs />}
      {versionPage !== AppPage.SignIn && <HeaderUserBlock />}
      {versionPage === AppPage.SignIn && <HeaderTitleLogin />}
    </header>
  );
}
