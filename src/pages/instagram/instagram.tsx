import { PostType } from "./types";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "./components/modal";
import Post from "./components/post";

const dataHeaders = {
  "Content-Type": "application/json",
};

const Instagram = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [modal, setModal] = useState<boolean>(false);

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
        setModal(false);
      })
      .catch((err) => console.log(err));
  };

  const handlePost = () => {
    const desc = document.querySelector("#description") as HTMLTextAreaElement;
    const hashtags = document.querySelector("#hashtags") as HTMLInputElement;
    const img = document.querySelector("#image") as HTMLInputElement;

    const newPost: PostType = {
      description: desc.value,
      hashtags: [hashtags.value],
      id: uuidv4(),
      img_url: img.value,
    };

    createPost(newPost);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container--sm__wrap">
      <div className={modal ? "overlay--instagram" : ""}></div>
      <Modal handlePost={handlePost} modal={modal} setModal={setModal} />
      <div className="container container--sm">
        <Post posts={posts} />
        <button className="button" onClick={() => setModal(true)}>
          Nova objava
        </button>
      </div>
    </div>
  );
};

export default Instagram;
