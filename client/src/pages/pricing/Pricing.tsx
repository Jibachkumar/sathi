import { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Check,
  Sparkles,
  Clock,
  Play,
} from "lucide-react";

const bullets = [
  {
    bold: "Comprehensive.",
    text: "HR, payroll, attendance, and compliance in one platform.",
  },
  {
    bold: "Flexible.",
    text: "Pick a plan that fits your team size, add modules as you grow.",
  },
  {
    bold: "One simple monthly price.",
    text: "Pay per employee, per month. No hidden setup fees.",
  },
];

const plans = [
  {
    name: "Core",
    price: "600",
    currency: "NPR",
    tagline: "Foundational HR automation to move your business forward",
    cta: "Get Quote",
    overviewLabel: "Core Overview",
    featuresLabel: "Plan Includes:",
    highlight: false,
    features: [
      "Employee Management & Records",
      "HR Data & Reporting",
      "Attendance (Face Recognition + GPS)",
      "BS/AD Calendar & Nepali Holidays",
      "Leave Management",
      "Payroll: Salary Processing",
      "Payslip Generation",
    ],
  },
  {
    name: "Pro",
    price: "800",
    currency: "NPR",
    tagline: "Complete payroll and compliance, built for Nepal",
    cta: "Get Quote",
    overviewLabel: "Pro Overview",
    featuresLabel: "Everything in Core, plus:",
    highlight: false,
    features: [
      "Hiring & Onboarding",
      "SSF, CIT & TDS Automation",
      "Compliance Reports & Filings",
      "AI HR Assistant (Nepali & English)",
      "Bank Transfer File Export",
    ],
  },
  {
    name: "Elite",
    price: "1000",
    currency: "NPR",
    tagline: "Advanced insights and control for growing teams",
    cta: "Get Quote",
    overviewLabel: "Elite Overview",
    featuresLabel: "Everything in Pro, plus:",
    highlight: true,
    badge: "NEW!",
    features: [
      "Performance Management (KPI/OKR)",
      "Custom Dashboards & Reports",
      "Multi-Company Support",
      "Role-Based Access Control",
      "Priority Support",
      "Advanced AI Assistant",
    ],
  },
];

const addons = [
  {
    name: "Expense & Asset Management",
    tagline: "Track claims and company assets in one place.",
    features: [
      "Travel & Expense Claims",
      "Receipt Upload & Approval",
      "Laptop & Device Assignment",
      "Asset Return Workflow",
    ],
  },
  {
    name: "Project & Time Tracking",
    tagline: "Know exactly where billable hours go.",
    features: [
      "Timesheets by Project",
      "Billable vs Non-Billable Hours",
      "Task-Level Time Tracking",
      "Productivity Reports",
    ],
  },
  {
    name: "Multi-Branch Payroll",
    tagline: "One company, many branches, one system.",
    features: [
      "Branch-Wise Payroll Runs",
      "Per-Branch SSF & CIT Reporting",
      "Consolidated Cost Dashboards",
      "Branch-Level Access Control",
    ],
  },
];

type Cell = true | false | "soon" | string;

interface Row {
  label: string;
  core: Cell;
  pro: Cell;
  elite: Cell;
}

interface Category {
  name: string;
  icon?: boolean;
  rows: Row[];
}

const categories: Category[] = [
  {
    name: "AI Assistant",
    icon: true,
    rows: [
      {
        label: "Leave Balance & Payslip Q&A",
        core: false,
        pro: true,
        elite: true,
      },
      {
        label: "AI Payroll Error Detection",
        core: false,
        pro: "soon",
        elite: "soon",
      },
      {
        label: "AI Attendance Analysis",
        core: false,
        pro: "soon",
        elite: "soon",
      },
      { label: "AI Resume Screening", core: false, pro: false, elite: "soon" },
    ],
  },
  {
    name: "HR Data & Reporting",
    rows: [
      { label: "Employee Records", core: true, pro: true, elite: true },
      { label: "Standard Reports", core: true, pro: true, elite: true },
      {
        label: "Custom Report Builder",
        core: false,
        pro: false,
        elite: "soon",
      },
      { label: "Workflows & Approvals", core: true, pro: true, elite: true },
    ],
  },
  {
    name: "Attendance & Time",
    rows: [
      {
        label: "Face Recognition Attendance",
        core: true,
        pro: true,
        elite: true,
      },
      { label: "GPS-Based Check-In", core: true, pro: true, elite: true },
      {
        label: "BS/AD Calendar & Nepali Holidays",
        core: true,
        pro: true,
        elite: true,
      },
      {
        label: "Festival Leave Management",
        core: false,
        pro: "soon",
        elite: "soon",
      },
      { label: "Leave Management", core: true, pro: true, elite: true },
    ],
  },
  {
    name: "Hiring & Onboarding",
    rows: [
      { label: "Offer Letter Generation", core: false, pro: true, elite: true },
      {
        label: "New Hire Packet & Documents",
        core: false,
        pro: true,
        elite: true,
      },
      { label: "Onboarding Checklist", core: false, pro: true, elite: true },
      {
        label: "Digital E-Signatures",
        core: false,
        pro: "soon",
        elite: "soon",
      },
    ],
  },
  {
    name: "Payroll & Compliance",
    rows: [
      {
        label: "Salary Processing & Payslips",
        core: true,
        pro: true,
        elite: true,
      },
      { label: "SSF & CIT Automation", core: false, pro: true, elite: true },
      {
        label: "IRD Tax Slab Updates",
        core: false,
        pro: "soon",
        elite: "soon",
      },
      {
        label: "Bank Transfer File Export",
        core: false,
        pro: true,
        elite: true,
      },
      {
        label: "Government Filing Reports",
        core: false,
        pro: "soon",
        elite: "soon",
      },
    ],
  },
  {
    name: "Performance Management",
    rows: [
      { label: "Goal Setting (KPI/OKR)", core: false, pro: true, elite: true },
      {
        label: "Performance Review Cycles",
        core: false,
        pro: true,
        elite: true,
      },
      { label: "360° Feedback", core: false, pro: false, elite: "soon" },
      { label: "Skill Assessment", core: false, pro: false, elite: "soon" },
      {
        label: "Promotion Recommendation",
        core: false,
        pro: false,
        elite: "soon",
      },
    ],
  },
  {
    name: "Compensation Management",
    rows: [
      {
        label: "Salary Structure & Revision History",
        core: true,
        pro: true,
        elite: true,
      },
      {
        label: "Bonus & Commission Management",
        core: false,
        pro: true,
        elite: true,
      },
      {
        label: "Loan & Advance Management",
        core: false,
        pro: "soon",
        elite: "soon",
      },
    ],
  },
  {
    name: "Administration",
    rows: [
      {
        label: "Multi-Company Support",
        core: false,
        pro: false,
        elite: "soon",
      },
      {
        label: "Role-Based Access Control",
        core: false,
        pro: false,
        elite: "soon",
      },
      {
        label: "WhatsApp/Viber Notifications",
        core: false,
        pro: false,
        elite: "soon",
      },
      { label: "Mobile App", core: false, pro: "soon", elite: "soon" },
    ],
  },
];

function CellDisplay({ value }: { value: Cell }) {
  if (value === "soon") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] md:font-bold font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-1">
        <Clock className="w-2.5 h-2.5" /> Coming Soon
      </span>
    );
  }
  if (typeof value === "string") {
    return <span className="text-xs font-semibold text-teal-700">{value}</span>;
  }
  return value ? (
    <span className="w-5 h-5 rounded-full bg-green flex items-center justify-center mx-auto">
      <Check className="w-3 h-3 text-white" strokeWidth={3} />
    </span>
  ) : (
    <span className="text-faint/45 text-xs">—</span>
  );
}

function CompareFeatures() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-surface/90">
        Compare all features
      </h2>
      <p className="mt-2 text-lg text-center text-faint">
        See exactly what's included in every plan.
      </p>
      <div className="flex items-center justify-center gap-4 mt-4 text-lg text-faint">
        <span className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-green inline-flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          </span>
          Available now
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-5 h-5 text-amber-600" />
          On our roadmap
        </span>
      </div>

      <div className="mt-10 max-w-6xl mx-auto border-t-gray-200 border-b-gray-200 rounded-xl overflow-hidden">
        <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] bg-green">
          <div />
          <div className="text-center md:text-xl text-md font-serif md:font-semibold font-medium text-white py-4">
            Core
          </div>
          <div className="text-center md:text-xl text-md font-serif md:font-semibold font-medium text-white py-4">
            Pro
          </div>
          <div className="text-center md:text-xl text-md font-serif md:font-semibold font-medium text-white py-4">
            Elite
          </div>
        </div>

        {categories.map((cat, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={cat.name}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full grid grid-cols-[1fr_auto] items-center bg-gray-50 px-5 py-4 text-left"
              >
                <span className="flex items-center gap-1.5 md:text-md md:font-semibold text-sm font-medium text-surface/90">
                  {cat.icon && <Sparkles className="w-3.5 h-3.5" />}
                  {cat.name}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-6 h-6 text-faint/80" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-faint/80" />
                )}
              </button>

              {isOpen &&
                cat.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] items-center px-5 py-4 border-b border-gray-100"
                  >
                    <span className="md:text-sm text-xs text-faint">
                      {row.label}
                    </span>
                    <div className="text-center px-2">
                      <CellDisplay value={row.core} />
                    </div>
                    <div className="text-center px-2">
                      <CellDisplay value={row.pro} />
                    </div>
                    <div className="text-center px-2">
                      <CellDisplay value={row.elite} />
                    </div>
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <div>
      {/* info section */}
      <div className="relative bg-gradient-to-b from-[#134e4a] via-[#245855] to-[#1b8079] overflow-hidden">
        {/* decorative circuit pattern background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 800 500"
          preserveAspectRatio="xMidYMid slice"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <rect
              key={`r-${i}`}
              x={(i * 83) % 780}
              y={(i * 137) % 460}
              width={14 + (i % 3) * 6}
              height={14 + (i % 3) * 6}
              fill="none"
              stroke="#3b8a6f"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`l-${i}`}
              x1={(i * 97) % 800}
              y1={(i * 61) % 500}
              x2={((i * 97) % 800) + 80}
              y2={((i * 61) % 500) + 80}
              stroke="#3b8a6f"
              strokeWidth="1"
            />
          ))}
        </svg>

        <div className="relative z-10  flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 px-6 lg:px-16 pt-20 pb-32 ">
          {/* left: copy */}
          <div className="lg:ml-5 text-center lg:text-left">
            <h1 className="w-full lg:w-[55%] text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Get Sathi
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#7ba39b] leading-tight">
              Plans and Pricing
            </h2>

            <ul className="mt-8 space-y-5">
              {bullets.map((item) => (
                <li
                  key={item.bold}
                  className="flex items-start gap-y-3 lg:gap-x-3 gap-x-2"
                >
                  <span className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <p className="text-white/90 text-lg">
                    <span className="font-semibold text-white">
                      {item.bold}
                    </span>{" "}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* right: pricing form card */}
          <div
            className="w-full lg:w-[37%] md:w-[560px] lg:mr-16 bg-[#fffefe] rounded-xl shadow-2xl p-8 md:pt-6"
            style={{
              boxShadow: "8px 8px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h3 className="text-center text-2xl font-bold text-green mb-4">
              Get Pricing
            </h3>

            <form className="space-y-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-faint">First Name*</label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="text-xs text-faint">Last Name*</label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-faint">Work Email*</label>
                <input
                  type="email"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-teal-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-faint">Job Title*</label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="text-xs text-faint">Company Name*</label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-faint">Phone Number*</label>
                  <input
                    type="tel"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="text-xs text-faint">Employee Count*</label>
                  <select className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-teal-600">
                    <option>1–10</option>
                    <option>11–25</option>
                    <option>26–75</option>
                    <option>76–200</option>
                    <option>200+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-faint">City*</label>
                <select className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-teal-600">
                  <option>Kathmandu</option>
                  <option>Lalitpur</option>
                  <option>Bhaktapur</option>
                  <option>Pokhara</option>
                  <option>Other</option>
                </select>
              </div>

              <p className="text-xs text-faint leading-relaxed">
                I authorize Sathi to keep me informed about its products,
                services, and events through emails and phone calls. My data
                will be handled according to the{" "}
                <a href="#" className="text-teal-600 underline">
                  Privacy Notice
                </a>
                .
              </p>

              <button
                type="submit"
                className="w-full bg-green hover:bg-teal-800 text-white font-bold text-base py-3.5 rounded-full transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* bottom wave into next div */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[100px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,100 L0,40 C360,90 1080,0 1440,50 L1440,100 Z"
          />
        </svg>
      </div>

      {/* price plan */}
      <div className="pb-20 pt-10 px-6 bg-white">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-surface/85 mb-14">
          Plans and pricing for every organization
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl overflow-hidden bg-white border border-gray-200 `}
            >
              <div className="p-8 text-center">
                <h3 className="text-5xl font-semibold font-serif text-faint/90">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-end justify-center font-serif text-faint/90  gap-1">
                  <span className="text-6xl font-bold ">{plan.price}</span>
                  <span className="text-lg font-semibold font-serif text-faint/90 mb-1">
                    {plan.currency}*
                  </span>
                </div>
                <p className="text-md text-faint/90 mt-2">per month</p>

                <button className="mt-1 flex items-center gap-1.5 mx-auto text-lg font-medium text-green">
                  <Play className="w-3.5 h-3.5 fill-green" />
                  {plan.overviewLabel}
                </button>

                <button className="mt-4 px-10 cursor-pointer bg-green hover:bg-teal-800 text-white font-bold text-sm py-3 rounded-full transition-colors">
                  {plan.cta}
                </button>

                <p className="mt-5 text-sm text-faint leading-relaxed">
                  <span className="font-semibold text-surface/90">
                    {plan.tagline.split(" ").slice(0, 2).join(" ")}
                  </span>{" "}
                  {plan.tagline.split(" ").slice(2).join(" ")}
                </p>
              </div>

              <div className="p-8 -mt-5">
                <p className="text-lg font-semibold text-surface/90 mb-4">
                  {plan.featuresLabel}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-md"
                    >
                      <span className="w-4 h-4 rounded-full bg-green flex items-center justify-center shrink-0 mt-0.5">
                        <Check
                          className="w-2.5 h-2.5 text-white"
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-faint">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* adds-on section */}
      <div className="pb-20 pt-10 px-6 bg-[#f5f7f9]">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-surface/90">
          Add-on solutions
        </h2>
        <p className="mt-2 text-lg text-center text-faint">
          Accomplish even more with additional capabilities.
        </p>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon) => (
            <div
              key={addon.name}
              className="bg-white rounded-xl p-6 flex flex-col"
            >
              <h3 className="text-xl font-serif font-extrabold text-surface/90 leading-snug">
                {addon.name}
              </h3>
              <p className="mt-3 text-[15px] font-medium text-faint">
                {addon.tagline}
              </p>

              <button className="mt-4 flex items-center gap-1.5 text-[16px] font-medium text-green">
                <Play className="w-3 h-3 fill-green" />
                Overview
              </button>

              <ul className="mt-4 space-y-2.5 flex-1">
                {addon.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[16px]"
                  >
                    <span className="w-4.5 h-4.5 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green" strokeWidth={3} />
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-5 text-sm font-bold text-teal-700 flex items-center gap-1">
                Learn More <span className="text-xs">›</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* compare all feature section  */}
      <CompareFeatures />
    </div>
  );
}

export default Pricing;
