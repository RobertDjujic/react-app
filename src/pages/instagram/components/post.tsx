import { PostProps, PostType } from "../types";
import Bookmark from "../../../assets/bookmark";
import ChatBubble from "../../../assets/chat-bubble";
import Ellipsis from "../../../assets/ellipsis";
import Heart from "../../../assets/heart";
import PaperPlane from "../../../assets/paper-airplane";
import profilePic from "./../../../assets/profile-picture.jpg";

const Post = ({ posts }: PostProps) => {
  return (
    <>
      {posts.map((post: PostType) => {
        return (
          <div className="post" key={post.id}>
            <header className="post__header">
              <div className="post__header__user">
                <div className="post__header__user__img">
                  <img src={profilePic} alt="The user's profile image." />
                </div>
                <div className="post__header__user__info">
                  <span>Robert</span>
                  <span>Osijek</span>
                </div>
              </div>
              <div className="post__header__ellipsis">
                <Ellipsis />
              </div>
            </header>
            <img
              className="post__img"
              src={post.img_url}
              alt="A user's posted image."
            />
            <div className="post__buttons">
              <div className="post__buttons__sec">
                <Heart />
                <ChatBubble />
                <PaperPlane />
              </div>
              <Bookmark />
            </div>
            <div className="post__views">10.328 views</div>
            <div className="post__desc">
              <span className="post__desc__name">Robert</span>{" "}
              <span className="post__desc__text">{post.description}</span>{" "}
              {post.hashtags.map((tag, index) => {
                return (
                  <span
                    className="post__desc__hashtag"
                    key={index}
                  >{`#${tag} `}</span>
                );
              })}
            </div>
            <div className="post__date">5 days ago</div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
