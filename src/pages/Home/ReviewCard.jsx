import img from "../../assets/reviewQuote.png";

const ReviewCard = ({ reviews }) => {
  const { userName, review, user_photoURL } = reviews;

  return (
    <div className="max-w-md mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-gray-100 relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <img src={img} alt="Quote" className="" />
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{review}</p>
      <hr className="border-dashed text-gray-500 max-w-5xl mx-auto my-4" />{" "}
      <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 rounded-full border border-gray-300"
          src={user_photoURL}
          alt={userName}
        />
        <div>
          <h1 className="text-secondary font-bold text-lg">{userName}</h1>
          <p className="text-xs uppercase font-semibold opacity-60 tracking-wide">
            Customer Review
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
