import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RespositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RespositoryParams>();

  return <h1>Repository:{params.repository}</h1>;
};

export default Repository;
