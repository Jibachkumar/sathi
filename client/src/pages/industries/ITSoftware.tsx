// IT & Software
import {
  User,
  Laptop,
  CircleDollarSign,
  Rocket,
  MessageCircleQuestion,
  CalendarClock,
} from "lucide-react";
import FeatureDetailsList from "../../components/industry/FeatureDetailList";

function ITSoftwareSection() {
  return (
    <div className="relative w-full h-[685px] bg-gradient-to-r from-[#134e4a] via-[#245855] to-[#1b8079]">
      {/* IMAGE CARD — sits on top, clipped on its LEFT edge, diagonal grows wider top-to-bottom */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="heroImageClip" clipPathUnits="objectBoundingBox">
            <path
              d="
              M 0.43 0
              L 1 0
              L 1 1
              L 0.57 1
              Q 0.53 1 0.526 0.96
              L 0.43 0
              Z
            "
            />
          </clipPath>
        </defs>
      </svg>

      {/* IMAGE CARD — same diagonal as before, but the bottom point of the diagonal
          is now a curve instead of a sharp corner */}
      <div
        className="absolute inset-y-0 right-0 z-20 w-full h-[725px]"
        style={{ clipPath: "url(#heroImageClip)" }}
      >
        <img
          src="https://res.cloudinary.com/dhadohg2h/image/upload/v1783786283/photo-1522071820081-009f0129c71c_d6awj1.avif"
          alt=""
          className="w-full h-full object-cover block"
        />
      </div>

      {/* TEXT CONTENT — sits above the image layer (later in DOM order), left side, full width container */}
      <div className="relative z-10 h-full flex flex-col pt-28 px-6 lg:px-16">
        <p className="text-sm  font-medium text-white/85 uppercase tracking-wide">
          IT & Software management
        </p>
        <h1 className="mt-3 text-3xl text-justify md:text-3xl lg:max-w-xl font-extrabold text-white/90 leading-tight">
          One system for HR, payroll, and compliance built for how tech teams
          work
        </h1>
        <p className="mt-5 text-white/80 text-justify text-lg lg:max-w-xl leading-relaxed">
          Remote-friendly attendance, flexible work locations, and payroll that
          runs on the same data as everything else. You set the structure, Sathi
          handles the rest.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="border border-white/40 hover:bg-white/10 text-white/90 font-bold px-10 py-3.5 rounded-full transition-colors">
            Get a Demo
          </button>
          <button className="border border-white/40 hover:bg-white/10 text-white/90 font-bold px-10 py-3.5 rounded-full transition-colors">
            See How It Works
          </button>
        </div>
      </div>
    </div>
  );
}

function ITSoftware() {
  return (
    <div>
      {/* info section */}
      <div>
        <ITSoftwareSection />
      </div>

      {/* feature section */}
      <div>
        <FeatureDetailsList
          heading="How Sathi works for engineering teams"
          intro="A closer look at what's actually included, and how it fits how software teams operate day to day."
          features={[
            {
              icon: User,
              title: "Employee Records",
              description: [
                "Every hire gets one profile the moment they join — role, department, joining date, and documents, all in one place instead of scattered across a hiring spreadsheet, an onboarding email thread, and a separate HR file.",
                "As people move between teams, get promoted, or their role changes, that history stays attached to their record instead of getting lost.",
              ],
            },
            {
              icon: Laptop,
              title: "Remote & Hybrid Attendance",
              description: [
                "Software teams rarely work from one fixed location. Sathi's attendance doesn't assume they do — employees can check in from wherever they're actually working, whether that's the office, home, or a client site.",
                "For teams that do come in on a schedule, face recognition attendance still works exactly the same way it would for any office setup.",
              ],
            },
            {
              icon: CircleDollarSign,
              title: "Payroll & Compliance",
              description: [
                "Once attendance and salary structure are set up, payroll runs from that same data — no separate spreadsheet to keep in sync, no manual recalculation each month.",
                "SSF and CIT contributions are calculated automatically based on each employee's enrollment, so compliance isn't a separate task tacked onto the end of the payroll cycle.",
              ],
            },
            {
              icon: Rocket,
              title: "Performance Reviews",
              description: [
                "Engineering teams tend to run on goals and cycles more than most — sprint reviews, quarterly OKRs, promotion cycles. Sathi lets you set goals per employee and run structured review cycles without building your own tracker in a spreadsheet.",
                "Feedback and review history stay attached to the same employee record, so there's one place to look back at someone's growth over time.",
              ],
            },
            {
              icon: MessageCircleQuestion,
              title: "AI HR Assistant",
              description: [
                "Instead of a Slack message to HR every time someone wants to check their leave balance or find last month's payslip, employees can just ask — in Nepali or English — and get an answer immediately.",
                "It's a small thing, but it adds up: fewer interruptions for HR, faster answers for employees.",
              ],
            },
            {
              icon: CalendarClock,
              title: "Leave Management",
              description: [
                "Leave requests, approvals, and running balances are visible to both the employee and their manager in real time — no more checking a shared calendar or asking HR to confirm how many days are left.",
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ITSoftware;
