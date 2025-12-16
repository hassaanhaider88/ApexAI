import React from "react";
import { useParams } from "react-router-dom";

const SingleStudent = () => {
  const params = useParams();
  return (
    <div className="w-full min-h-screen mt-20 text-white bg-black">
      {params.id}
    </div>
  );
};

export default SingleStudent;
