// import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((center) => center.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({
    control,
    name: "receiverRegion",
  });

  const districtByRegions = (region) => {
    const regionDistrict = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };
  // console.log(regions);

  const handleSendParcel = (data) => {
    console.log(data);

    const isDocument = data.parcelType === "document";
    const isSamaDistrict = data.senderDistrict === data.receiverDistrict;
    // console.log(isSamaDistrict);

    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSamaDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSamaDistrict ? 110 : 150;
      } else {
        const minCharge = isSamaDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSamaDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    data.cost = cost;
    Swal.fire({
      title: "Confirm the cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          console.log(res.data);
        });

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-10 relative"
      >
        <h1 className="text-5xl font-extrabold text-secondary">
          Send A Parcel
        </h1>
        <p className="mt-3 font-bold text-2xl">Enter your parcel details</p>
        <div className="mt-6 border-t border-gray-200 pt-6">
          {/* document */}
          <div className="flex pb-6 items-center gap-6">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="document"
                {...register("parcelType")}
                defaultChecked
                className="w-4 h-4  bg-white border-gray-300 "
              />
              <span className="text-sm font-medium text-gray-800">
                Document
              </span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="non-document"
                {...register("parcelType")}
                className="w-4 h-4  bg-white border-gray-300"
              />
              <span className="text-sm font-medium text-gray-800">
                Not-Document
              </span>
            </label>
          </div>

          {/* parcel name and weigth */}
          <div className="md:flex border-b border-gray-200 pb-8 gap-4">
            <div className="flex-1">
              <label className="block mb-1">Parcel Name</label>
              <input
                {...register("parcelName")}
                type="text"
                className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm bg-white/50 placeholder-gray-300"
                placeholder="Parcel Name"
              />
            </div>
            <div className="flex-1">
              <label className="block  mb-1">Parcel Weight (KG)</label>
              <input
                {...register("parcelWeight")}
                type="number"
                className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm bg-white/50 placeholder-gray-300"
                placeholder="Parcel Weight (KG)"
              />
            </div>
          </div>

          {/* sender and receiver */}
          <div className="space-y-3 py-4">
            <div className="md:grid md:grid-cols-2 gap-6 ">
              {/* sender */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700">
                  Sender Details
                </h3>
                <div className="mt-3 space-y-3">
                  <label htmlFor="">Sender Name</label>
                  <input
                    defaultValue={user?.displayName}
                    type="text"
                    {...register("senderName")}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm"
                    placeholder="Sender Name"
                  />
                  <label htmlFor="">Sender Email</label>
                  <input
                    defaultValue={user?.email}
                    type="text"
                    {...register("senderEmail")}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm"
                    placeholder="Sender Email"
                  />
                  <fieldset className="fieldset">
                    <legend className="text-lg">Sender Regions</legend>
                    <select
                      {...register("senderRegion")}
                      defaultValue="Pick a regions"
                      className="select w-full"
                    >
                      <option disabled={true}>Pick a Regions</option>
                      {regions.map((r, i) => (
                        <option key={i} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="text-lg">Sender District</legend>
                    <select
                      {...register("senderDistrict")}
                      defaultValue="Pick a District"
                      className="select w-full"
                    >
                      <option disabled={true}>Pick a District</option>
                      {districtByRegions(senderRegion).map((r, i) => (
                        <option key={i} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                  <label htmlFor="">Sender Address</label>
                  <input
                    type="text"
                    {...register("senderAddress")}
                    className="w-full px-3 border-gray-400 py-2 border rounded-md text-sm"
                    placeholder="Address"
                  />
                  <label htmlFor="">Sender Phone No</label>
                  <input
                    type="number"
                    {...register("senderPhone")}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm"
                    placeholder="Sender Phone No"
                  />

                  <label htmlFor="">Pickup Instruction</label>
                  <textarea
                    {...register("deliveryDescriptions")}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm h-24"
                    placeholder="Pickup Instruction"
                  />
                </div>
              </div>
              {/* receiver */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700">
                  Receiver Details
                </h3>
                <div className="mt-3 space-y-3">
                  <label htmlFor="">Receiver Name</label>
                  <input
                    // value="text"
                    {...register("receiverName")}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm"
                    placeholder="Receiver Name"
                  />
                  <label htmlFor="">Receiver Email</label>
                  <input
                    type="email"
                    {...register("receiverEmail")}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm"
                    placeholder="Receiver Email"
                  />
                  <fieldset className="fieldset">
                    <legend className="text-lg">Receiver Regions</legend>
                    <select
                      {...register("receiverRegion")}
                      defaultValue="Pick a regions"
                      className="select w-full"
                    >
                      <option disabled={true}>Pick a Regions</option>
                      {regions.map((r, i) => (
                        <option key={i} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="text-lg">Receiver District</legend>
                    <select
                      {...register("receiverDistrict")}
                      defaultValue="Pick a District"
                      className="select w-full"
                    >
                      <option disabled={true}>Pick a District</option>
                      {districtByRegions(receiverRegion).map((d, i) => (
                        <option key={i} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </fieldset>

                  <label htmlFor="">Receiver Address</label>
                  <input
                    // value="text"
                    {...register("receiverAddress")}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm"
                    placeholder="Receiver Address"
                  />
                  <label htmlFor="">Receiver Contact No</label>
                  <input
                    // value="number"
                    {...register("receiverNumber")}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm"
                    placeholder="Receiver Contact No"
                  />

                  <label htmlFor="">Delivery Instruction</label>
                  <textarea
                    {...register("deliveryDescription")}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm h-24"
                    placeholder="Delivery Instruction"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            * PickUp Time 4pm-7pm Approx.
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-block bg-primary text-black px-6 py-2 rounded-md font-semibold text-sm shadow-sm"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
