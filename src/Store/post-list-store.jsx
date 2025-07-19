import { createContext, useId, useReducer , useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter(post => post.id !== action.PayLoad.postId);
  }else if (action.type === "ADD_POST") {
    newPostList = [action.PayLoad, ...currPostList];
  }
  return newPostList; 
};
//Start Local Storage getItem
//initilized post list container.
   const initializer = () => {
    //getitem from localstorage whoes name is postList. And store it in a localData variable.
  const localData = localStorage.getItem("postList");
  //return localData otherwise default post
  return localData ? JSON.parse(localData) : DEFAULT_POST_LIST;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
    initializer //addes newpost here
  );

  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type : "ADD_POST",
      PayLoad :{
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        useId: userId,
        tags: tags,
      }
    })
  };

  const deletePost = (postId) => {
     dispatchPostList({
      type: "DELETE_POST",
      PayLoad: {
        postId,
      },
     })
  };

  //csetItems in localstorage
useEffect(() => {
    localStorage.setItem("postList", JSON.stringify(postList))
  }, [postList]);
  //end of local storage

  
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "going to mumbai",
    body: " Hi friends I am going to mumbai for my vacations. Hope to enjoy a lot. peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "b-tech final",
    body: " completing b-tech. Hope to enjoy a lot. peace out.",
    reactions: 15,
    userId: "user-12",
    tags: ["unbelivable", "graduation", "Enjoying"],
  },

  {
    id: "3",
    title: "BCA Final",
    body: " completing b-tech. Hope to enjoy a lot. peace out.",
    reactions: 15,
    userId: "user-13",
    tags: ["unbelivable", "graduation", "Enjoying"],
  },
   {
    id: "4",
    title: "going to mumbai",
    body: " Hi friends I am going to mumbai for my vacations. Hope to enjoy a lot. peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "5",
    title: "b-tech final",
    body: " completing b-tech. Hope to enjoy a lot. peace out.",
    reactions: 15,
    userId: "user-12",
    tags: ["unbelivable", "graduation", "Enjoying"],
  },

  
];

export default PostListProvider;
