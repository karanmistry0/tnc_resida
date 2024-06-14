function PropertyAdvertisement({ propertyVideo }) {
  console.log(propertyVideo);
  return (
    <div className="bg-gray-100 flex flex-col items-center py-20">
      <h1 className="lg:text-[45px] md:text-[45px] sm:text-[30px] text-[25px] font-bold  mb-6 max-w-4xl lg:p-0 px-8 text-center">
        "Stunning Three-Bedroom Home with Spacious Backyard
      </h1>
      <iframe
        className="max-w-6xl mx-auto w-full lg:h-[80vh] sm:h-[50vh] lg:p-0 px-4"
        src={propertyVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default PropertyAdvertisement;
