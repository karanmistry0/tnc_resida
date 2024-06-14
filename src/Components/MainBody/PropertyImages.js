function PropertyImages({ propertyImages }) {
  console.log(propertyImages);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-0.5 ">
      {propertyImages.map((image,index) => (
        <img key={index} src={image} alt="Property Images" className="w-full lg:h-72 h-36"/>
      ))}
    </div>
  );
}

export default PropertyImages;
