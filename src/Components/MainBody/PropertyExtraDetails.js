import CheckedIcon from "../../assets/checked_icon.svg"
import ContactToAgentForm from "./ContactForm";

function PropertyExtraDetails({ propertyDetails }) {
  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 grid-cols-1 md justify-between lg:gap-24 py-10 lg:p-0 px-4">
      <div className="col-span-2">
        <div className="py-5">
          <h2 className="text-xl font-semibold">Property Description</h2>
          <p className="py-5 text-[17px] leading-relaxed text-gray-400">
            {propertyDetails.propertyDescription}
          </p>
        </div>

        <div className="py-5">
          <h2 className="uppercase text-xl border-b  font-semibold mb-8">
            Additional Details
          </h2>
          <div className="lg:w-1/2">
            {Object.keys(propertyDetails.additionalDetails).map(
              (details, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 py-4 border-b border-gray-200"
                >
                  <p className="font-semibold text-gray-800">
                    {details.replace("_", " ")}
                  </p>
                  <p className="text-right text-gray-500">
                    {propertyDetails.additionalDetails[details]}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="py-5">
            <h2 className="text-xl font-semibold border-b w-max py-2"> Amenities </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {propertyDetails.amenities.map((amenity)=>(
                <p className="flex py-4 items-center"><img src={CheckedIcon} alt="checked icon" className="h-4 w-4 me-4"/>{amenity}</p>
            ))}
            </div>
        </div>
      </div>

      <ContactToAgentForm/>
    </div>
  );
}

export default PropertyExtraDetails;
