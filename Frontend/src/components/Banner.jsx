import banner from '../../public/Banner.jpg'
const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn somethings{" "}
              <span className="text-pink-500">new everything!</span>{" "}
            </h1>
            <p className="text-xl">
              Bookstores draws book lovers of all ages into a community where
              they can discover great books, engage with booklovers and meet
              their favourite literary personalities.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
          </div>
          <button className="btn btn-active mt-6 btn-secondary">Submit</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
            <img className='w-92 h-92' src={banner} alt="bannerimage" />
        </div>
      </div>
    </>
  );
};

export default Banner;
