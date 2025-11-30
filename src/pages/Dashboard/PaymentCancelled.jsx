import React from "react";

const PaymentCancelled = () => {
  return (
    <div>
      <h1 className="text-4xl">Payment cancelled.</h1>;
      <Link to="/dashboard/my-parcels">
        <button className="btn btn-primary text-black">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
