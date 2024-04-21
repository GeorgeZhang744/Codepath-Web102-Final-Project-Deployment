/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DBController from "../../utils/dbUtils";
import { POST_TYPES } from "../../configs/postType.config";

const Sorter = ({ props }) => {
  const { setSorter, filter, setFilter } = props;

  const sortByMostRecent = () => {
    DBController.setSorter("postedTime");
    setSorter("postedTime");
  };

  const sortByMostVotes = () => {
    DBController.setSorter("upvotesCount");
    setSorter("mostRecent");
  };

  const filterByPostType = (e) => {
    DBController.setFilter(e.target.value)
    setFilter(e.target.value)
  }

  return (
    <div className="Sorter flex items-center space-x-4 mx-8 my-4 mb-0">
      <select className="select select-bordered select-sm" value={filter} onChange={filterByPostType}>
        <option selected>
          All Posts
        </option>
        {POST_TYPES.map((type, i) => (
          <option key={i} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button className="btn btn-sm btn-neutral text-md" onClick={sortByMostRecent}>
        Most Recent
      </button>
      <button className="btn btn-sm btn-neutral text-md" onClick={sortByMostVotes}>
        Most Votes
      </button>
    </div>
  );
};

export default Sorter;
