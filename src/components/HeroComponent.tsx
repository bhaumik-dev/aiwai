export default function HeroSection() {
  return (
    <section className="py-10 px-4 md:px-20 lg:px-20 bg-white">
      {/*Container*/}
      <div className="lg:max-w-7xl lg:flex-row lg:h-lvh max-w-fit h-vh mx-auto flex flex-col items-center">
        {/*Left side*/}
        <div className="flex flex-col gap-6 lg:gap-8 lg:w-7/12 w-full">
          {/*Tag/Pill Badge*/}
          <div className="inline-block self-start bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
            <span>Seamless Integration</span>
          </div>

          {/*Heading and Subheading */}

          <h1 className="lg:text-6xl text-5xl font-bold leading-tight">
            Make Web Accessible with AI Accessbility Insights
          </h1>
          <p className="text-gray-600 lg:text-xl text-lg leading-8">
            Scan any website for accessibility issues and get instant,
            AI-powered audits and fix suggestions — so your digital experiences
            work for everyone.
          </p>

          {/*Buttons*/}
          <div className="flex flex-row gap-3 mt-3">
            <span className="bg-blue-600 text-white px-6 py-2 rounded shadow">
              Get Started
            </span>
            <span className="bg-gray-200 text-black px-6 py-2 rounded">
              Learn More
            </span>
          </div>

          {/*Ratings*/}
          <div>
            <div className="text-sm text-gray-700 flex items-center gap-2 mt-2">
              <span className="flex">
                <img
                  src="/icons/userratingimage.svg"
                  className="w-28 h-12"
                  alt="5 star ratings icon"
                />
              </span>

              <span className="text-sm text-gray-500">
                <img
                  src="/icons/fivestaricon.svg"
                  className="w-20 h-8"
                  alt="5 star ratings icon"
                />
                <span>4.8 from 500+ reviews</span>
              </span>
            </div>
          </div>
        </div>

        {/*Right side*/}
        <div className="lg:w-5/12 md:w-full">
          {/*Main image*/}
          <div className="relative">
            <img
              src="./heroimage.svg"
              alt="Hero section image of a simple dashboard screen."
              className="w-full"
            />
            <img
              className="absolute w-40 lg:top-24 md:top-32 top-12 left-0 right-0 "
              src="./noissues.svg"
              alt="No issue found image with icon on hero."
            />
            <img
              className="absolute w-40 lg:top-78 md:top-90 lg:left-70 md:left-80 left-54 right-0 top-54"
              src="./missingalttext.svg"
              alt="Color contrast issue image with icon on hero."
            />
            <img
              className="absolute w-40 lg:left-80 lg:top-8 md:left-86 md:top-12 top-2 left-52 right-0 "
              src="./keyboardtrap.svg"
              alt="No issues found."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
