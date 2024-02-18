/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ChatMessage from "./chatMessage";
import {
  QuerySnapshot,
  addDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase";

export default function Chat({ user }) {
  console.log(user, "user");
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const messagesRef = collection(db, "messages");

  const handlesubmit = async () => {
    const date = new Date();
    await addDoc(messagesRef, {
      text,
      email: user.email,
      // logo: user.photourl,
      name: user.displayName,
      date,
    });
    setText("");
    setTimeout(
      () =>
        document
          .querySelector("#copyright")
          .scrollIntoView({ behavior: "smooth" }),
      0.5
    );
  };
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const unsubscribe = onSnapshot(messagesRef, (QuerySnapshot) => {
      const newMessages = QuerySnapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => a.date - b.date);
      setMessages(newMessages);
      setTimeout(
        () =>
          document
            .querySelector("#copyright")
            .scrollIntoView({ behavior: "smooth" }),
        0.5
      );
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className=" justify-content-center">
        <h2 className="text-primary">Lets know</h2>
      </div>
      <div className="row mt-3">
        <div className="col-xl-4 col-lg-4 col-sm-4 col-2"></div>
        <div className="col-xl-4 col-lg-4 col-sm-10 col-20 chat-message">
          {messages.map((message) => (
            // eslint-disable-next-line react/jsx-key
            <ChatMessage {...message} user={user} />
          ))}
          <div
            className="d-flex mt-1"
            style={{
              display: "flex",
              justifyContent: "end",
              paddingTop: "20px",
            }}
          >
            <input
              type="text"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                width: "300px",
                borderRadius: "20px", // Adjusted the border radius value
              }}
            />

            <button
              className=" btn btn-secondary ms-3"
              onClick={handlesubmit}
              style={{
                width: "100px",
              }}
            >
              enter
            </button>
          </div>
          <div id="copyright" className="mt-3">
            Cpoyright Reseved Mohan Dass
          </div>
        </div>
      </div>
    </div>
  );
}
