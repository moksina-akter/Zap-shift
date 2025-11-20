// import { howItWorksData } from "../data/howItWorksData";

const HowItWorks = () => {
  const howItWorksData = [
    {
      id: 1,
      icon: "📦",
      title: "Booking Pick & Drop",
      desc: "We deliver on time, every time.",
    },
    {
      id: 2,
      icon: "💰",
      title: "Cash On Delivery",
      desc: "Secure COD service for all items.",
    },
    {
      id: 3,
      icon: "🚚",
      title: "Delivery Hub",
      desc: "Fast processing & distribution.",
    },
    {
      id: 4,
      icon: "🏢",
      title: "Booking SME & Corporate",
      desc: "Corporate-level delivery support.",
    },
  ];

  return (
    <div className="mx-auto px-4 py-12 rounded-3xl bg-base-200 shadow-inner">
      <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
        How it Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {howItWorksData.map((item) => (
          <div
            key={item.id}
            className="
          bg-white/80 backdrop-blur-lg 
          p-8 
          rounded-2xl 
          shadow-lg border border-gray-100 
          transition-all duration-300 
          hover:shadow-2xl hover:-translate-y-2
        "
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-secondary/10 flex items-center justify-center">
              <span className="text-4xl text-secondary">{item.icon}</span>
            </div>

            <h3 className="font-semibold text-xl text-secondary mb-3 text-center">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
