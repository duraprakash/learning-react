import React from "react";

const FooterMain = () => {
  return (
    <>
      <footer className="bg-[#D9D9D9] lg:px-14">
        <div className="bg-gray-900 flex justify-between text-white p-8">
          <div className="text-left mb-6">
            <div className="mb-2 lg:mb-5">
              <h5 className="text-3xl font-bold">Youth Generation Club</h5>
              <p>Pokhara Metropolitan-10, Zero KM, Pokhara</p>
            </div>
            <div className="">
              <p>Contact us: 01-234567</p>
              <p>Email: info@youthgeneration.club</p>
            </div>
          </div>

          <div className="">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-white text-2xl">
                <img
                  height={30}
                  width={30}
                  src="images/youtube.png"
                  alt="link1"
                />
              </a>
              <a href="#" className="text-white text-2xl">
                <img height={30} width={30} src="images/youtube.png" alt="link2" />{" "}
              </a>
              <a href="#" className="text-white text-2xl">
                <img
                  height={30}
                  width={30}
                  src="images/youtube.png"
                  alt="link3"
                />{" "}
              </a>
              <a href="#" className="text-white text-2xl">
                <img height={30} width={30} src="images/youtube.png" alt="link4" />{" "}
              </a>
            </div>
            <a href="#" className="text-white hover:underline">
              SITE MAP
            </a>
          </div>
        </div>
        <div className="text-center mt-0 p-4 lg:mt-2">
          <p>© 2024 Youth Generation Club, All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default FooterMain;