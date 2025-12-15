import React from "react";
import { useSearchParams } from "react-router-dom";

const UpdateCourse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return <div>{searchParams}</div>;
};

export default UpdateCourse;
