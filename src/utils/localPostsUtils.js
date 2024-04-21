class LocalPostsUtils {
  constructor() {}

  getMyPosts() {
    const myPosts = localStorage.getItem("myPosts");
    return myPosts ? JSON.parse(myPosts) : [];
  }

  getMyFavorites() {
    const myFavorites = localStorage.getItem("myFavorites");
    return myFavorites ? JSON.parse(myFavorites) : [];
  }

  addNewLocalPost(postID, storageName) {
    let postsInStorage = localStorage.getItem(storageName);
    postsInStorage = postsInStorage ? JSON.parse(postsInStorage) : [];

    if (postsInStorage.includes(postID)) {
      return;
    }

    postsInStorage.push(postID);
    localStorage.setItem(storageName, JSON.stringify(postsInStorage));
  }

  removeNewLocalPost(postID, storageName) {
    let postsInStorage = localStorage.getItem(storageName);
    postsInStorage = postsInStorage ? JSON.parse(postsInStorage) : [];

    if (postsInStorage.length === 0 || !postsInStorage.includes(postID)) {
      return;
    }

    postsInStorage = postsInStorage.filter((id) => id !== postID);
    console.log(postsInStorage);
    localStorage.setItem(storageName, JSON.stringify(postsInStorage));
  }

  isPostFavorite(postID) {
    return this.getMyFavorites().includes(postID);
  }
}

const localPostsController = new LocalPostsUtils();

export default localPostsController;
