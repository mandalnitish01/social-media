import { useContext, useRef } from "react";
// import PostList from "./PostList";
import {PostList} from "../Store/post-list-store";


const CreatePost = () => {

  const { addPost } =  useContext(PostList);


  const userIdElement = useRef(); 
  const postTitleElement = useRef(); 
  const postBodyElement = useRef(); 
  const reactionsElement = useRef(); 
  const tagsElement = useRef(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId,postTitle,postBody,reactions,tags);
  }

  return (
    <form className="create-post post" onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlfor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your user Id"
        />
      </div>


      <div className="mb-3">
        <label htmlfor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="how are you feeling today..."
        />
      </div>

      

      <div className="mb-3">
        <label htmlfor="body" className="form-label">
          post Content
        </label>
        <textarea
          rows="4"
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlfor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reaction"
          placeholder="how many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlfor="tags" className="form-label">
          Enter your hastags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatePost;
