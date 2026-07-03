import {
  BarChart3,
  ClipboardPen,
  HeartPulse,
  Clock3,
  Users,
  Globe,
  UserPlus,
  Rocket,
  Sparkles,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";

const platformItems = [
  {
    icon: BarChart3,
    label: "HR Data & Reporting",
  },
  {
    icon: ClipboardPen,
    label: "Payroll",
  },
  {
    icon: HeartPulse,
    label: "Benefits Administration",
  },
  {
    icon: Clock3,
    label: "Time & Attendance",
  },
  {
    icon: Users,
    label: "Applicant Tracking System",
  },
  {
    icon: Globe,
    label: "Global Employment",
  },
  {
    icon: UserPlus,
    label: "Onboarding",
  },
  {
    icon: Rocket,
    label: "Performance Management",
  },
  {
    icon: Sparkles,
    label: "Employee Experience",
  },
  {
    icon: BadgeDollarSign,
    label: "Compensation",
  },
  {
    icon: ShieldCheck,
    label: "Compliance",
  },
];

export default function PlatformMenu() {
  return (
    <div className="flex max-w-5xl border-t border-gray-200 ml-[300px] rounded-b-xl bg-white p-8 shadow-md">
      {/* Left Side */}
      <div className="w-[230px] shrink-0 border-r border-gray-200 pr-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Our Platform</h2>

        <ul className="space-y-5">
          <li className="cursor-pointer text-md hover:text-green-700">
            Platform Overview
          </li>

          <li className="flex cursor-pointer items-center gap-2 text-md hover:text-green-700">
            Sathi AI
            <Sparkles className="h-4 w-4 text-green-700" />
          </li>

          <li className="cursor-pointer text-md hover:text-green-700">
            Video Tour
          </li>

          <li className="cursor-pointer text-md hover:text-green-700">
            Integrations Marketplace
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="ml-10 rounded-2xl border border-gray-200 px-6 py-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {platformItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex cursor-pointer items-center gap-3"
            >
              <Icon className="h-6 w-6 text-green-700 transition-transform group-hover:scale-110" />

              <span className="text-md text-gray-800 group-hover:text-green-700">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
