import React from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default SingleBlog;
