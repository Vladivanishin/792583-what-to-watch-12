import { FormEvent, useRef } from 'react';
import Header from '../../components/header/header';
import { AppPage, AppRoute, AuthorizationStatus, HeaderVersion } from '../../conts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';
import { Navigate } from 'react-router-dom';
import { UserLoginData } from '../../types/data';
import { fetchLoginAction } from '../../store/api-actions';

export default function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthorizationStatus.Auth) {
    if (localStorage.getItem.length) {
      return <Navigate to={AppRoute.Main} />;
    }
  }

  if (authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const onSubmit = (authData: UserLoginData) => {
    dispatch(fetchLoginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="user-page">
      <Header versionPage={AppPage.SignIn} headerVersion={HeaderVersion.UserPage} />

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" method='post' onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef} required />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} title="Введите минимум 1 латинскую букву и 1 цифру" pattern="^(?=.*[a-zA-Z])(?=.*\d)[^\s].+" required />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
