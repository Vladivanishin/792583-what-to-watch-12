import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../conts';
import HeaderSignInBlock from '../header-sign-in-block/header-sign-in-block';
import { getAuthStatus, getUserData } from '../../store/user-process/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchLogoutAction } from '../../store/api-actions';

export default function HeaderUserBlock(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();
  return (
    (authStatus === AuthorizationStatus.Auth ? (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src={userData?.avatarUrl} alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link"
            to={'/'}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(fetchLogoutAction());
            }}
          >Sign out
          </Link>
        </li>
      </ul>
    ) : <HeaderSignInBlock />)
  );
}
