import {
  BarChart3,
  UserPlus,
  Wallet,
  Fingerprint,
  TrendingUp,
  Users,
  ClipboardCheck,
  MessageSquareText,
  Banknote,
  CalendarDays,
  Target,
  GraduationCap,
  ShieldCheck,
  Megaphone,
  FileText,
  UserCheck,
  Clock,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const pentagonNodes = [
  {
    title: "HR Data & Reporting",
    icon: BarChart3,
    angle: -90,
    bg: "bg-emerald-100",
    border: "border-emerald-200",
    text: "text-emerald-700",
    iconColor: "text-emerald-600",
    blob: "45% 55% 55% 45% / 50% 55% 45% 50%",
  },
  {
    title: "Hiring & Onboarding",
    icon: UserPlus,
    angle: -18,
    bg: "bg-sky-100",
    border: "border-sky-200",
    text: "text-sky-700",
    iconColor: "text-sky-600",
    blob: "55% 45% 60% 40% / 45% 60% 40% 55%",
  },
  {
    title: "Payroll & Compliance",
    icon: Wallet,
    angle: 54,
    bg: "bg-violet-100",
    border: "border-violet-200",
    text: "text-violet-700",
    iconColor: "text-violet-600",
    blob: "45% 55% 50% 50% / 55% 50% 50% 45%",
  },
  {
    title: "Attendance & Time",
    icon: Fingerprint,
    angle: 126,
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    iconColor: "text-amber-600",
    blob: "50% 50% 40% 60% / 60% 40% 55% 45%",
  },
  {
    title: "Performance Management",
    icon: TrendingUp,
    angle: 198,
    bg: "bg-rose-100",
    border: "border-rose-200",
    text: "text-rose-700",
    iconColor: "text-rose-600",
    blob: "58% 42% 48% 52% / 42% 58% 48% 52%",
  },
];

const valueColumns = [
  {
    icon: ClipboardCheck,
    title: "Focus on growth. We'll handle the HR admin.",
    description:
      "Stop chasing spreadsheets and manual approvals. Confidently check off HR to-dos and get time back for running your business.",
  },
  {
    icon: Users,
    title: "Onboard new hires without the paperwork chase.",
    description:
      "Offer letters, documents, and day-one setup — all handled in Sathi, so new hires start working, not filling out forms.",
  },
  {
    icon: MessageSquareText,
    title: "A workplace where questions get instant answers.",
    description:
      "No more waiting on HR for a leave balance or a payslip. Sathi's AI assistant answers employees directly, in Nepali or English, the moment they ask.",
  },
  {
    icon: Banknote,
    title: "Payroll built in. Not bolted on.",
    description:
      "Attendance and payroll share the same data in Sathi — so SSF, CIT, and salary are correct every cycle, with nothing manually re-entered.",
  },
];

const bullets = [
  "Track attendance with face recognition and GPS, no manual sign-in sheets.",
  "Run payroll with SSF, CIT, and TDS calculated automatically.",
  "Approve leave requests in one tap, from web or mobile.",
  "Generate payslips and compliance reports in seconds, not hours.",
  "Get instant answers from Sathi's AI assistant, in Nepali or English.",
  "And so much more!",
];

const notifications = [
  {
    icon: FileText,
    text: "Your SSF filing for Jestha is ready for review.",
    time: "10 minutes ago",
    urgent: true,
  },
  {
    icon: UserCheck,
    text: "You have 6 applicants for the Payroll Officer opening.",
    time: "1 hour ago",
  },
  {
    icon: FileText,
    text: "3 employees have documents waiting for signature.",
    time: "5 hours ago",
  },
  {
    icon: Clock,
    text: "Face recognition attendance is enabled and ready.",
    time: "1 day ago",
  },
  {
    icon: ShieldCheck,
    text: "Compliance check completed — no issues found.",
    time: "2 days ago",
  },
  {
    icon: UserCheck,
    text: "Roshani Thapa requested Jun 4–Jun 6 off — 24 hours of leave.",
    time: "3 days ago",
  },
];

const RADIUS = 195;
const CONTAINER_SIZE = 560; // used only as the reference space for angle math
const CENTER = CONTAINER_SIZE / 2;

function polarToXY(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = CENTER + radius * Math.cos(rad);
  const y = CENTER + radius * Math.sin(rad);
  // convert to percentage of the container, so it scales at any size
  return {
    xPct: (x / CONTAINER_SIZE) * 100,
    yPct: (y / CONTAINER_SIZE) * 100,
  };
}

// build a curved arc between each adjacent pair of nodes (pentagon outline)
function buildArc(fromAngle: number, toAngle: number) {
  const from = polarToXY(fromAngle, RADIUS);
  const to = polarToXY(toAngle, RADIUS);

  // normalize the difference so it always takes the SHORT way around the circle
  let diff = toAngle - fromAngle;
  while (diff > 180) diff -= 360;
  while (diff < -180) diff += 360;

  const midAngle = fromAngle + diff / 2;
  const control = polarToXY(midAngle, RADIUS + 40);

  return `M${from.xPct} ${from.yPct} Q${control.xPct} ${control.yPct} ${to.xPct} ${to.yPct}`;
}

// for barchat
const payrollTrend = [
  { month: "Jan", basic: 12, allowance: 3, overtime: 1 },
  { month: "Feb", basic: 12, allowance: 3, overtime: 1.5 },
  { month: "Mar", basic: 13, allowance: 3.2, overtime: 0.8 },
  { month: "Apr", basic: 13, allowance: 3.2, overtime: 2 },
  { month: "May", basic: 14, allowance: 3.5, overtime: 1.2 },
  { month: "Jun", basic: 14, allowance: 3.5, overtime: 0.6 },
];

const leaveBreakdown = [
  { name: "Annual", value: 42, color: "#546B41" },
  { name: "Sick", value: 23, color: "#3b8a6f" },
  { name: "Casual", value: 20, color: "#8fe3c6" },
  { name: "Unpaid", value: 15, color: "#d9d9d9" },
];

const departmentCost = [
  { name: "Sales", value: 35, color: "#1c4f3f" },
  { name: "Engineering", value: 30, color: "#546B41" },
  { name: "Operations", value: 20, color: "#3b8a6f" },
  { name: "Admin", value: 15, color: "#8fe3c6" },
];

const attendanceStatus = [
  { name: "Present", value: 88, color: "#546B41" },
  { name: "Late", value: 8, color: "#e8b84b" },
  { name: "Absent", value: 4, color: "#d9756b" },
];

const bullet = [
  "Automate attendance-to-payroll calculations, reducing manual errors.",
  "Generate instant reports on payroll cost, leave, and attendance.",
  "Pull department-wise cost breakdowns without exporting a single spreadsheet.",
  "Share reports with managers using role-based viewing permissions.",
];

function MiniDonut({
  data,
  label,
}: {
  data: typeof leaveBreakdown;
  label: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex-1">
      <p className="text-xs font-semibold text-faint mb-2">{label}</p>
      <div className="flex items-center gap-3">
        <ResponsiveContainer width={70} height={70}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={22}
              outerRadius={32}
              stroke="none"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="space-y-1">
          {data.map((entry) => (
            <div
              key={entry.name}
              className="flex items-center gap-1.5 text-[11px]"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-faint">
                {entry.name} {entry.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Solution() {
  return (
    <div>
      {/* info section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 md:min-h-[700px] lg:px-16 py-16 overflow-hidden bg-gradient-to-b from-[#fffefe] via-[#fffefe] to-[#fcfcfc]">
        {/* wave */}
        <svg
          className="absolute -bottom-15 left-0 w-full h-[320px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="
              M0,320
              L0,122
              C116.714,117
              233.429,112
              369,123
              C504.571,134
              659,162
              781,189
              C903,216
              992.571,244
              1097,253
              C1201.429,262
              1320.714,253
              1440,240
              L1440,320
              Z
            "
          />
        </svg>

        {/* left part */}
        <div className="w-full lg:w-[55%] lg:ml-20 lg:-mt-32 text-center lg:text-left">
          <span className="inline-block text-xl font-semibold tracking-wider text-surface/85 mb-4">
            Solutions for every company size
          </span>
          <h2 className="text-3xl md:text-5xl lg:w-[600px] w-full font-bold text-teal-700 leading-tight">
            HR Software Built for Growing Companies
          </h2>
          <p className="mt-5 px-4 md:px-0 lg:w-[650px]  text-lg text-faint leading-relaxed">
            One platform that scales with you — from startups to small
            businesses, mid-size companies, and large enterprises.
          </p>
          <button className="mt-8 cursor-pointer border border-teal-700 hover:bg-green hover:text-white text-teal-700 font-semibold text-base px-8 py-2.5 rounded-xl shadow-md">
            Try it Free
          </button>
        </div>

        {/* right part */}
        <div className="w-full lg:w-[45%] flex justify-center overflow-hidden">
          <div className="relative w-[460px] h-[460px] md:w-[560px] md:h-[560px] aspect-square">
            <svg
              className="absolute inset-0 w-full h-full flow-line"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {pentagonNodes.map((node, i) => {
                const next = pentagonNodes[(i + 1) % pentagonNodes.length];
                return (
                  <path
                    key={i}
                    d={buildArc(node.angle, next.angle)}
                    fill="none"
                    stroke="#a7d4a7"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    vectorEffect="non-scaling-stroke"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                );
              })}
            </svg>

            {/* nodes */}
            {pentagonNodes.map((node, i) => {
              const { xPct, yPct } = polarToXY(node.angle, RADIUS);
              return (
                <div
                  key={i}
                  className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 md:w-40 md:h-40 w-36 h-36 ${node.bg} flex flex-col items-center justify-center text-center px-4 cursor-pointer`}
                  style={{
                    left: `${xPct}%`,
                    top: `${yPct}%`,
                    borderRadius: node.blob,
                  }}
                >
                  <node.icon
                    className={`w-8 h-8 mb-2 ${node.iconColor}`}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-sm font-semibold leading-tight ${node.text}`}
                  >
                    {node.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* scope explain section */}
      <div className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-14">
          {valueColumns.map((item) => (
            <div key={item.title}>
              <item.icon className="w-9 h-9 text-teal-600" strokeWidth={1} />
              <h3 className="mt-5 text-lg font-semibold text-surface/90 leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-faint text-[15px] leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* feature simplicity explain section */}
      <div className="py-20 px-6 lg:px-16 bg-[#fffefe]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* left: copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-surface/90 leading-tight">
              In Sathi, simplicity is a feature.
            </h2>
            <p className="mt-5 text-faint text-[15px] leading-relaxed">
              What's not to love about a clean interface, automated compliance,
              and workflows that just make sense? In Sathi, HR tasks become
              routine rather than rigorous, fitting naturally into your workday
              instead of eating up all your time. Even with limited HR
              experience, you can quickly, easily, and single-handedly:
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-faint">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* right: dashboard mockup */}
          <div className="rounded-2xl border border-gray-100 bg-[#fafbf9] p-6">
            {/* top bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center text-white font-bold">
                  RT
                </div>
                <div>
                  <p className="font-bold text-green-dim leading-tight">
                    नमस्ते, Roshani
                  </p>
                  <p className="text-xs text-faint">HR Administrator</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-xs font-semibold border border-gray-300 rounded-full px-3 py-1.5 text-green-dim">
                  + New
                </button>
                <button className="text-xs font-semibold border border-gray-300 rounded-full px-3 py-1.5 text-green-dim">
                  Edit
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* left card stack */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-green-dim mb-3">
                    <CalendarDays className="w-4 h-4" /> Leave
                  </div>
                  <div className="flex justify-between text-center mb-3">
                    <div>
                      <p className="text-xl font-extrabold text-teal-700">18</p>
                      <p className="text-[11px] text-faint">days available</p>
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-teal-700">6</p>
                      <p className="text-[11px] text-faint">sick days left</p>
                    </div>
                  </div>
                  <button className="w-full text-xs font-semibold bg-teal-700 text-white rounded-full py-2">
                    Request Leave
                  </button>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-3">
                  <p className="text-sm font-bold text-green-dim">My Stuff</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Target className="w-4 h-4 text-teal-600" />
                    <span className="text-faint">1 goal, due Ashad 15</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <GraduationCap className="w-4 h-4 text-teal-600" />
                    <span className="text-faint">2 trainings pending</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Wallet className="w-4 h-4 text-teal-600" />
                    <span className="text-faint">Enrolled in SSF</span>
                  </div>
                </div>
              </div>

              {/* right notifications feed */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-green-dim mb-3">
                  <Megaphone className="w-4 h-4" /> What's happening
                </div>
                <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                  {notifications.map((n, i) => (
                    <div key={i} className="flex gap-2 text-xs">
                      <n.icon className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-dim leading-snug">
                          {n.text}{" "}
                          {n.urgent && (
                            <span className="text-[10px] font-bold text-red-500 border border-red-200 rounded px-1 ml-1">
                              DUE SOON
                            </span>
                          )}
                        </p>
                        <p className="text-[10px] text-faint mt-0.5">
                          {n.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what our CEO says */}
      <div className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* left: avatar with leaf wreath */}
          <div className="relative shrink-0 w-56 h-56 md:w-64 md:h-64">
            <div
              className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-sm"
              style={{ borderRadius: "65% 35% 55% 45% / 52% 60% 40% 48%" }}
            >
              <img
                src="https://res.cloudinary.com/dhadohg2h/image/upload/v1783286652/sk_xksdpq.jpg"
                alt="Santosh Yadav, Founder & CEO of Sathi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* right: quote */}
          <div className="text-center md:text-left">
            <p className="text-xl md:text-xl text-justify font-serif italic text-green-dim leading-relaxed">
              "We built Sathi because Nepali companies were choosing between
              spreadsheets, a patchwork of disconnected tools, or software that
              was never designed for how payroll actually works here. SSF, CIT,
              TDS, the BS calendar — these aren't edge cases for us, they're the
              starting point."
            </p>
            <p className="mt-6 font-bold text-sm md:text-md text-surface/90 uppercase tracking-wide">
              Santosh Yadav | Founder &amp; CEO | Sathi
            </p>
          </div>
        </div>
      </div>

      {/* replorting explain section */}
      <div className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* left: dashboard charts */}
          <div className="space-y-4">
            {/* bar chart card */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-sm font-bold text-green-dim mb-1">
                Payroll Cost Trend
              </p>
              <p className="text-xs text-faint mb-3">
                Basic, allowances &amp; overtime — last 6 months (NPR, lakhs)
              </p>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={payrollTrend}>
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 11, fill: "#697a72" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Bar
                    dataKey="basic"
                    stackId="a"
                    fill="#546B41"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar dataKey="allowance" stackId="a" fill="#408A71" />
                  <Bar
                    dataKey="overtime"
                    stackId="a"
                    fill="#8fe3c6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* three donut cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <MiniDonut data={leaveBreakdown} label="Leave Breakdown" />
              <MiniDonut data={departmentCost} label="Department Cost" />
              <MiniDonut data={attendanceStatus} label="Attendance" />
            </div>
          </div>

          {/* right: copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-surface/90 leading-tight">
              Put more time toward strategy.
            </h2>
            <p className="mt-5 text-faint text-[15px] leading-relaxed">
              Sathi's automation and centralized data free you from
              time-consuming manual processes, while built-in reporting gives
              you the numbers to make real decisions — not just track them.
            </p>
            <ul className="mt-6 space-y-3">
              {bullet.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-faint">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* closing section */}
      <div
        className="relative pt-44 pb-20 px-6 overflow-hidden flex justify-center items-center min-h-[550px]"
        style={{ backgroundColor: "#fcfcfc" }}
      >
        {/* wave transition from white above */}
        <svg
          className="absolute top-0 left-0 w-full h-[120px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            transform="scale(1.2, 1)"
          />
        </svg>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 leading-tight">
            Grow Confidently with Sathi
          </h2>
          <p className="mt-4 text-lg text-faint">
            Built for Nepal, from the ground up — not adapted from somewhere
            else.
          </p>
          <button className="mt-8 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white font-semibold text-base px-10 py-3.5 rounded-full transition-colors shadow-md">
            Get a Live Demo
            {/*  Sign up for free */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Solution;
