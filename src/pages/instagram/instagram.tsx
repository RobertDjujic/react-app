import { useEffect, useState } from "react";
import { PostType } from "./types";

const dataHeaders = {
  "Content-Type": "application/json",
};

const newPost: PostType = {
  id: 2,
  title: "Na poslu",
  description: "Novi radni dan u uredu.",
  hashtags: ["programiranje", "it", "grind"],
  img_url:
    "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
};

const Instagram = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = () => {
    fetch("http://localhost:3000/instagram")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.error(err));
  };

  const createPost = (post: PostType) => {
    fetch("http://localhost:3000/instagram", {
      method: "POST",
      headers: dataHeaders,
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        getPosts();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container container--sm">
      <h1>Instagram</h1>
      <hr />
      {posts.map((post: PostType) => {
        return (
          <div className="instagram" key={post.id}>
            <h2 className="instagram__title">{post.title}</h2>
            <img
              className="instagram__img"
              src={post.img_url}
              alt="A user's posted image."
            />
            {post.description}{" "}
            <b>
              {post.hashtags.map((tag, index) => {
                return <span key={index}>{`#${tag} `}</span>;
              })}
            </b>
          </div>
        );
      })}
      <button className="button" onClick={() => createPost(newPost)}>
        Nova objava
      </button>
    </div>
  );
};

export default Instagram;
