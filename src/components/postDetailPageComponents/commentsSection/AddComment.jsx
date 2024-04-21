/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../../client";

const AddComment = ({ props }) => {
  const { postID, comments, setComments } = props;

  const [comment, setComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const commentChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const focusHandler = () => {
    setIsFocused(true);
    setShowButton(true);
  };

  const blurHandler = () => {
    setIsFocused(false);
  };

  const createComment = async () => {
    if (!comment) {
      return;
    }

    const addCommentResult = await supabase.from("Comment").insert([{ postID, comment }]).select();
    const addCommentData = addCommentResult.data[0];

    setComments([...comments, addCommentData]);
    setComment("");
  };

  useEffect(() => {
    let timer;
    if (!isFocused) {
      timer = setTimeout(() => {
        setShowButton(false);
      }, 200);
    }
    return () => clearTimeout(timer);
  }, [isFocused]);

  return (
    <div className="Add-Comment w-full mt-2 flex-col">
      <textarea
        className="textarea textarea-bordered w-full bg-gray-100 bg-opacity-100"
        rows="1"
        placeholder="Add a comment"
        value={comment}
        onChange={commentChangeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {
        <div className="w-full flex">
          {showButton && (
            <button className="btn btn-neutral ml-auto" onClick={createComment}>
              Submit
            </button>
          )}
        </div>
      }
    </div>
  );
};

export default AddComment;
