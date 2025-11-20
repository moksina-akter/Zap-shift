import marchant from "../../assets/location-merchant.png";
import dew from "../../assets/be-a-merchant-bg.png";
const Merchant = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#003A3A] text-white p-10 md:p-16 rounded-3xl relative overflow-hidden">
          {/* LINE GRAPH BACKGROUND EFFECT */}
          <div className="absolute inset-0 opacity-20">
            <img src={dew} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-bold">
              Merchant and Customer Satisfaction
              <br />
              is Our First Priority
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. ZapShift Courier delivers
              parcels in every corner of Bangladesh right on time.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-primary text-black px-6 py-3 rounded-xl font-medium">
                Become a Merchant
              </button>

              <button className="border border-primary text-primary px-6 py-3 rounded-xl">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right side Illustration */}
          <div className="absolute right-10 bottom-28 md:block  hidden">
            <img
              src={marchant}
              alt=""
              className="w-96 h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchant;
