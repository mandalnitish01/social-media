import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/Post-list-store";
const Post = ({ post }) => {
  
  const {deletePost} = useContext(PostList);
  
  return (
    <div className="card postcard" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}>
            <MdDelete />
            
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="hashtags badge text-bg-primary">{tag}</span>
        ))}

        <div className="reactions alert alert-warning" role="alert">
  this post has been reacted by {post.reactions} people.
</div>
      </div>
    </div>
  );
};

export default Post;
