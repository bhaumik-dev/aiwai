export default function HeroSection() {
  return (
    <section className="py-5 px-4 md:px-6 bg-white">
      {/*Container*/}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center h-lvh">
        {/*Left side*/}
        <div className="flex flex-col gap-8 w-9/12">
          {/*Tag/Pill Badge*/}
          <div className="inline-block self-start bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
            <span>Seamless Integration</span>
          </div>

          {/*Heading and Subheading */}

          <h1 className="text-7xl md:text-5xl font-bold leading-tight">
            Make Web Accessible with AI Accessbility Insights
          </h1>
          <p className="text-gray-600 text-xl">
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
            <div className="text-sm text-gray-500 flex items-center gap-2 mt-3">
              <span className="flex gap-1">
                <img
                  src="/icons/fivestaricon.svg"
                  className="w-18 h-12"
                  alt="5 star ratings icon"
                />
              </span>
              <span>4.8</span>
            </div>
            <div>
              <span>people Images</span>
              <span>From 500+ reviews</span>
            </div>
          </div>
        </div>

        {/*Right side*/}
        <div className="w-3/12">
          {/*Main image*/}
          <div>Image</div>
        </div>
      </div>
    </section>
  );
}
