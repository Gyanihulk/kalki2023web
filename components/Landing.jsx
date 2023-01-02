import React from "react";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__web">
        <video
          playsInline
          autoPlay
          muted
          poster="https://ruttl.com/assets/img/index-hero.jpg"
        >
          <source src="/videos/2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* <!-- INtro --> */}
      <div className="intro">
        <button
          className="btn btn-two"
          onClick={() => {
            navigate("/contest");
          }}
        >
          <span>Contest Registration</span>
        </button>
      </div>

      <div className="scrollDown">
        <div className="scrollDown__wheel">
          <div className="scrollDown__wheel--inner"></div>
        </div>
        <div className="scrollDown__arrow">
          <span className="scrollDown__arrow"></span>
          <span className="scrollDown__arrow"></span>
          <span className="scrollDown__arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
