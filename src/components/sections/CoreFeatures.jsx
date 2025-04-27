import { Shield, Video, Cloud } from 'lucide-react';
export default function CoreFeatures() {
    return (
<section className="bg-primary-1500  var(--color-primary-1300) overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat">
      <div className="text-primary-50 relative m-auto max-w-[90rem] px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        

<section className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl/16 font-semibold text-white mb-4">Our Core Features</h1>
        <div className="w-12 h-1 mx-auto bg-primary-500"></div> {/* Blue underline */}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {/* Card 1 */}
        <li className="bg-primary-1300 text-white rounded-xl p-8 border border-transparent hover:border-primary-500 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <div className="flex justify-center mb-6">
            <Shield className="h-12 w-12 text-primary-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center">Advanced Threat Detection</h3>
          <div className="w-10 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-300 font-light">
            Our AI-powered threat detection system continuously monitors and identifies potential security risks before they become problems.
          </p>
        </li>

        {/* Card 2 */}
        <li className="bg-primary-1300 text-white rounded-xl p-8 border border-transparent hover:border-primary-500 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <div className="flex justify-center mb-6">
            <Video className="h-12 w-12 text-primary-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center">AI-Visual Surveillance Analytics</h3>
          <div className="w-10 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-300 font-light">
            Intelligent video analysis identifies unusual patterns and behavior while maintaining privacy and compliance standards.
          </p>
        </li>

        {/* Card 3 */}
        <li className="bg-primary-1300 text-white rounded-xl p-8 border border-transparent hover:border-primary-500 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <div className="flex justify-center mb-6">
            <Cloud className="h-12 w-12 text-primary-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center">Seamless Integration</h3>
          <div className="w-10 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-300 font-light">
            Plug-and-play setup, multi-device support, customizable dashboard.
          </p>
        </li>
      </ul>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button
          className="bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-6 max-xl:py-3 max-xl:text-base/loose"
          onClick={() => ('')}
        >
          Get Started
        </button>
      </div>
    </section>
    </div>
    </section>
    )
}