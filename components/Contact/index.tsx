import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2
                className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl"
                style={{ fontSize: "48px" }} // Adjust the font size as needed
              >
                Contact Us Today!
              </h2>
              <p
                className="mb-12 text-lg font-medium text-body-color sm:text-xl"
                style={{ fontSize: "24px" }} // Adjust the font size as needed
              >

              </p>
              <div className="mb-8">
                <h3
                  className="text-2xl font-semibold text-dark dark:text-white"
                  style={{ fontSize: "36px" }} // Adjust the font size as needed
                >
                  Email
                </h3>
                <p
                  className="text-lg text-body-color sm:text-xl"
                  style={{ fontSize: "24px" }} // Adjust the font size as needed
                >
                  <a
                    href="mailto:Info@CheyenneFlowerFarmLLC.com"
                    className="text-blue-500"
                    style={{ fontSize: "28px" }} // Adjust the font size as needed
                  >
                    Info@CheyenneFlowerFarmLLC.com
                  </a>
                </p>
              </div>
              <div className="mb-8">
                <h3
                  className="text-2xl font-semibold text-dark dark:text-white"
                  style={{ fontSize: "36px" }} // Adjust the font size as needed
                >
                  Address
                </h3>
                <p
                  className="text-lg text-body-color sm:text-xl"
                  style={{ fontSize: "28px" }} // Adjust the font size as needed
                >
                  2310 Road 217, Cheyenne, WY 82009
                </p>
              </div>
              <div>
                <h3
                  className="text-2xl font-semibold text-dark dark:text-white"
                  style={{ fontSize: "36px" }} // Adjust the font size as needed
                >
                  Phone
                </h3>
                <p
                  className="text-lg text-body-color sm:text-xl"
                  style={{ fontSize: "28px" }} // Adjust the font size as needed
                >
                  307.321.9985 
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
