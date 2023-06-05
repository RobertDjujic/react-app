import { useEffect, useState } from "react";
import { PostType } from "./types";

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
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>Instagram</h1>
      <hr />
      <div className="instagram">
        {posts.map((post: PostType) => {
          return <div key={post.id}></div>;
        })}
      </div>
    </div>
  );
};

export default Instagram;
