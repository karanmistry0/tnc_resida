import BathImg from "../../assets/bath.svg";
import SizeImg from "../../assets/size.svg";
import BedImg from "../../assets/bed.svg";
import LocationImg from "../../assets/location.svg"
import PhoneImg from "../../assets/phone.svg"

function PropertyMainDetails({ propertyDetails }) {
  console.log(propertyDetails);
  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  p-4 justify-between lg:py-10 border-b">
      <div className="md:pb-4 pb-4 lg:pb-0">
        <h2 className="text-3xl font-bold text-secondary">
          {propertyDetails.price}
        </h2>
        <h2 className="text-3xl font-bold py-6">{propertyDetails.title}</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-max items-center gap-6">
          <p className="p-3 bg-gray-100 text-gray-500 flex items-center">
            <img src={SizeImg} alt="size icon" className="me-2" />
            {propertyDetails.size}
          </p>
          <p className="p-3 bg-gray-100 text-gray-500 flex items-center">
            <img src={BedImg} alt="bed icon" className="me-2" />
            {propertyDetails.bedrooms} Beds
          </p>
          <p className="p-3 bg-gray-100 text-gray-500 flex items-center">
            <img src={BathImg} alt="bath icon" className="me-2" />
            {propertyDetails.bathrooms} Baths
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-x-4 gap-4">
        <div className="py-10 h-full lg:w-min md:w-min sm:w-min w-full px-4 bg-gray-100 text-gray-500 flex flex-col justify-center items-center text-center gap-4">
            <img src={LocationImg} alt="location Img" className="w-9 h-9"/>
            <p>{propertyDetails.address}</p>
        </div>
        <div className=" py-10 px-6 bg-gray-100 text-gray-500 flex flex-col justify-center items-center text-center gap-4 lg:w-max md:w-max w-full">
            <img src={PhoneImg} alt="Phone Img" className="w-9 h-9"/>
            {propertyDetails.phoneNumber.map((number)=>(
                <p>{number}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyMainDetails;
