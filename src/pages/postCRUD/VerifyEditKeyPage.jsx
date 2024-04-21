/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DBController from "../../utils/dbUtils";

const VerifyEditKeyPage = () => {
  const { postID } = useParams();
  const navigate = useNavigate();

  const [editKey, setEditKey] = useState("");
  const [inputEditKey, setInputEditKey] = useState("");

  const inputEditKeyHandler = (e) => {
    setInputEditKey(e.target.value);
  };

  useEffect(() => {
    const getEditKey = async () => {
      const post = await DBController.getPost(postID);
      setEditKey(post.editKey);
    };

    getEditKey();
  }, [postID]);

  const cancelEditingHandler = (e) => {
    e.preventDefault();
    navigate(`/post/${postID}`);
  };

  const verifyKeyHandler = (e) => {
    e.preventDefault();
    if (inputEditKey === editKey) {
      navigate(`/post/${postID}/edit`);
    } else {
      alert("Incorrect security key!");
      setInputEditKey("");
    }
  };

  return (
    <form className="flex justify-center">
      <div className="p-4 w-1/3 my-4 rounded-lg m-auto bg-gray-300">
        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="Input security key of the post"
          value={inputEditKey}
          onChange={inputEditKeyHandler}
        />

        <div className="flex w-full mt-4">
          <button className="btn btn-sm btn-neutral text-md ml-auto" onClick={cancelEditingHandler}>
            Cancel
          </button>
          <button className="btn btn-sm btn-neutral text-md ml-2" onClick={verifyKeyHandler}>
            Verify
          </button>
        </div>
      </div>
    </form>
  );
};

export default VerifyEditKeyPage;
