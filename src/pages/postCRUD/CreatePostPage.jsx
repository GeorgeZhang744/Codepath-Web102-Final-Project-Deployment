/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { CreatePostPageComponents } from "../../components";

import localPostsController from "../../utils/localPostsUtils";

import { supabase } from "../../client";

const { TitleInput, PostTypeSelection, EditKeyInput, ContentInput, ImgURLInput } = CreatePostPageComponents;

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [postType, setPostType] = useState("");
  const [editKey, setEditKey] = useState("");
  const [content, setContent] = useState("");
  const [imgURL, setImgURL] = useState("");

  const changeHandler = (e, value) => {
    const changedValue = e.target.value;

    switch (value) {
      case "title":
        setTitle(changedValue);
        break;
      case "postType":
        setPostType(changedValue);
        break;
      case "editKey":
        setEditKey(changedValue);
        break;
      case "content":
        setContent(changedValue);
        break;
      case "imgURL":
        setImgURL(changedValue);
        break;
      default:
        break;
    }
  };

  const createPostHandler = async (e) => {
    e.preventDefault();
    try {
      if (!title || !postType || !editKey) {
        alert("Missing title, post type, or security key");
        return;
      }

      const insertResult = await supabase.from("Post").insert([{ title, postType,imgURL, editKey, content }]).select();

      const postID = insertResult.data[0].id;
      localPostsController.addNewLocalPost(postID, "myPosts");

      alert("Post created successfully!");
      window.location = "/";
    } catch (err) {
      alert("Creating new post failed. Error: " + err);
    }
  };

  return (
    <form className="flex justify-center">
      <div className="p-4 space-y-4 w-1/3 my-4 rounded-lg mb-auto bg-gray-300">
        <TitleInput title={title} changeHandler={changeHandler} />
        <PostTypeSelection postType={postType} changeHandler={changeHandler} />
        <EditKeyInput editKey={editKey} changeHandler={changeHandler} />
        <ContentInput content={content} changeHandler={changeHandler} />
        <ImgURLInput imgURL={imgURL} changeHandler={changeHandler} />
        <button className="btn btn-neutral text-lg mt-4" onClick={createPostHandler}>
          Create
        </button>
        <Link to="/">
          <button className="btn btn-neutral text-lg ml-2">Cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default CreatePostPage;
