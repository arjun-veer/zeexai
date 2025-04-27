import SmartOrganization from "../../assets/graphics/SmartOrganization.webp";
import ContextualReminders from "../../assets/graphics/ContextualReminders.webp";
import { Shield, Video, Cloud } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-primary-1500 overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat">
      <div className="text-primary-50 relative m-auto max-w-[90rem] px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <div className="bg-primary-1300 absolute top-[50%] left-[100%] h-[62.5rem] w-[62.5rem] -translate-[50%] rounded-full opacity-100 blur-[40rem] max-xl:h-[35rem] max-xl:w-[35rem] max-xl:blur-[10rem] max-lg:left-[90%] max-lg:h-[20rem] max-lg:w-[20rem]" />

        <h2 className="mb-10 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-10 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter">
          Empower Your Business
          <br />
          <span className="text-primary-500 primary-glow">Security </span>
          with AI-Driven Innovations
        </h2>

        <p className="text-primary-100 z-1 mb-28 text-center text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
          Our comprehensive security platform combines cutting-edge AI
          technology with robust infrastructure to deliver unmatched protection
          for your business assets and personnel.
        </p>

        <div className="mb-20 grid grid-cols-2 items-center gap-x-16 max-xl:mb-12 max-md:mb-16 max-md:grid-cols-1 max-md:gap-y-10">
          <figure>
            <img
              className="max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center"
              src={SmartOrganization}
              alt="Smart Organization graphic"
            />
          </figure>
          <div className="z-1 max-w-lg justify-self-end max-md:row-start-1 max-md:max-w-max">
            <p className="mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12 max-lg:tracking-tighter max-sm:text-2xl/8 max-sm:tracking-tight">
              Real-Time Protection
            </p>
            <p className="text-primary-100 z-1 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
              Stay ahead with continuous monitoring and instant alerts for
              proactive safety measures.
            </p>
            <ul className="text-primary-100 mt-4 list-inside list-disc space-y-2 text-lg font-light">
              <li className="hover:text-primary-300 transition-transform hover:scale-105">
                24/7 Surveillance with AI anomaly detection
              </li>
              <li className="hover:text-primary-300 transition-transform hover:scale-105">
                Instant Alerts to security personnel
              </li>
              <li className="hover:text-primary-300 transition-transform hover:scale-105">
                Proactive Measures with predictive analytics
              </li>
            </ul>
            <button
              className="bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover transition-properties mt-6 cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-6 max-xl:py-3 max-xl:text-base/loose"
              onClick={() => ""}
            >
              Know More
            </button>
          </div>
        </div>


        <div className="grid grid-cols-2 items-center gap-x-16 max-md:grid-cols-1 max-md:gap-y-10">
          <div className="z-1 max-w-lg items-start max-md:row-start-1 max-md:max-w-max">
            <p className="mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12 max-lg:tracking-tighter max-sm:text-2xl/8 max-sm:tracking-tight">
              Enhance Smart & Safe Security
            </p>
            <p className="text-primary-100 z-1 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
              Advanced CCTV video analysis for better security with AI that is
              compliant and privacy-focused.
            </p>
            <ul className="text-primary-100 mt-4 list-inside list-disc space-y-2 text-lg font-light">
              <li className="hover:text-primary-300 transition-transform hover:scale-105">
                Facial Recognition with privacy protection
              </li>
              <li className="hover:text-primary-300 transition-transform hover:scale-105">
                Customizable Dashboards for your security team
              </li>
              <li className="hover:text-primary-300 transition-transform hover:scale-105">
                Data Privacy compliant with global regulations
              </li>
            </ul>
            <button
              className="bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover transition-properties mt-6 cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-6 max-xl:py-3 max-xl:text-base/loose"
              onClick={() => ""}
            >
              Know More
            </button>
          </div>

          <figure className="z-1">
            <img
              className="max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center"
              src={ContextualReminders}
              alt="Contextual Reminders graphic"
            />
          </figure>
        </div>

        <div className="mb-20 grid grid-cols-2 items-center gap-x-16 max-xl:mb-12 max-md:mb-16 max-md:grid-cols-1 max-md:gap-y-10">
          <figure>
            <img
              className="max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center"
              src={SmartOrganization}
              alt="Smart Organization graphic"
            />
          </figure>
          <div className="z-1 max-w-lg justify-self-end max-md:row-start-1 max-md:max-w-max">
            <p className="mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12 max-lg:tracking-tighter max-sm:text-2xl/8 max-sm:tracking-tight">
              Seamless Integration
            </p>
            <p className="text-primary-100 z-1 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
              Easily connect our security solutions with your existing systems
              without extensive downtime.
            </p>
            <ul className="text-primary-100 mt-4 list-inside list-disc space-y-2 text-lg font-light">
              <li className="hover:text-primary-300 transition-transform hover:scale-105">
                Cloud Sync across all security modules
              </li>
              <li className="hover:text-primary-300 transition-transform hover:scale-105">
                API Access for custom development
              </li>
              <li className="hover:text-primary-300 transition-transform hover:scale-105">
                Multi-Device Support for mobile and desktop
              </li>
            </ul>
            <button
              className="bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover transition-properties mt-6 cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-6 max-xl:py-3 max-xl:text-base/loose"
              onClick={() => ""}
            >
              Know More
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
}
