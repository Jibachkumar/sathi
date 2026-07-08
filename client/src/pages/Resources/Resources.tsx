import { Check } from "lucide-react";

// info helper function
function ReportSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-between md:px-28 gap-32 w-full">
      {/* left: download card — sticks while right column scrolls past, no JS needed */}
      <div className="w-full lg:w-[35%]">
        <div className="lg:sticky lg:top-36 bg-white rounded-xl p-8 border border-slate-200">
          <h2 className="text-[24px] font-semibold text-faint leading-snug">
            See how manual payroll is costing Nepali HR teams today by:
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Turning HR staff into full-time reconciliation clerks between attendance sheets and salary calculations",
              "Requiring hours of manual work each month converting BS to AD dates and re-checking tax slabs by hand",
              "Creating compliance blind spots when SSF and CIT filings depend on someone remembering to update a spreadsheet",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-faint leading-relaxed"
              >
                <Check
                  className="w-4 h-4 text-teal-600 shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-5 w-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm py-3.5 rounded-lg transition-colors">
            Download Report
          </button>
          <p className="mt-3 text-xs text-faint">
            We value your privacy.{" "}
            <a href="#" className="underline text-teal-700">
              Learn more
            </a>
            .
          </p>
        </div>
      </div>

      {/* right: normal flow, page scrolls it naturally */}
      <div className="w-full lg:w-[60%]">
        <div className="lg:max-w-[700px]">
          <div className=" h-[385px] rounded-xl">
            <img
              src="https://res.cloudinary.com/dhadohg2h/image/upload/v1783521108/A_photorealistic_image_of_a_silver__laptop__with_a_report_bar_on_the_screen__with_the_word__Progress_1_xszm1o.png"
              alt="laptop_icon"
              className="w-full h-full overflow-hidden rounded-xl object-center"
            />
          </div>
          <div className="mx-auto mt-10 text-justify">
            <p className="text-faint leading-relaxed">
              You didn't hire your HR team so they could spend three days a
              month reconciling numbers by hand. But for most Nepali companies
              still running payroll on spreadsheets, that's exactly what it's
              become.
            </p>
            <p className="mt-5 text-faint leading-relaxed">
              Software promised simplicity, but for HR teams juggling attendance
              sheets, a separate payroll file, and manual compliance math, it's
              delivered something closer to a second full-time job. Every cycle
              means re-checking tax slabs, converting dates between calendars,
              and hoping nothing was copied incorrectly between systems.
            </p>
            <p className="mt-5 text-faint leading-relaxed">
              It all adds up to a recurring "reconciliation tax" that compounds
              every single month.
            </p>
            <p className="mt-6 font-semibold text-fain">
              Our 2026 Nepal Payroll Report looks at what manual payroll and
              compliance actually costs growing companies — and the picture is
              more than a little sobering.
            </p>
            <p className="mt-6 font-semibold text-faint">
              Inside this report, you'll find:
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-faint">
              <li className="flex gap-2">
                <span className="text-faint">•</span>
                Why manual SSF and CIT calculation is one of the most common
                sources of payroll error in Nepal
              </li>
              <li className="flex gap-2">
                <span className="text-faint">•</span>
                Why BS/AD calendar conversion quietly causes more payroll
                mistakes than most HR teams realize
              </li>
              <li className="flex gap-2">
                <span className="text-gray-faint">•</span>
                The compliance gaps that appear when employee records live
                across spreadsheets that don't sync
              </li>
              <li className="flex gap-2">
                <span className="text-gray-faint">•</span>
                What separates HR teams running lean, accurate payroll from
                those still drowning in reconciliation work
              </li>
            </ul>
            <p className="mt-6 text-faint leading-relaxed">
              <span className="font-bold text-faint">Plus:</span> Take our
              5-minute Payroll Readiness Assessment to see where your
              organization stands, and get a personalized path toward automated
              compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ROI helper function
const roiSections = [
  {
    topic: "Onboarding",
    stat: "~4 hours saved per new hire",
    content: (
      <>
        <p className="text-gray-700 leading-relaxed">
          From collecting documents to setting up attendance and payroll
          records, a lot goes into onboarding a new employee before their first
          day even starts. Missing a step often means chasing paperwork days
          later, or a new hire's SSF enrollment slipping through the cracks.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <span className="font-bold">For example:</span> if manually collecting
          documents, entering employee details, and setting up SSF enrollment
          takes roughly 5 hours per hire across separate tools, doing it in one
          connected system — where documents, attendance, and payroll setup
          happen in the same flow — can realistically cut that to about an hour.
        </p>
      </>
    ),
  },
  {
    topic: "Payroll & Compliance",
    stat: "~3 hours saved per payroll cycle",
    content: (
      <>
        <p className="text-gray-700 leading-relaxed">
          Manually calculating SSF, CIT, and TDS for every employee — then
          double-checking tax slabs and converting BS dates by hand — adds up
          fast, especially as your team grows past a handful of people.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <span className="font-bold">For example:</span> for a 30-person team,
          manually checking and calculating compliance deductions might take 3–4
          hours every payroll cycle. When SSF, CIT, and TDS calculate
          automatically from the same attendance and salary data, that work
          happens in minutes instead — with far less room for a missed filing.
        </p>
      </>
    ),
  },
  {
    topic: "Administrative Tasks",
    stat: "~2 hours saved per day",
    content: (
      <>
        <p className="text-gray-700 leading-relaxed">
          Data entry, answering the same leave-balance question for the third
          time this week, updating a spreadsheet that three other people also
          have open — this is where a lot of an HR manager's day quietly
          disappears.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <span className="font-bold">For example:</span> if routine questions
          and manual data updates take up 3–4 hours of a typical workday, an AI
          assistant that answers employees directly — and a single system that
          doesn't need re-entering data — can bring that down to under two,
          freeing up real time for actual HR work.
        </p>
      </>
    ),
  },
  {
    topic: "Leave Tracking",
    stat: "Fewer disputed leave balances",
    content: (
      <>
        <p className="text-gray-700 leading-relaxed">
          Unreported or miscounted leave doesn't just cause awkward
          conversations at resignation — it can mean incorrect final
          settlements, and disputes that take real time to sort out.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <span className="font-bold">For example:</span> a team relying on a
          shared spreadsheet for leave often finds mismatches between what an
          employee remembers and what was actually recorded. When leave
          requests, approvals, and balances update automatically in one place,
          both sides are always looking at the same number.
        </p>
      </>
    ),
  },
];

const blobShapes = [
  "54% 46% 52% 48% / 48% 54% 46% 52%",
  "47% 53% 55% 45% / 52% 48% 55% 45%",
  "51% 49% 46% 54% / 45% 55% 49% 51%",
  "49% 51% 53% 47% / 55% 45% 51% 49%",
];

function ROISection() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-[38px] font-bold text-faint/95">
          Discover How Much Time You Can Save With Sathi
        </h2>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <p className="text-faint text-justify leading-relaxed">
          Sathi is software that stores, tracks, and automates your HR, payroll,
          and compliance work — attendance, SSF/CIT/TDS calculation, leave, and
          employee records, all in one connected system instead of scattered
          across spreadsheets and separate tools.
        </p>
        <p className="mt-5 text-faint text-justify leading-relaxed">
          Manual, disconnected HR processes cost real time — and that time adds
          up fast as your team grows. Below are illustrative examples of where
          that time typically goes, and roughly what automating it can look
          like, across four common areas.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-16 space-y-20">
        {roiSections.map((section, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={section.topic}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-5 items-center ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* blob stat card */}
              <div className="flex justify-center">
                <div
                  className="w-64 h-64 flex items-center justify-center text-center p-8 bg-gradient-to-b from-[#498d7d] via-[#358674] to-[#168069]"
                  style={{ borderRadius: blobShapes[i % blobShapes.length] }}
                >
                  <div>
                    <p className="text-white text-lg font-semibold uppercase tracking-wide">
                      RoI
                    </p>
                    <p className="text-white text-xl font-bold mt-2 leading-snug">
                      {section.stat}
                    </p>
                  </div>
                </div>
              </div>

              {/* text content */}
              <div>
                <h3 className="text-2xl font-bold text-faint">
                  {section.topic}
                </h3>
                <div className="mt-2 text-faint text-[15px] text-justify">
                  {section.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div>
      {/* info section  */}
      <div className="px-8 bg-[#fffefe] pb-20">
        {/* Glossary Terminology */}
        <div className="pt-16 pb-16 bg-white">
          {/* title block */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-green-dim">
              A Glossary of HR &amp; Payroll Terminology
            </h1>
            <p className="mt-4 text-xl font-medium text-faint">
              Plain-language definitions for HR, payroll, and Nepal-specific
              compliance terms
            </p>
          </div>

          {/* intro copy block */}
          <div className=" md:mt-36 mt-24 md:px-28">
            <h2 className="text-3xl md:text-4xl font-bold text-faint/95 leading-tight">
              The Sathi HR &amp; Payroll Glossary
            </h2>

            <p className="mt-5 text-faint text-justify leading-relaxed">
              Welcome! If you're here, chances are you've run into a term
              somewhere — in a payslip, a compliance filing, or a conversation
              with your accountant — and wanted a straight answer, not a
              textbook definition. That's exactly what this glossary is for.
            </p>

            <p className="mt-5 text-faint text-justify leading-relaxed">
              From the everyday to the technical, from Attendance Tracking to
              SSF Contribution, we've put together a list of the terms that
              actually come up when running HR and payroll in Nepal — defined in
              plain language, not jargon. Whether you're an HR professional, a
              business owner handling payroll yourself, or just trying to
              understand your own payslip, you'll find it here.
            </p>

            <p className="mt-5 text-faint text-justify leading-relaxed">
              Our hope is that this glossary helps in more ways than one —
              whether you're double-checking what a CIT deduction actually
              means, understanding a line item on a compliance report, or just
              want to sound confident the next time payroll comes up in a
              meeting. We're here to help.
            </p>
          </div>
        </div>

        <div className="md:px-28 ">
          <h1 className="text-3xl md:text-4xl font-bold text-faint/95 leading-tight lg:max-w-[800px]">
            The 2026 Nepal Payroll Report: Quantifying the cost of manual
            compliance
          </h1>
          <p className="mt-4 mb-16 text-faint max-w-2xl leading-relaxed">
            Reclaim your HR team's time and reduce the "reconciliation tax" by
            identifying the hidden cost of spreadsheet payroll and manual SSF,
            CIT, and TDS filing.
          </p>
        </div>

        <div>
          <ReportSection />
        </div>
      </div>

      {/*  Return on Investment section */}
      <div>
        <ROISection />
      </div>
    </div>
  );
}

export default Resources;
