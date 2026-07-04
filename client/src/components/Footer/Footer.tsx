import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const footerLinks = {
  platformCol1: [
    "Platform Overview",
    "AI HR Assistant",
    "Product Tour",
    "Product Updates",
    "Integrations",
  ],
  platformCol2: [
    "HR Data & Reporting",
    "Payroll",
    "Benefits Administration",
    "Attendance",
    "Onboarding",
    "Performance Management",
    "Employee Experience",
    "Compensation",
    "Compliance",
  ],
  resources: [
    "Pricing",
    "Customer",
    "Blog",
    "Resources",
    "Nepal Payroll Guide",
    "Events",
  ],
  company: [
    "Our Story",
    "Media",
    "Careers",
    "Contact",
    "Partner with Us",
    "AI Principles",
  ],
  compareCol1: ["vs Bidhee", "vs Saral Payroll"],
  compareCol2: ["vs Oracle", "vs SAP"],
};

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaYoutube, href: "#" },
];

function Footer() {
  return (
    <footer className="bg-[#161a25] border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12">
        {/* Platform — spans 2 cols worth of content like Bamboo's does */}
        <div className="col-span-2 grid grid-cols-2 gap-x-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.platformCol1.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-mint-300 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-9">
            <ul className="space-y-4">
              {footerLinks.platformCol2.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-mint-300 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-bold text-lg mb-5">Resources</h4>
          <ul className="space-y-4">
            {footerLinks.resources.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white/70 hover:text-mint-300 text-sm transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold text-lg mb-5">Company</h4>
          <ul className="space-y-4">
            {footerLinks.company.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white/70 hover:text-mint-300 text-sm transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Compare Sathi */}
        <div>
          <h4 className="text-white font-bold text-lg mb-5">Compare Sathi</h4>
          <div className="grid grid-cols-2 gap-x-4">
            <ul className="space-y-4">
              {footerLinks.compareCol1.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-mint-300 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {footerLinks.compareCol2.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-mint-300 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/60">
            <a href="#" className="hover:text-mint-300 transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-mint-300 transition-colors">
              Legal
            </a>
            <a href="#" className="hover:text-mint-300 transition-colors">
              Privacy
            </a>

            <a href="#" className="hover:text-mint-300 transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-mint-300 hover:text-teal-900 text-white/80 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row md:justify-between gap-2 text-xs text-white/50">
          <span className="font-semibold text-mint-300">
            Do not sell or share my personal information.
          </span>
          <span>
            © 2026 Sathi. All Rights Reserved. Sathi® is a registered trademark.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
