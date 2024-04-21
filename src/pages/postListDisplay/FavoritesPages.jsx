/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";

import { PostListDisplayComponents } from "../../components";

import localPostsController from "../../utils/localPostsUtils";
import DBController from "../../utils/dbUtils";

const { Posts, Sorter } = PostListDisplayComponents;

const FavoritesPage = ({ props }) => {
  const { search, sorter, filter, setSorter, setFilter } = props;

  const [myFavorites, setMyFavorites] = useState([]);

  useEffect(() => {
    const getFavoritePosts = async () => {
      const myFavoriteIDs = await localPostsController.getMyFavorites();
      const myFavoritesData = await DBController.getListPostsWithComments(myFavoriteIDs);

      const searchedFavorites = myFavoritesData.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

      setMyFavorites(searchedFavorites);
    };

    getFavoritePosts();
  }, [sorter, filter, search]);

  return (
    <>
      <Sorter props={{ setSorter, filter, setFilter }} />
      <Posts props={{ posts: myFavorites }} />
    </>
  );
};

export default FavoritesPage;
