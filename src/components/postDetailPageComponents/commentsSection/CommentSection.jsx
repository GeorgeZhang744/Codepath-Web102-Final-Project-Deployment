/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { supabase } from "../../../client";

const CommentSection = ({ props }) => {
  const { postID } = props;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const commentsResult = await supabase.from("Comment").select("*").eq("postID", postID).order("commentedTime");
      const commentsData = commentsResult.data;

      setComments(commentsData);
    };

    getComments();
  }, [postID]);

  const addCommentsProps = { postID, comments, setComments };

  return (
    <>
      <AddComment props={addCommentsProps} />
      <Comments props={{ comments }} />
    </>
  );
};

export default CommentSection;
