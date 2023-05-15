import { useState } from "react";
import ArrowLeft from "../assets/arrow-left";
import Camera from "../assets/camera";
import Ellipsis from "../assets/ellipsis";
import Emoji from "../assets/emoji";
import PaperClip from "../assets/paper-clip";
import Phone from "../assets/phone";
import SendBtn from "../assets/send-btn";
import VideoCamera from "../assets/video-camera";

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [display, setDisplay] = useState<string[]>([]);

  const handleClick = () => {
    let textArea = document.querySelector(".text-area") as HTMLTextAreaElement;
    textArea.value = "";
  };

  return (
    <div className="container">
      <h1>Chat aplikacija</h1>
      <div className="chat">
        <div className="chat__header">
          <div className="chat__header__back">
            <ArrowLeft />
          </div>
          <div>
            <img
              className="chat__header__profile"
              src="https://source.unsplash.com/random/40x40/?person"
              alt="A picture of a person"
            />
          </div>
          <div className="chat__header__name">
            <div>John Smith</div>
            <div>Zadnje gledano danas u...</div>
          </div>
          <div className="chat__header__icons">
            <div>
              <VideoCamera />
            </div>
            <div>
              <Phone />
            </div>
            <div>
              <Ellipsis />
            </div>
          </div>
        </div>
        <div className="chat__field">
          <div className="chat__field__message__wrap">
            {display.map((message) => {
              return <div className="chat__field__message">{message}</div>;
            })}
          </div>
        </div>
        <div>
          <div className="chat__form">
            <div className="chat__form__input">
              <textarea
                className="text-area"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                className="chat__form__btn"
                onClick={() => {
                  setDisplay((current) => [...current, message]);
                  handleClick();
                }}
              >
                <SendBtn />
              </button>
              <Emoji />
              <PaperClip />
              <Camera />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
