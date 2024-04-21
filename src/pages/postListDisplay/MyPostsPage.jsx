/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";

import { PostListDisplayComponents } from "../../components";

import localPostsController from "../../utils/localPostsUtils";
import DBController from "../../utils/dbUtils";

const { Posts, Sorter } = PostListDisplayComponents;

const MyPostsPage = ({ props }) => {
  const { search, sorter, filter, setSorter, setFilter } = props;

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const getMyPosts = async () => {
      const myPostIDs = await localPostsController.getMyPosts();
      const myPostsData = await DBController.getListPostsWithComments(myPostIDs);

      const searchedMyPosts = myPostsData.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

      setMyPosts(searchedMyPosts);
    };

    getMyPosts();
  }, [sorter, filter, search]);

  return (
    <>
      <Sorter props={{ setSorter, filter, setFilter }} />
      <Posts props={{ posts: myPosts }} />
    </>
  );
};

export default MyPostsPage;
