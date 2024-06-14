import PropertyAdvertisement from "./PropertyAdvertisement";
import PropertyExtraDetails from "./PropertyExtraDetails";
import PropertyImages from "./PropertyImages";
import ProperrtyInquiry from "./PropertyInquiry";
import PropertyLocation from "./PropertyLocation";
import PropertyMainDetails from "./PropertyMainDetails";

function MainBody({ property }) {
  return (
    <>
      {property.map((property) => (
        <div key={property.id}>
          <PropertyImages
            propertyImages={property.propertyImages}
          />
          <PropertyMainDetails propertyDetails={property.property}/>
          <PropertyExtraDetails propertyDetails={property}/>
          <PropertyAdvertisement propertyVideo={property.viewVideoUrl}/>
          <PropertyLocation propertyLocation={property.mapLocation}/>
          <ProperrtyInquiry/>
        </div>
      ))}
    </>
  );
}

export default MainBody;
