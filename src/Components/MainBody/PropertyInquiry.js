import Button from "../../utils/Button";

function ProperrtyInquiry() {
  return (
    <div className="bg-contact-color m-4 ">
      <div className="lg:p-20 px-6 py-10 lg:bg-contact bg-right-bottom  bg-no-repeat bg-[length:550px_250px]">
        <h1 className="text-white font-semibold lg:text-6xl text-4xl lg:text-left text-center">
          Do you have questions?
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 pt-10 gap-4 lg:justify-items-start justify-items-center">
            <div className="flex flex-col gap-3 lg:p-0 px-6 text-center">
                <p className="text-3xl font-semibold text-rose-200 leading-[50px]">Call or text today, we are here to help! </p>
                <p className="text-white font-semibold text-3xl">555-222-3456</p>
            </div>
            <div>
                <Button type="button" className=' py-3 px-8'>View Details</Button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProperrtyInquiry;
