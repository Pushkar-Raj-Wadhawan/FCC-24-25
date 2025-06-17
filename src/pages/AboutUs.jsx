import Particles from "../components/ParticleBackground"
import Collaborate from "../components/Collaborate"
import Vision from "../assets/images/about/Vision.png"
import Mission from "../assets/images/about/Mission.png"

function AboutUs() {

  return (
    <div className="w-full min-h-screen mx-auto max-w-screen-2xl flex flex-col gap-2.5">
      <div
        id="Hero Section"
        className="w-full h-[530px] relative
                   py-16 md:py-24 lg:py-32
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24
                   flex flex-col items-center justify-center
                   gap-12 rounded-lg shadow-md"
      >
        <div id="Hero Background Container" className="w-[1557px] h-[530px] absolute inset-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div id="Hero Container" class="w-full max-w-[1006px] mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8">
          <div id="Hero text container" class="w-full text-center gap-4">
            <div id="Hero title" class="font-Family-primary font-semibold text-5xl md:text-6xl leading-tight tracking-normal">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#4E56D3_25.48%] via-[#A3ACD9_60.58%] to-[#F3FFD8_100%]" >
                We're More Than a Club
              </span>
              <span class="text-transparent block bg-clip-text bg-gradient-to-r from-[#4E56D3_25.48%] via-[#A3ACD9_60.58%] to-[#F3FFD8_100%]">
                We're a Movement
              </span>
            </div>
            <div id="Hero subtitle" class="font-[Body/3/fontFamily] font-normal text-lg md:text-xl leading-relaxed tracking-[Heading/H3/letterSpacing] text-center mt-4">
              <span class="text-transparent bg-clip-text bg-[var(--Website-Neutral-3,#BBBBBB)]">Founded by students, led with purpose. At FCC IIT Hyderabad, we're cultivating the next generation of financial leaders and consultants - through collaboration, action, and real-world impact.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1006px] mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* About Section */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <h3 className="font-sans font-semibold text-2xl text-white">
              About Us
            </h3>
            <p className="text-[#BBBBBB]">
              Founded by students, led with purpose. At FCC IIT Hyderabad, we're cultivating the next generation of financial leaders and consultants — through collaboration, action, and real-world impact.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-center gap-4 md:w-1/3 text-center rounded-[10px] border border-[#5a5a5a] bg-[#1b1a1a] p-4">
            <div className="relative h-24 w-24 mb-4 overflow-hidden rounded-lg">
              <img
                src={Vision}
                alt="Vision Illustration"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <h3 className="font-sans font-semibold text-2xl text-white">
              Vision
            </h3>
            <p className="text-[#BBBBBB]">
              Lorem ipsum duis pellentesque amet ut imperdiet lorem et commodo a nulla diam.
            </p>
          </div>

          {/* Mission Section*/}
          <div className="flex flex-col items-center gap-4 md:w-1/3 text-center rounded-[10px] border border-[#5a5a5a] bg-[#1b1a1a] p-4">
            <div className="relative h-24 w-24 mb-4 overflow-hidden rounded-lg">
              <img
                src={Mission}
                alt="Mission Illustration"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <h3 className="font-sans font-semibold text-2xl text-white">
              Mission
            </h3>
            <p className="text-[#BBBBBB]">
              Lorem ipsum duis pellentesque amet ut imperdiet lorem et commodo a nulla diam.
            </p>
          </div>

        </div>
      </div>

      <div>
        <Collaborate></Collaborate>
      </div>
    </div>
  )
}

export default AboutUs
