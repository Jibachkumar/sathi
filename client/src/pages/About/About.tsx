import { BrainCircuit, Sprout, MessagesSquare, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function AiPrinciplesHero() {
  return (
    <div className="relative overflow-hidden lg:h-[650px] pb-28 pt-16 sm:pb-36  bg-gradient-to-b from-[#fffefe] via-[#f3f3f3] to-[#fcfcfc]">
      {/* wave divider */}
      <svg
        className="absolute inset-x-0 bottom-0 h-32 w-full text-white"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,100 L480,40 L960,80 L1440,30 L1440,120 L0,120 Z"
        />
      </svg>

      <div className="mx-auto grid lg:max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2">
        {/* Text */}
        <div className="mt-14">
          <h1 className="font-serif text-4xl font-bold leading-tight text-faint lg:text-5xl">
            Sathi AI Development Principles
          </h1>
          <p className="mt-6 lg:max-w-xl lg:text-lg text-md font-medium text-faint/95">
            We're dedicated to building HR software that gives people back their
            time — so HR teams can focus on people, not paperwork.
          </p>
        </div>

        {/* Mascot illustration */}
        <div className="realtive mt-14 lg:h-[400px] lg:w-[600px] w-[400px] h-[300px] mx-auto">
          <img
            src="https://res.cloudinary.com/dhadohg2h/image/upload/v1783623306/A_3D_animation_style_rendering_of__subject_1__with_all_elements_from_the_original_image__including_t-removebg-preview_sggbim.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function EmpowerSection() {
  const cards = [
    {
      icon: BrainCircuit,
      title: "Save time",
      body: "The repetitive parts of HR work shouldn't take up all your energy. Sathi should quietly handle the busywork so your team has more room to think and do their best work.",
    },
    {
      icon: Sprout,
      title: "Support growth",
      body: "when routine tasks take care of themselves, HR can spend that time where it matters most — coaching people, shaping culture, and building a workplace people want to stay in.",
    },
    {
      icon: MessagesSquare,
      title: "Stay connected",
      body: "Fast, clear answers keep employees moving instead of waiting around, and free up HR to be known for solving real problems, not just processing requests",
    },
  ];
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl font-bold text-faint sm:text-4xl">
          2. HR, minus the busywork.
        </h2>
        <p className="mx-auto mt-5 max-w-4xl text-faint">
          Software can handle the repetitive stuff. It can't build trust with
          your team, resolve a hard conversation, or shape your company culture.
          At Sathi, we build AI to take care of the first part, so you have more
          time for the second.
        </p>
      </div>

      <div className="mt-14 max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {cards.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="border border-gray-100 rounded-2xl p-8 bg-white"
          >
            <Icon size={32} strokeWidth={1.75} className="text-green" />
            <h3 className="mt-5 text-lg font-semibold text-faint">{title}</h3>
            <p className="mt-3 leading-relaxed text-faint text-justify">
              {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-white">
      {/* Hero with wavy light-green backdrop */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f6f8f4]" />
        <svg
          className="absolute -bottom-1 left-0 w-full text-white"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ height: 80 }}
        >
          <path
            d="M0,80 C300,0 500,80 800,40 C1050,10 1250,60 1440,20 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
        <div className="relative max-w-3xl mx-auto text-center px-6 pt-16 pb-24">
          <h1 className="font-serif font-bold text-faint text-4xl md:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 text-faint text-base md:text-md">
            Have questions about Sathi? We're here to help.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:gap-14 gap-2">
        {/* Left: contact details */}
        <div>
          <h2 className="font-serif font-bold text-faint/95 text-2xl lg:text-3xl">
            Contact our team
          </h2>
          <p className="mt-3 text-faint lg:text-md text-md leading-relaxed">
            Whether you have a question, a request, or just want to see Sathi in
            action, send us a message and we'll get back to you as soon as we
            can.
          </p>

          <div className="mt-8 flex items-start gap-3">
            <Phone size={20} className="text-green mt-0.5" strokeWidth={1.75} />
            <div>
              <p className="font-semibold text-faint text-lg">Support Hours</p>

              <div className="mt-3">
                <p className="font-semibold text-faint text-md">Nepal</p>
                <p className="text-faint text-[15px]">
                  Sunday to Friday, 10 AM to 6 PM NPT
                </p>
              </div>

              <p className="mt-3 text-faint text-sm">
                Email:{" "}
                <Link
                  to="subhamchaudhary199@gmail.com"
                  className="text-green underline"
                >
                  hello@sathi.com
                </Link>
              </p>
              <p className="text-faint text-sm">
                Phone:{" "}
                <button className="text-green underline">
                  +977-9843962498
                </button>
              </p>
            </div>
          </div>

          <h3 className="mt-8 font-serif font-bold text-faint text-lg">
            Find us on social media
          </h3>
          <div className="mt-3 flex items-center gap-4 text-green">
            <FaYoutube size={18} strokeWidth={1.75} />
            <FaXTwitter size={18} strokeWidth={1.75} />
            <FaLinkedinIn size={18} strokeWidth={1.75} />
            <FaInstagram size={18} strokeWidth={1.75} />
            <FaFacebookF size={18} strokeWidth={1.75} />
          </div>
        </div>

        {/* Right: form */}
        <div className="border border-gray-200 rounded-2xl p-8 md:mt-0 mt-8">
          <div className="text-center">
            <h2 className="font-serif font-bold text-green text-2xl">
              Get in touch
            </h2>
            <p className="mt-1 text-faint text-md">
              Just complete the form below
            </p>
          </div>

          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-green"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-green"
              />
            </div>

            <input
              type="email"
              placeholder="Work Email*"
              className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-green"
            />

            <input
              type="text"
              placeholder="Company Name*"
              className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-green"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number*"
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-green"
              />
              <select className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full text-gray-500 focus:outline-none focus:border-green">
                <option>Employee Count*</option>
                <option>1–10</option>
                <option>11–50</option>
                <option>51–200</option>
                <option>200+</option>
              </select>
            </div>

            <select className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full text-gray-500 focus:outline-none focus:border-green">
              <option>Country*</option>
              <option>Nepal</option>
              <option>Other</option>
            </select>

            <select className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full text-gray-500 focus:outline-none focus:border-green">
              <option>Are you a Sathi customer?</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <select className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full text-gray-500 focus:outline-none focus:border-green">
              <option>Subject*</option>

              <option>Support request</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>

            <textarea
              placeholder="Message*"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full resize-none focus:outline-none focus:border-green"
            />

            <p className="text-xs text-faint leading-relaxed">
              I agree to receive product updates and messages from Sathi by
              email and phone. My data will be handled according to the{" "}
              <a href="#" className="text-green-700 underline">
                Privacy Notice
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full bg-green hover:bg-green-dim cursor-pointer text-white font-semibold rounded-lg py-3 text-md transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      {/* info section */}
      <div>
        <AiPrinciplesHero />
      </div>

      {/* about section */}
      <div className=" px-6 pb-20 pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold text-faint sm:text-4xl">
            Why you can trust SathiHR
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8">
            <svg
              className="h-9 w-9 text-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.75 4.5 5.5v5.5c0 5.02 3.2 8.85 7.5 10.25 4.3-1.4 7.5-5.23 7.5-10.25V5.5L12 2.75Z"
              />
              <rect
                x="9.25"
                y="11"
                width="5.5"
                height="4.5"
                rx="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 11V9.5a1.5 1.5 0 0 1 3 0V11"
              />
            </svg>

            <h3 className="mt-5 text-lg font-semibold text-faint">
              Secure by design
            </h3>
            <p className="mt-3 leading-relaxed text-faint text-justify">
              We treat security as a foundation, not an afterthought, to ensure
              our customers' payroll and employee data stays safe—not only from
              outside attacks, but also from unauthorized access within our own
              systems. Visit our security page to see how we protect your data
              at every layer.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8">
            <svg
              className="h-9 w-9 text-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
              />
              <circle
                cx="12"
                cy="12"
                r="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 20 20 4"
              />
            </svg>

            <h3 className="mt-5 text-lg font-semibold text-faint">
              Your data, your company only
            </h3>
            <p className="mt-3 leading-relaxed text-faint text-justify">
              Multi-tenant software often means shared infrastructure. It
              doesn't mean shared visibility. Each company's records in Sathi
              are kept strictly separate, so there's no scenario where your
              numbers end up visible to, or blended with, anyone else's.
            </p>
          </div>
        </div>
      </div>

      {/* trust foundation section */}
      <div className="px-6 py-20 bg-[#f6f8f4]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-faint sm:text-4xl">
            1. Build on a foundation of trust
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-faint">
            Trust is the foundation of everything we're building. We're
            developing Sathi's AI to be responsible, ethical, and respectful of
            your data from the start — not adjusted for it later.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3 md:grid-cols-2">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-8">
            <svg
              className="h-9 w-9 text-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <circle
                cx="10.5"
                cy="10.5"
                r="6.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.25 15.25 20.5 20.5"
              />
            </svg>

            <h3 className="mt-5 text-lg font-semibold text-faint">
              Built for transparency
            </h3>
            <p className="mt-3 leading-relaxed text-faint text-justify">
              We're designing Sathi's AI so you can always understand how a
              decision was reached — a leave calculation, a flagged payroll
              anomaly, an AI-suggested answer — never a black box you have to
              take on faith.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white p-8">
            <svg
              className="h-9 w-9 text-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v16" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 6h10" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.5 19h7"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6 2 10.5a2.25 2.25 0 0 0 4.5 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 6l-2 4.5a2.25 2.25 0 0 0 4.5 0Z"
              />
            </svg>

            <h3 className="mt-5 text-lg font-semibold text-faint">
              Built to be fair
            </h3>
            <p className="mt-3 leading-relaxed text-faint text-justify">
              We're building Sathi's AI to treat every employee the same way,
              regardless of role, department, or background. Fairness is a
              starting requirement here, not an afterthought.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white p-8">
            <svg
              className="h-9 w-9 text-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.75 4.5 5.5v5.5c0 5.02 3.2 8.85 7.5 10.25 4.3-1.4 7.5-5.23 7.5-10.25V5.5L12 2.75Z"
              />
              <rect
                x="9.25"
                y="11"
                width="5.5"
                height="4.5"
                rx="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 11V9.5a1.5 1.5 0 0 1 3 0V11"
              />
            </svg>

            <h3 className="mt-5 text-lg font-semibold text-faint">
              Built with security in mind
            </h3>
            <p className="mt-3 leading-relaxed text-faint text-justify">
              Security is a principle we're building Sathi around from the
              ground up, so protection is part of how the system works, not
              something layered on top once it's finished.
            </p>
          </div>
        </div>
      </div>

      {/* empower section */}
      <div>
        <EmpowerSection />
      </div>

      {/* contact section */}
      <div>
        <ContactSection />
      </div>
    </div>
  );
}

export default About;
