import React from "react";

const Home = () => {
  return (
    <div>
      <div className="mt-8 md:mt-12 md:max-w-[90%] mx-auto w-full">
        <div className="">
          <video
            className="w-full min-h-[690px] max-h-[690px] object-cover"
            muted
            loop
            controls={false}
          >
            <source src="home-video.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h1 className="text-2xl md:text-7xl text-left mt-10 w-5/6 mx-auto">
            We create radical new technologies <br /> to solve some of the
            world’s <br />
            hardest problems
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center my-28 md:my-72">
          <h1 className=" text-2xl md:text-7xl md:w-2/5 my-10 md:my-20">
            X - The Moonshot Factory
          </h1>
          <h3 className="text-sm md:text-2xl leading-loose w-4/5 md:w-3/5">
            X is a diverse group of inventors and entrepreneurs who build and
            launch technologies that aim to improve the lives of millions, even
            billions, of people. Our goal: 10x impact on the world’s most
            intractable problems, not just 10% improvement. We approach projects
            that have the aspiration and riskiness of research with the speed
            and ambition of a startup.
          </h3>
        </div>
      </div>
      <div>
        <h3 className="text-sm md:text-2xl px-6 py-3 bg-yellow-500 w-1/2 md:w-1/4 text-center">
          PUBLIC X PROJECTS
        </h3>
      </div>
    </div>
  );
};

export default Home;
