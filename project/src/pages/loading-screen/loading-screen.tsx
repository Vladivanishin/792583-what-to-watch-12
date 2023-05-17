import { ProgressBar } from 'react-loader-spinner';

export default function LoadingScreen(): JSX.Element {
  return (
    <div>
      <h3>Loading...</h3>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor='#F4442E'
        barColor='#51E5FF'
      />
    </div>
  );
}
