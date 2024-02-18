/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import img from "../images/profile.png";
import img1 from "../images/profile2.png";
import "./chatMessage.css";

export default function ChatMessage({ text, name, logo, email, user }) {
  // console.log(text, logo, email, user, "Tamil");
  return (
    <div
      className={`d-flex ${
        email === user.email ? "justify-content-end" : "ttt"
      }`}
    >
      {/* Your content goes here */}

      {user.email === email ? (
        <div className="d-flex justify-content-end right-content">
          <div className="message-name">{name}</div>
          <span span className="message-right">
            <span className="message-text">{text}</span>
            <img src={img1} alt="logo" className="logo-icon" />
          </span>
        </div>
      ) : (
        <div className="d-flex justify-content-start left-content">
          <div className="message-name">{name}</div>
        <span className=" message-left">
          <img src={img} alt="logo" className="logo-icon" />
          <span className="message-text">{text}</span>
        </span>
        </div>
      )}
    </div>
  );
}
