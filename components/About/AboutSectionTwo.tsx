import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 text-center lg:m-0"
              data-wow-delay=".15s"
              style={{ height: '1000px', width: '100%' }} // Set height to double the current size
            >
              <Image
                src="/images/about/normflowers2.jpg"
                alt="about image"
                layout="fill"
                objectFit="cover"
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/normflowers2.jpg"
                alt="about image"
                layout="fill"
                objectFit="cover"
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 mt-30"> {/* Added top margin here */}
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                  Where are our flowers from?
                </h3>
                <p className="text-xl font-medium leading-relaxed text-body-color sm:text-2xl sm:leading-relaxed">
                Most people don’t realize that as many as 80% of all cut flowers sold in the U.S. are imported, with the majority coming from Columbia, Ecuador, Holland, and African countries such as Kenya. Our family is proud to grow all of our cut flowers locally, right here in Cheyenne!
                </p>
</div>
<div className="mb-9">
  <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
    Where can you buy our flowers?
  </h3>
  <p className="text-xl font-medium leading-relaxed text-body-color sm:text-2xl sm:leading-relaxed mb-4">
    Tuesday’s Farmers Market (6/11 – 10/1) and Cheyenne Farmer’s Market (8/10-10/12) both located in the Frontier Mall.
  </p>
  <p className="text-xl font-medium leading-relaxed text-body-color sm:text-2xl sm:leading-relaxed mb-4">
    We also occasionally sell our flowers at Murdoch’s, 3773 E Lincolnway | Tractor Supply, 10643 Hynds Blvd.
  </p>
  <p className="text-xl font-medium leading-relaxed text-body-color sm:text-2xl sm:leading-relaxed mb-4">
    You can pick up your custom order at our farm located at 2310 Road 217, or we will deliver for a fee.
  </p>
</div>

              <div className="mb-1">
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                How to pay?
                </h3>
                <p className="text-xl font-medium leading-relaxed text-body-color sm:text-2xl sm:leading-relaxed">
                  Cash or Credit Card
                </p>
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                Field trips?
                </h3>
                <p className="text-xl font-medium leading-relaxed text-body-color sm:text-2xl sm:leading-relaxed">
                We offer field trips for groups and schools!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
