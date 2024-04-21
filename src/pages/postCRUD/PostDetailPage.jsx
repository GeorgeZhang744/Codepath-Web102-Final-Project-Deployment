/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { MainContentComponents, ReactionSectionComponents, CommentsSectionComponents } from "../../components";

import DBController from "../../utils/dbUtils";

const { BackButton, PostType, PostContent } = MainContentComponents;
const { ReactionButtons } = ReactionSectionComponents;
const { CommentSection } = CommentsSectionComponents;

const PostDetailPage = () => {
  const { postID } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const postWithComments = await DBController.getPostWithComments(postID);
      setPost(postWithComments);
    };

    getPost();
  }, [postID]);

  return (
    <div className="Post-Detail-Page w-5/6 mx-auto my-4 px-12 py-8 rounded-lg bg-gray-300">
      <div className="flex w-full pt-2">
        <BackButton />
        <PostType props={post} />
      </div>
      <PostContent props={post} />
      <ReactionButtons props={post} />
      <CommentSection props={{ postID }} />
      <div className="flex w-full pt-2">
        <Link to="./verify/">
          <button className="btn btn-md btn-neutral mt-4 ml-auto text-lg w-20">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default PostDetailPage;
