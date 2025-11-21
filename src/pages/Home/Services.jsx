// import { servicesData } from "../data/servicesData";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: "🚀",
      title: "Express & Standard Delivery",
      desc: "Our express and standard delivery service ensures fast, reliable, and secure parcel movement across the country. With real-time tracking and doorstep pickup, businesses and individuals can send packages with complete peace of mind. Delivery timelines range between 24–72 hours depending on the destination.",
      highlight: false,
    },
    {
      id: 2,
      icon: "📮",
      title: "Nationwide Delivery",
      desc: "We provide comprehensive nationwide delivery covering all districts and major cities. Whether it’s personal packages or bulk business shipments, our logistics network ensures your products reach customers safely within 48–72 hours. Home delivery available in all metropolitan areas.",
      highlight: true,
    },
    {
      id: 3,
      icon: "📦",
      title: "Fulfillment Solution",
      desc: "Our fulfillment solution offers end-to-end support for online businesses, including inventory management, quality checks, packaging, labeling, and after-sales logistics. This service is ideal for e-commerce brands looking to streamline operations and reduce overall costs.",
      highlight: false,
    },
    {
      id: 4,
      icon: "🏬",
      title: "Warehouse & Storage Service",
      desc: "Secure warehouse facilities with advanced temperature control, CCTV monitoring, and organized storage systems. Businesses can store bulk goods for short or long terms, with optional inventory handling, dispatch management, and automated stock reporting.",
      highlight: false,
    },
    {
      id: 5,
      icon: "🔁",
      title: "Return & Exchange Handling",
      desc: "We manage product returns, exchanges, and customer redelivery with full efficiency. E-commerce companies can rely on us to handle reverse logistics, making the customer experience smoother and increasing brand trust and retention.",
      highlight: false,
    },
    {
      id: 6,
      icon: "📊",
      title: "Business Analytics & Tracking",
      desc: "Advanced analytics dashboard for businesses, offering detailed insights on deliveries, customer locations, peak hours, COD collection reports, and logistics performance metrics. Designed to help businesses make smarter operational decisions.",
      highlight: false,
    },
  ];

  return (
    <section className="bg-secondary rounded py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Our Services</h2>
        <p className="text-gray-300 mt-2 mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-2xl shadow-md ${
                item.highlight ? "bg-white hover:bg-primary" : "bg-white"
              }`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl text-secondary font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
