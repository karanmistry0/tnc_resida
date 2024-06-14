function PropertyLocation({ propertyLocation }) {
  return (
    <div className=" flex flex-col items-center py-20">
      <h1 className="lg:text-[45px] md:text-[45px] sm:text-[30px] text-[25px] font-bold  mb-6 max-w-4xl text-center">
        Property Location: Your Gateway to Desirable Living
      </h1>
      <iframe
        className="max-w-6xl mx-auto w-full h-[80vh] lg:p-0 px-4"
        src={propertyLocation}
        width="600"
        height="450"
        allowfullscreen=""
        title="Location"
      ></iframe>
    </div>
  );
}

export default PropertyLocation;
