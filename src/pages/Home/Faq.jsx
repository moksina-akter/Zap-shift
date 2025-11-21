import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowBigUpDash,
  ArrowDown01Icon,
  ArrowBigRightDash,
  ArrowDownRight,
  ArrowDownLeft,
  ArrowDownUp,
  ArrowUpLeft,
  ArrowUpRight,
} from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does this posture corrector work?",
      a: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
    {
      q: "Is it suitable for all ages and body types?",
      a: "Yes, it is designed to fit a wide range of ages and body types with adjustable straps for proper comfort.",
    },
    {
      q: "Does it really help with back pain and posture improvement?",
      a: "Consistent use can help improve posture and reduce back pain by encouraging proper spinal alignment.",
    },
    {
      q: "Does it have smart features like vibration alerts?",
      a: "Some models include vibration reminders that activate when you slouch.",
    },
    {
      q: "How will I be notified when the product is back in stock?",
      a: "You can sign up for notifications via email to get alerts when it's restocked.",
    },
  ];

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl text-secondary font-bold text-center">
        Frequently Asked Questions (FAQ)
      </h2>
      <p className="text-gray-500 text-center mt-2 max-w-xl">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
      <div className="w-full max-w-3xl mt-10 space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl overflow-hidden shadow-sm transition-all`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-sm font-medium text-secondary"
            >
              {item.q}
              {openIndex === i ? <ChevronUp /> : <ChevronDown />}
            </button>

            {openIndex === i && (
              <div className="px-6 pb-4 text-gray-600 text-sm">{item.a}</div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center ">
        <button className="mt-10 bg-primary hover:bg-lime-500 text-gray-800 font-semibold px-6 py-2 rounded-lg flex items-center gap-2 shadow-md">
          See More FAQ’s
        </button>
        <button className="text-primary bg-black p-2 mt-9 rounded-full">
          <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
};
export default Faq;
