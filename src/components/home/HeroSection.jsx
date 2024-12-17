import React from "react";

const HeroSection = () => {
  return (
    <section className="">
      <div className="relative">
        <div className="">
          <img
            className="object-cover"
            src="/images/selfiePlane.jpg"
            alt="selfie_plane"
          />
        </div>{" "}
        <div className="absolute w-[40%] top-4 lg:top-10 right-4 lg:left-16  lg:h-[300px]  lg:bg-slate-50 lg:bg-opacity-60 lg:rounded-lg lg:p-10">
          <h6 className="hidden text-2xl mb-4 font-semibold lg:block">
            Empowering Youth, Building Upcoming Future For Better
          </h6>
          <p className="hidden text-xl mb-6 lg:block">
            Join us in supporting the youth generation, training young people, and
            community development for the young people around the world.
          </p>
          <div className="flex justify-around w-56 lg:h-10">
            <button className="bg-[#209850] text-[white] px-2 rounded-md">
              Get Involved
            </button>
            <button className="bg-[#209850] text-[white] px-2 rounded-md">
              Donate Now
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="px-4 bg-white lg:px-80 h-[300px] lg:h-[400px]">
        <h6 className="flex justify-center text-center items-center text-3xl font-bold h-[40px] lg:h-[50px]">
          Who We Are
        </h6>
        <p className="flex text-lg lg:text-2xl font-semibold justify-center text-center items-center h-[220px] lg:h-[300px]">
          The Youth Generation Club is a registered non-profit organization
          dedicated to empowering young people through education, training
          them, and sustainable development. Founded with a mission to
          support the development of young people, we strive to create
          opportunities for a brighter future while preserving our precious time.
        </p>
        <div className="flex justify-center items-center h-[40px] lg:h-[50px]">
          <button className="flex text-1xl font-semibold justify-center text-center">
            Read more {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;