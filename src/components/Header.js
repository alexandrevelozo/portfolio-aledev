/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function navigateContact() {
  window.location.href = "#contact";
}

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#" className="text-gradient btn-link text-[32px]">
            ALEDEV
          </a>
          {/*button*/}
          <button onClick={navigateContact} className="btn btn-sm">
            Trabalhe comigo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
