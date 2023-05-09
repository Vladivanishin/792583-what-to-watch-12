import { Link } from 'react-router-dom';

export default function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h2>This page Not Found!</h2>
      <Link to='/'><u>Back to Main Page</u></Link>
    </>
  );
}
