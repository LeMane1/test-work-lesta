import * as React from 'react';
import { Spinner } from 'react-bootstrap'

interface ILoadingProps {
}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return (
    <>
      <Spinner animation="border" size="sm" />
    </>
  )
};

export default Loading;
