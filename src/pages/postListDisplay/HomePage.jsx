/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";

import { PostListDisplayComponents } from "../../components";

import DBController from "../../utils/dbUtils";

const { Posts, Sorter } = PostListDisplayComponents;

const HomePage = ({ props }) => {
  const { search, sorter, filter, setSorter, setFilter } = props;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await DBController.getAllPostsWithComments();

      const searchedPosts = postsData.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

      setPosts(searchedPosts);
    };

    getPosts();
  }, [sorter, filter, search]);

  return (
    <div className="Home-Page">
      <Sorter props={{ setSorter, filter, setFilter }} />
      <Posts props={{ posts }} />
    </div>
  );
};

export default HomePage;
