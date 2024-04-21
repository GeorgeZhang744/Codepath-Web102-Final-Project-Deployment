import { supabase } from "../client";

class DBUtils {
  constructor() {
    this.sorter = "postedTime";
    this.filter = "All Posts";
  }

  setSorter(sorter) {
    this.sorter = sorter;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  filterResult(posts) {
    if (this.filter === "All Posts") {
      return posts;
    } else {
      return posts.filter((post) => post.postType === this.filter);
    }
  }

  async getPost(postID) {
    const postResult = await supabase.from("Post").select("*").eq("id", postID);
    const postData = postResult.data[0];

    return postData;
  }

  async getPosts(postIDs) {
    const postsResult = await supabase.from("Post").select("*").in("id", postIDs).order(this.sorter, { ascending: false });
    const postsData = postsResult.data;
    return this.filterResult(postsData);
  }

  async getAllPosts() {
    const postsResult = await supabase.from("Post").select("*").order(this.sorter, { ascending: false });
    const postsData = postsResult.data;
    return this.filterResult(postsData);
  }

  async getCommentsForPost(postID) {
    const commentsResult = await supabase.from("Comment").select("*").eq("postID", postID).order("commentedTime");
    const commentsData = commentsResult.data;

    return commentsData;
  }

  async getPostWithComments(postID) {
    const postData = await this.getPost(postID);

    const commentsData = this.getCommentsForPost(postID);

    postData.comments = commentsData;

    return postData;
  }

  async getListPostsWithComments(postIDs) {
    const postsData = await this.getPosts(postIDs);

    for (let i = 0; i < postsData.length; i++) {
      const postID = postsData[i].id;
      const commentsData = await this.getCommentsForPost(postID);

      postsData[i].comments = commentsData;
    }

    return postsData;
  }

  async getAllPostsWithComments() {
    const postsData = await this.getAllPosts();

    for (let i = 0; i < postsData.length; i++) {
      const postID = postsData[i].id;
      const commentsData = await this.getCommentsForPost(postID);
      
      postsData[i].comments = commentsData;
    }

    return postsData;
  }
}

const DBController = new DBUtils();

export default DBController;
