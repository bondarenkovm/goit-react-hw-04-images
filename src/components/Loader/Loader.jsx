import { TailSpin } from 'react-loader-spinner';
// import { LoaderWrapper } from './Loader.styled';

function Loader() {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
    />

    // <LoaderWrapper>
    // <RotatingLines
    //   strokeColor="#4fa94d"
    //   strokeWidth="5"
    //   animationDuration="0.75"
    //   width="80"
    //   visible={true}
    //   wrapperClass="loader"
    // />
    // </LoaderWrapper>
  );
}
export { Loader };
