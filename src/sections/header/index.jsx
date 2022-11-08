import React from "react";

const Header = ({ showTitle, toggleMenu, showMenu }) => {
  return (
    <>
      <div className="p-24 sticky top-0 drop-shadow-lg z-1">
        <div className="relative flex align-center justify-center w-full max-w-screen-lg m-auto mt-0">
          <div className="w-full p-24 flex justify-center align-center">
            <h1 className="title-text">
              Title
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
