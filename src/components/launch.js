import React from "react";
import image from "../hidden.svg";

function Launch() {
  return (
    <div
      style={{
        height: "100vh",
        padding: "3rem 0",
      }}
      className="launch"
    >
      <div
        style={{
          background: "#fff",
          width: "80%",
          margin: "0 auto",
          height: "80vh",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <div
          className="flex-box"
          style={{
            marginTop: "25px",
          }}
        >
          <div
            style={{
              marginTop: "25px",
            }}
          >
            <small>Under Revamp</small>
            <h4
              style={{
                letterSpacing: "2px",
                marginTop: "10px",
              }}
            >
              GET NOTIFIED WHEN WE ARE BACK!
            </h4>

            <div style={{ marginTop: "50px" }}>
              <input
                type="email"
                placeholder="Enter your email..."
                style={{
                  borderRadius: "5px",
                  border: "1px solid gray",
                  padding: "5px",
                }}
              />
              <button>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScKEuhZo0Kkc5ZpHIoQMgVUVi1CjRKRYORwaySYQxZxjadUOw/viewform?usp=sf_link">
                  Notify Me
                </a>
              </button>
            </div>
          </div>
          <img src={image} height="30%" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Launch;
