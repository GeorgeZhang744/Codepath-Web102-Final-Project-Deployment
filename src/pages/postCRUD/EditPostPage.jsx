/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { CreatePostPageComponents } from "../../components";

import localPostsController from "../../utils/localPostsUtils";
import DBController from "../../utils/dbUtils";

import { supabase } from "../../client";

const {TitleInput, PostTypeSelection, ContentInput, ImgURLInput} = CreatePostPageComponents

const EditPostPage = () => {
  const { postID } = useParams();

  const [title, setTitle] = useState("");
  const [postType, setPostType] = useState("");
  const [content, setContent] = useState("");
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const postWithComments = await DBController.getPostWithComments(postID);
      setTitle(postWithComments.title);
      setPostType(postWithComments.postType);
      setContent(postWithComments.content);
    };

    getPost();
  }, [postID]);

  const changeHandler = (e, value) => {
    switch (value) {
      case "title":
        setTitle(e.target.value);
        break;
      case "postType":
        setPostType(e.target.value);
        break;
      case "content":
        setContent(e.target.value);
        break;
      case "imgURL":
        setImgURL(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  const editPostHandler = async (e) => {
    e.preventDefault();
    try {
      if (!title || !postType) {
        alert("Missing title or post type");
        return;
      }

      await supabase.from("Post").update({ title, postType, content, imgURL }).eq("id", postID);

      alert("Post updated successfully!");
      window.location = `/`;
    } catch (err) {
      alert("Updating post failed. Error: " + err);
    }
  };

  const deletePostHandler = async (e) => {
    e.preventDefault();
    try {
      await supabase.from("Post").delete().eq("id", postID);
      localPostsController.removeNewLocalPost(postID, "myPosts");

      alert("Post deleted successfully!");
      window.location = `/`;
    } catch (err) {
      alert("Updating post failed. Error: " + err);
    }
  };

  return (
    <form className="flex justify-center">
      <div className="p-4 space-y-4 w-1/3 my-4 rounded-lg mb-auto bg-gray-300">
        <TitleInput title={title} changeHandler={changeHandler} />
        <PostTypeSelection postType={postType} changeHandler={changeHandler} />
        <ContentInput content={content} changeHandler={changeHandler} />
        <ImgURLInput imgURL={imgURL} changeHandler={changeHandler} />
        <button className="btn btn-neutral text-lg mt-4" onClick={editPostHandler}>
          Update
        </button>
        <button className="btn btn-neutral text-lg mt-4 ml-2" onClick={deletePostHandler}>
          Delete
        </button>
        <Link to={`/post/${postID}/`}>
          <button className="btn btn-neutral text-lg ml-2">Cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default EditPostPage;
