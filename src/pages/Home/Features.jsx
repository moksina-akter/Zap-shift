// import { featuresData } from "../data/featuresData";
import liveTracking from "../../assets/live-tracking.png";
import safeDelivery from "../../assets/safe-delivery.png";
// import callSupport from "../../assets/safe-delivery.png";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      image: liveTracking, // চাইলে ইমোজি ও দিতে পারো: "📍"
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s complete journey and get fast status updates for full peace of mind.",
    },
    {
      id: 2,
      image: safeDelivery,
      title: "100% Safe Delivery",
      desc: "We ensure every parcel is handled with utmost care and delivered securely to its destination. Our trusted delivery system guarantees no damage and zero-risk handover every time.",
    },
    {
      id: 3,
      image: safeDelivery,
      title: "24/7 Call Center Support",
      desc: "Our friendly support team is available 24/7 to assist with any questions, updates, delays or delivery concerns. Get instant help whenever you need it.",
    },
  ];

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {featuresData.map((item) => (
          <div
            key={item.id}
            className="bg-white  rounded-xl p-8 shadow-sm flex items-center gap-6 border border-gray-200"
          >
            <div className="w-28 border-r pr-2 border-dashed border-gray-400 flex justify-center">
              <span className="text-5xl">{item.icon}</span>

              <img src={item.image} alt="" className="w-20" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>{" "}
      <hr className="border-dashed text-gray-500 max-w-5xl mx-auto mt-14" />
    </section>
  );
};

export default Features;
