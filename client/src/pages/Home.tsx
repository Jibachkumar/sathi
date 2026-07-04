import {
  UserPlus,
  BarChart3,
  Clock3,
  Settings,
  Star,
  Rocket,
  Wallet,
  Users,
  Fingerprint,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  LayoutGrid,
} from "lucide-react";
import { useRef, useState } from "react";

const cards = [
  {
    title: "Hiring & Onboarding",
    icon: UserPlus,
  },
  {
    title: "HR Data & Reporting",
    icon: BarChart3,
  },
  {
    title: "Payroll & Time",
    icon: Clock3,
  },
  {
    title: "Benefits Administration",
    icon: Settings,
  },
  {
    title: "Employee Management",
    icon: Star,
  },
  {
    title: "Performance Analytics",
    icon: Rocket,
  },
  {
    title: "Compensation",
    icon: Wallet,
  },
];

const modules = [
  {
    title: "HR",
    icon: Users,
    description:
      "Automate hiring, onboarding, employee records, and org management — all in one place.",
    href: "#",
  },
  {
    title: "Payroll",
    icon: Wallet,
    description:
      "Run accurate payroll every cycle, with SSF, CIT, and TDS calculated automatically.",
    href: "#",
  },
  {
    title: "Attendance",
    icon: Fingerprint,
    description:
      "Face recognition and GPS attendance, mapped natively to the Nepali BS calendar.",
    href: "#",
  },
  {
    title: "AI Assistant",
    icon: Sparkles,
    description:
      "Employees get instant answers in Nepali or English, while AI flags payroll errors early.",
    href: "#",
  },
  {
    title: "Compliance",
    icon: ShieldCheck,
    description:
      "Stay audit-ready with automatic SSF and CIT filings, and up-to-date IRD tax slabs.",
    href: "#",
  },
  {
    title: "Performance",
    icon: TrendingUp,
    description:
      "Set goals, run reviews, and track promotions without button single spreadsheet.",
    href: "#",
  },
];

const industries = [
  {
    title: "IT & Software",
    description:
      "Manage remote and hybrid teams, contractor payments, and performance reviews from one dashboard.",
    img: " https://res.cloudinary.com/dhadohg2h/image/upload/v1783158120/it_and_software_bs6zdk.png",
    alt: "it and software",
  },
  {
    title: "Finance & Banking",
    description:
      "Branch-wise reporting, strict SSF/CIT compliance, and role-based access built for regulated teams.",
    img: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783158351/bank_fqj925.png",
    alt: "finance",
  },
  {
    title: "Construction & Real Estate",
    description:
      "Site-wise attendance and daily-wage payroll for contract labor, with high-turnover workforces in mind.",
    img: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783158406/construction_and_real_state_qr9qu2.avif",
    alt: "contruction",
  },
  {
    title: "Manufacturing",
    description:
      "Shift management, overtime-heavy payroll, and face recognition attendance built for the factory floor.",
    img: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783158469/manufacturing_weppmz.jpg",
    alt: "manufacturing",
  },
  {
    title: "Retail & Trading",
    description:
      "Multi-branch operations, commission-based pay, and easy onboarding for part-time and seasonal staff.",
    img: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783158517/retail_and_trading_uyk0rz.png",
    alt: "retail",
  },
  {
    title: "Hospitality",
    description:
      "Shift scheduling, service charge distribution, and fast hiring workflows for seasonal demand.",
    img: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783158556/hospitality_jre8ho.jpg",
    alt: "Hospitality",
  },
  {
    title: "Healthcare",
    description:
      "24/7 shift rotations, credential tracking, and on-call pay for hospitals and clinics.",
    img: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783158606/healthcare_jiwr4z.jpg",
    alt: "helathcare",
  },
  {
    title: "NGOs & INGOs",
    description:
      "Donor and grant-based reporting, project-wise cost allocation, and mixed expat/local payroll.",
    img: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783158646/NGO_INGOs_taplak.jpg",
    alt: "NGO",
  },
];

const valueProps = [
  {
    icon: RefreshCw,
    title: "Save money by eliminating duplicate systems",
    description:
      "One platform replaces spreadsheets, a separate payroll tool, and a separate attendance app — cutting software spend and the hours spent reconciling them.",
  },
  {
    icon: LayoutGrid,
    title: "Automate end-to-end payroll, not just parts of it",
    description:
      "Run attendance, calculate SSF, CIT, and TDS, and generate payslips instantly — without exporting to a spreadsheet or switching tools halfway through.",
  },
  {
    icon: Sparkles,
    title: "Start with real data, get AI that actually helps",
    description:
      "Because attendance, leave, and payroll live in one place, Sathi's AI assistant gives employees real answers — not a chatbot guessing from disconnected records.",
  },
];

const spokes = [
  {
    icon: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783194664/user_icon_ysn90s.png",
    x: 12,
    y: 15,
    side: "left",
  },
  {
    icon: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783194728/payroll_icon_ezpg3g.png",
    x: 12,
    y: 50,
    side: "left",
  },
  {
    icon: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783194761/attendance_icon_fuexnu.png",
    x: 12,
    y: 85,
    side: "left",
  },
  {
    icon: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783194800/compliance_icon_qq2ni0.png",
    x: 92,
    y: 15,
    side: "right",
  },
  {
    icon: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783194836/performance_icon_oznvqi.png",
    x: 92,
    y: 50,
    side: "right",
  },
  {
    icon: "https://res.cloudinary.com/dhadohg2h/image/upload/v1783194874/ai_logo_ublkpp.png",
    x: 92,
    y: 85,
    side: "right",
  },
];

const hubX = 50;
const hubY = 50;

function buildPath(spoke: { x: number; y: number; side: string }) {
  const startX = spoke.side === "left" ? spoke.x + 6 : spoke.x - 6; // start just inside the icon
  const midX = spoke.side === "left" ? 30 : 70;
  const endX = spoke.side === "left" ? hubX - 6 : hubX + 6; // end just inside the hub

  if (spoke.y === hubY) {
    return `M${startX} ${spoke.y} H${endX}`;
  }
  return `M${startX} ${spoke.y} H${midX} Q${midX + (spoke.side === "left" ? 4 : -4)} ${spoke.y} ${midX + (spoke.side === "left" ? 4 : -4)} ${spoke.y > hubY ? spoke.y - 4 : spoke.y + 4} V${hubY + (spoke.y > hubY ? -4 : 4)} Q${midX + (spoke.side === "left" ? 4 : -4)} ${hubY} ${endX} ${hubY}`;
}

function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max === 0 ? 0 : el.scrollLeft / max;
    setProgress(ratio);
    setAtStart(ratio <= 0.02);
    setAtEnd(ratio >= 0.98);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;

    const cards = Array.from(
      el.querySelectorAll(".industry-card"),
    ) as HTMLElement[];

    // 0 = the true start (spacer's snap point), then each card's offsetLeft
    const snapPoints = [0, ...cards.map((card) => card.offsetLeft)];

    const current = el.scrollLeft;

    // find which snap point we're currently closest to / past
    let currentIndex = 0;
    for (let i = 0; i < snapPoints.length; i++) {
      if (snapPoints[i] <= current + 10) currentIndex = i;
    }

    const nextIndex = Math.min(
      Math.max(currentIndex + dir, 0),
      snapPoints.length - 1,
    );

    el.scrollTo({ left: snapPoints[nextIndex], behavior: "smooth" });
  };

  return (
    <div>
      {/* info section */}
      <div className="relative md:h-[700px] md:pb-0 pb-2 overflow-hidden bg-gradient-to-b from-[#4A8C7D] via-[#2e7262] to-[#126351]">
        {/* Single Wave */}
        <svg
          className="absolute -bottom-15 left-0 w-full h-[320px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="
            M0,320
            L0,250
            C120,220 190,175 270,165
            C360,155 440,195 530,180
            C640,162 730,118 830,128
            C930,138 1010,160 1100,140
            C1180,120 1235,30 1300,10
            C1360,-5 1410,25 1440,55
            L1440,320
            Z
          "
          />
        </svg>

        <div className="relative z-10 pt-20 text-center text-white">
          <h2 className="md:text-6xl text-4xl font-bold">
            The HR Platform That <br /> Powers{" "}
            <span className="text-[#75d4d0]">Great</span> Work
          </h2>
          <p className="md:text-xl mt-10 md:w-[700px] w-full px-2 mx-auto">
            One platform for HR, IT, and Finance. Powered by AI to automate
            work, answer questions instantly, and keep your teams moving faster.
          </p>
        </div>

        {/* Cards */}
        <div className="relative z-20 mt-14 flex justify-center md:gap-4 md:px-6 gap-2 px-2 flex-wrap">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="relative w-40 h-36 rounded-xl bg-white shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="mb-4 rounded-full bg-green-100 p-3">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>

                  <h3 className="text-center text-gray-700 text-md font-medium px-2 leading-5">
                    {card.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* overview section  */}
      <div className="relative lg:-mt-14 md:mt-0 mt-4">
        <h1 className="font-semibold text-3xl lg:w-[600px] w-full mx-auto text-center text-surface/90">
          Manage your entire HR ecosystem from one unified platform
        </h1>
        <p className=" mt-4 font-medium text-lg lg:w-[850px] w-full mx-auto text-center text-faint/90">
          Hire, onboard, payroll, and manage employees from one unified
          platform—automating manual tasks and eliminating operational
          complexity.
        </p>

        {/* module cards */}
        <div className="mt-16 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 px-4">
          {modules.map((mod) => (
            <div key={mod.title} className="group relative pt-6 cursor-pointer">
              {/* base border (idle state) */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200" />
              {/* animated sweep bar */}
              <div
                className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-green-dim via-teal-500 to-green
                   origin-left scale-x-0 group-hover:scale-x-100
                   transition-transform duration-500 ease-out"
              />

              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-dim to-teal-500 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                  <mod.icon
                    className="w-6 h-6 text-mint-300"
                    strokeWidth={1.75}
                  />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-surface/90">
                {mod.title}
              </h3>
              <p className="mt-2 text-faint text-[15px] font-normal leading-relaxed">
                {mod.description}
              </p>

              <a
                href={mod.href}
                className="mt-5 inline-block font-semibold text-sm text-surface/90 border-b-2 border-green-dim pb-0.5 hover:border-green-dim transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* industry support section */}
      <div className="mt-24 ">
        <h2 className="font-semibold text-3xl lg:w-[750px] w-full mx-auto text-center text-surface/90">
          Built for every kind of business
        </h2>
        <p className="mt-4 lg:w-[800px] w-full mx-auto font-medium text-lg text-center text-faint/90">
          From knowledge teams to factory floors — Sathi adapts payroll,
          attendance, and compliance to how your industry actually works.
        </p>
        {/* carousel track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory
             [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* leading spacer — now a valid snap point, so scrollLeft:0 is never "corrected" away */}
          <div className="snap-start shrink-0 w-6 lg:w-40" aria-hidden="true" />

          {industries.map((item) => (
            <div
              key={item.title}
              className="industry-card snap-start shrink-0 w-[320px] rounded-lg overflow-hidden bg-[#f7f5f1] transition-all duration-900"
            >
              {/* visual panel */}
              <div className={`h-[220px] flex items-center justify-center`}>
                <div className="w-full h-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* body */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-surface/90">
                  {item.title}
                </h3>
                <p className="mt-2 text-faint text-sm text-justify leading-relaxed min-h-[80px]">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-block font-semibold text-sm text-green-dim pb-0.5 hover:border-green-dim transition-colors"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}

          {/* trailing spacer */}
          <div className="snap-start shrink-0 w-6 lg:w-24" aria-hidden="true" />
        </div>

        {/* progress bar + nav controls */}
        <div className="mt-8 max-w-7xl mx-auto flex items-center gap-6 px-6">
          <div className="flex-1 ml-3 h-[2px] bg-gray-200 relative">
            <div
              className="absolute top-0 left-0 h-full bg-green-dim transition-all duration-200"
              style={{ width: `${Math.max(progress * 100, 8)}%` }}
            />
          </div>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                atStart
                  ? "bg-[#ede9e3] cursor-not-allowed"
                  : "bg-green-dim hover:opacity-90 cursor-pointer"
              }`}
              aria-label="Previous"
            >
              <ArrowLeft
                className={`w-4 h-4 ${atStart ? "text-green-dim" : "text-white"}`}
              />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                atEnd
                  ? "bg-[#ede9e3] cursor-not-allowed"
                  : "bg-green-dim hover:opacity-90 cursor-pointer"
              }`}
              aria-label="Next"
            >
              <ArrowRight
                className={`w-4 h-4 ${atEnd ? "text-green-dim" : "text-white"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* why choose my app */}
      <div className="py-24 px-6 ">
        <h1 className="font-semibold text-3xl lg:w-[620px] w-full mx-auto text-center text-surface/90">
          No more re-entering the same data twice
        </h1>
        <p className=" mt-4 font-medium text-lg lg:w-[850px] w-full mx-auto text-center text-faint/90">
          Fix an employee's hours once, and payroll, compliance, and reports
          update with it — instead of fixing the same mistake in three different
          places.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* left: value prop list */}
          <div>
            {valueProps.map((item, index) => (
              <div
                key={item.title}
                className={`flex gap-5 py-7 ${
                  index !== 0 ? "border-t border-gray-200" : ""
                }`}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-mint-100 flex items-center justify-center">
                  <item.icon
                    className="w-5 h-5 text-green-dim"
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-surface/95 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-faint text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-200" />
          </div>

          {/* right: hub and spoke diagram */}
          <div className="relative h-[420px] flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              {spokes.map((s, i) => (
                <path
                  key={i}
                  d={buildPath(s)}
                  stroke="#a7d4a7"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />
              ))}
            </svg>

            {/* center hub */}
            <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-extrabold text-xl">S</span>
            </div>

            {/* spoke icons */}
            {spokes.map((s, i) => (
              <div
                key={i}
                className="absolute z-10 w-20 h-20 bg-[#65aa9c] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md overflow-hidden"
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
              >
                <img
                  src={s.icon}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* closing section  */}
      <div className="bg-gradient-to-b from-teal-900 via-teal-800 to-teal-950 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          In a rush? Try Sathi now!
        </h2>
        <p className="mt-3 text-teal-100 text-base md:text-xl">
          See Sathi running with your own payroll data — no setup required for
          the demo.
        </p>
        <button className="mt-8 inline-block bg-[#06202B] hover:bg-mint-400 hover:-translate-y-1 cursor-pointer text-white font-semibold text-lg px-10 py-3.5 rounded-lg transition-transform duration-200 shadow-md">
          Start Free Trial
        </button>
      </div>
    </div>
  );
}

export default Home;
