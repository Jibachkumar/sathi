import { Users } from "lucide-react";

interface FeatureDetail {
  icon: typeof Users;
  title: string;
  description: string[];
}

interface FeatureDetailListProps {
  heading: string;
  intro: string;
  features: FeatureDetail[];
}

function FeatureDetailsList({
  heading,
  intro,
  features,
}: FeatureDetailListProps) {
  return (
    <section className="pb-20 pt-28 px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-faint/90 max-w-5xl mx-auto leading-tight">
        {heading}
      </h2>
      <p className="mt-2 text-center text-lg text-faint leading-relaxed">
        {intro}
      </p>

      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-20">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between gap-4 py-5 border-t border-gray-300 last:border-b md:last:border-b-0 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-semibold text-faint text-lg">{item.title}</p>
                {item.description.map((desc, i) => (
                  <p
                    key={i}
                    className="text-sm text-justify text-faint mt-0.5 leading-6"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureDetailsList;
