import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coOrdinate = [district.latitude, district.longitude];
      mapRef.current.flyTo(coOrdinate, 14);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-secondary text-center">
        We Are Available in <span className="text-primary">64 Districts</span>
      </h1>

      <form onSubmit={handleSubmit} className="flex justify-center mt-10 mb-6">
        <div className="relative w-full md:w-1/2">
          <input
            type="search"
            name="location"
            required
            placeholder="Search District…"
            className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <svg
            className="h-5 w-5 opacity-60 absolute left-4 top-3.5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-5 bg-primary text-white font-semibold rounded-r-xl hover:bg-secondary transition"
          >
            Search
          </button>
        </div>
      </form>

      <h3 className="font-bold text-xl text-center pb-4">
        We Deliver All Over Bangladesh
      </h3>

      <div className="h-[800px] rounded-2xl shadow-xl border overflow-hidden">
        <MapContainer
          className="h-full w-full"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenter?.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong className="text-lg">{center.district}</strong>
                <br />
                <span className="font-bold">Service Area:</span>{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
