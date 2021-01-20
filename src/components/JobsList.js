import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobsList = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // your URL is http://localhost:3001/jobs, but you should use the env variable, so something like:
        const REACT_APP_BACKEND_SERVER_URL = `http://localhost:3001`;
        const url = `${REACT_APP_BACKEND_SERVER_URL}/jobs`;
        let response = await fetch(url);
        let result = await response.json();

        setJobList(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {jobList.map((job) => (
        <div>
          <h3>
            <Link to={`/jobs/${job.id}`}>Title Here</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default JobsList;
