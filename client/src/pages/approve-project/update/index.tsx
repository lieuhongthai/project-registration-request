import React from 'react';
import { useParams } from 'react-router';

const ApproveProjectUpdate = () => {
  const { id: requestId } = useParams() as { id: string };

  return <div>ApproveProjectUpdate - Request id: {requestId}</div>;
};

export default ApproveProjectUpdate;
