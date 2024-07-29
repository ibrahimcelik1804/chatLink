import React from "react";
import { auth } from "../firebase/config";

const Messages = ({ data }) => {
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  return (
    <div className="msg-other">
      <p className="user-info">
        <img src={data.author.photo} alt="profil" />
        <span>{data.author.name}</span>
      </p>
      <span className="msg-text">{data.text}</span>
    </div>
  );
};

export default Messages;
