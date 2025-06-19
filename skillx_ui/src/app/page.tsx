export default function Home() {
  return (
    <>
        {/* Header */}
        <header className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
          <div className="font-bold text-2xl">Skillx</div>
          <div className="flex space-x-4">
            <button className="hover:bg-blue-600 px-4 py-2 rounded-md">About</button>
            <button className="hover:bg-blue-600 px-4 py-2 rounded-md">Services</button>
            <button className="hover:bg-blue-600 px-4 py-2 rounded-md">Portfolio</button>
            <button className="hover:bg-amber-700 bg-amber-600 text-white px-4 py-2 rounded-md">Login</button>
          </div>
        </header>

        <section id="section1" className="section bg-gray-100 h-[400px] relative">
          <video
            muted
            loop
            autoPlay
            className="absolute top-0 left-0 h-full w-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3254066/3254066-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative flex items-center justify-center h-full">
            <h1 className="text-6xl font-bold text-black">Welcome to the party</h1>
          </div>
          </section>
        {/* Section 2 */}
        <section id="sectionbody" className="mr-24 ml-24">

        <section id="section2" className="section section-2 h-[400px] m-1 bg-gray-800 text-white px-4 py-2 rounded-md">
          <h1>Solutions</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  md:gap-4 lg:gap-4 xl:gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((icon) => (
              <button className="icon-button focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform scale-100 hover:scale-105" key={icon}>
                  
                  <img
                    src={icon%2===0?"/cloud-network.gif":"/save-money.gif"}
                    alt="Animated Next.js Icon"
                    style={{
                      width: '100px',  // Adjust width as needed
                      height: 'auto', // Maintain aspect ratio
                    }}
                  />
              </button>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="section3" className="section bg-gray-100 h-[200px]">
          <h1>Testimonials</h1>
          <p>Here are some testimonials from our satisfied customers.</p>
        </section>

        {/* Section 4 */}
        <section id="section4" className="section">
          <h1>Contact Us</h1>
          <p>Get in touch with us today!</p>
        </section>
      </section>
      
    </>
  );
}