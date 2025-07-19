import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import '../App.css';

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div className="postcontainer">
      <div>
    <div className="cards">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
    </div>
    </div>
  );
};

export default PostList;
