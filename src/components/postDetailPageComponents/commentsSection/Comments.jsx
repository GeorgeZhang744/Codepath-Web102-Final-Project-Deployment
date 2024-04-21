/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Comments = ({ props }) => {
  const { comments } = props;

  return (
    <div className="Comments mt-8">
      <label className="w-full justify-start font-bold text-xl">{comments.length} Comments:</label>
      <div className="w-full">
        <ul className="w-full bg-gray-100 rounded-lg p-4">
          {comments.length > 0 ? (
            comments.map((comment, i) => (
              <div key={i}>
                <p className="w-full text-lg">- {comment.comment}</p>
              </div>
            ))
          ) : (
            <li className="w-full font-bold text-xl">No Comments Yet</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
