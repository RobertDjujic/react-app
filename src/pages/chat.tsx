import { useState } from "react";
import ArrowLeft from "../assets/arrow-left";
import Camera from "../assets/camera";
import Ellipsis from "../assets/ellipsis";
import Emoji from "../assets/emoji";
import PaperClip from "../assets/paper-clip";
import Phone from "../assets/phone";
import SendBtn from "../assets/send-btn";
import VideoCamera from "../assets/video-camera";
import Backspace from "../assets/backspace";

type ChatType = {
  id: number;
  label: string;
};

const Chat = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<ChatType[]>([]);

  const handleAdd = () => {
    if (inputValue === "") {
      return;
    }
    const newChatMessage = {
      id: chatMessages.length + 1,
      label: inputValue,
    };
    const newChat = [...chatMessages, newChatMessage];
    setChatMessages(newChat);
    setInputValue("");
  };

  const handleRemove = (id: number) => {
    const newChatMessages = chatMessages.filter((message) => message.id !== id);
    setChatMessages(newChatMessages);
  };

  return (
    <div className="container">
      <h1>Chat aplikacija</h1>
      <div className="chat">
        <header className="chat__header">
          <ArrowLeft />
          <div className="chat__header__info">
            <img
              className="chat__header__info__pic"
              src="https://source.unsplash.com/random/40x40/?person"
              alt="A picture of a person"
            />
            <div>
              <div className="chat__header__info__name">John Smith</div>
              <div className="chat__header__info__seen">
                Zadnje gledano danas u...
              </div>
            </div>
          </div>
          <div className="chat__header__icons">
            <VideoCamera />
            <Phone />
            <Ellipsis />
          </div>
        </header>
        <main className="chat__field">
          <div className="chat__field__message__wrap">
            {chatMessages.map((message) => {
              return (
                <div className="chat__field__message" key={message.id}>
                  {message.label}
                  <button
                    className="chat__field__message__delete"
                    onClick={() => handleRemove(message.id)}
                  >
                    <Backspace />
                  </button>
                </div>
              );
            })}
          </div>
        </main>
        <div className="chat__form">
          <div className="chat__form__input">
            <textarea
              className="chat__form__input__text"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleAdd();
                }
              }}
              value={inputValue}
            ></textarea>
            <button className="chat__form__btn" onClick={() => handleAdd()}>
              <SendBtn />
            </button>
            <Emoji />
            <PaperClip />
            <Camera />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
