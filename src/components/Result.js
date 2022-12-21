import { useLocation } from 'react-router-dom';

import "./Result.css";

const Result = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  return <div>{`foo${id}`}</div>;
};

export default Result;
