/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./components/Chat";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config/firebase";
import img from "./images/image.jpeg";

function App() {
  const [user, setuser] = useState(null);

  const hadlesignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => setuser(result._tokenResponse))
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      {user ? (
        <Chat user={user} />
      ) : (
        <div className="p-5 text-center">
          <div>
            <img
              src={img}
              alt="logo"
              width={200}
              height={200}
              className="pr-2"
              style={{ borderRadius: 200 }}
            />
          </div>
          <div>
            <button
              className="btn-btn-primary"
              style={{ margintop: "80px" }}
              onClick={hadlesignIn}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
