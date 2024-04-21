import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {Layout, PostCRUDPages, PostListDisplayPages} from "./pages"

const { NavBar}  = Layout;
const {CreatePostPage, EditPostPage, PostDetailPage, VerifyEditKeyPage} = PostCRUDPages;
const {HomePage, MyPostsPage, FavoritesPage} = PostListDisplayPages

function App() {
  const [sorter, setSorter] = useState("postedTime");
  const [filter, setFilter] = useState("All Type");
  const [search, setSearch] = useState("");

  const navProps = { search, setSearch };
  const pageProps = { search, sorter, filter, setSorter, setFilter };

  return (
    <div className="App pb-2">
      <Routes>
        <Route path="/" element={<NavBar props={navProps} />}>
          <Route index={true} element={<HomePage props={pageProps} />} />
          <Route path="myposts" element={<MyPostsPage props={pageProps} />} />
          <Route path="favorites" element={<FavoritesPage props={pageProps} />} />
          <Route path="create" element={<CreatePostPage />} />
          <Route path="post/:postID" element={<PostDetailPage />} />
          <Route path="post/:postID/verify" element={<VerifyEditKeyPage />} />
          <Route path="post/:postID/edit" element={<EditPostPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
