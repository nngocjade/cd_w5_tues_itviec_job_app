import React from "react";
import { useParams } from "react-router-dom";
const JobDetail = () => {
  const { id } = useParams();
  return <div>Check our details for Job ID # {id}</div>;
};

export default JobDetail;
