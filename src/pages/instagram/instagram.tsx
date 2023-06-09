import { PostType } from "./types";
import { useEffect, useState } from "react";
import Bookmark from "../../assets/bookmark";
import ChatBubble from "../../assets/chat-bubble";
import Ellipsis from "../../assets/ellipsis";
import Heart from "../../assets/heart";
import PaperPlane from "../../assets/paper-airplane";
import profilePic from "./../../assets/profile-picture.jpg";

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
    <div className="container--sm__wrap">
      <div className="container container--sm">
        {posts.map((post: PostType) => {
          return (
            <div className="instagram" key={post.id}>
              <header className="instagram__header">
                <div className="instagram__header__user">
                  <div className="instagram__header__user__img">
                    <img src={profilePic} alt="The user's profile image." />
                  </div>
                  <div className="instagram__header__user__info">
                    <span>Robert</span>
                    <span>Osijek</span>
                  </div>
                </div>
                <div className="instagram__header__ellipsis">
                  <Ellipsis />
                </div>
              </header>
              <img
                className="instagram__img"
                src={post.img_url}
                alt="A user's posted image."
              />
              <div className="instagram__buttons">
                <div className="instagram__buttons__sec">
                  <Heart />
                  <ChatBubble />
                  <PaperPlane />
                </div>
                <Bookmark />
              </div>
              <div className="instagram__views">10.328 views</div>
              <div className="instagram__desc">
                <span className="instagram__desc__name">Robert</span>{" "}
                <span className="instagram__desc__text">
                  {post.description}
                </span>{" "}
                {post.hashtags.map((tag, index) => {
                  return (
                    <span
                      className="instagram__desc__hashtag"
                      key={index}
                    >{`#${tag} `}</span>
                  );
                })}
              </div>
              <div className="instagram__date">5 days ago</div>
            </div>
          );
        })}
        <button className="button" onClick={() => createPost(newPost)}>
          Nova objava
        </button>
      </div>
    </div>
  );
};

export default Instagram;
