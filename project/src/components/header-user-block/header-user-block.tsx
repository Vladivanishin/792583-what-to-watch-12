import { Link } from 'react-router-dom';
import { AppRoute } from '../../conts';

export default function HeaderUserBlock(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link className="user-block__link" to={'/'}>Sign out</Link>
      </li>
    </ul>
  );
}
