const About = () => {
  return (
    <section className="bg-blueSky py-12 lg:py-[0px] lg:bg-white flex lg:flex-row flex-col relative justify-center    ">
      <div className="order-2  lg:order-1 lg:w-2/4  lg:py-10  flex lg:justify-end">
        <div className="bg-blueSky py-[30px]  px-[40px]  lg:border-l-2 lg:border-y-2 border-r-0 border-white  lg:p-[30px] md:w-[80%] xl:w-[60%] lg:my-[50px] lg:rounded-l-[36px] flex flex-col gap-5 ">
          <h1 className="lg:text-[30px] text-[18px] text-white font-bold">
            {" "}
            What is Lorem ipsum
          </h1>
          <p className="text-blueMarine">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            minus dignissimos libero rem fugiat magni adipisci error alias porro
            sunt, voluptas corporis facere suscipit nemo eum beatae autem maxime
          </p>
          <ul className="text-white text-start  ">
            <li className="lg:p-0  lg:flex flex items-start gap-2">
              <img
                className="pt-2 "
                src="images/bi_check.svg"
                alt="icon check"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                doloremque?
              </p>
            </li>
            <li className="lg:flex flex items-start gap-2">
              <img
                className="pt-2  "
                src="images/bi_check.svg"
                alt="icon check"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                doloremque?
              </p>
            </li>
            <li className="lg:flex flex items-start gap-2">
              <img
                className="pt-2 "
                src="images/bi_check.svg"
                alt="icon check"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                doloremque?
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="order-1 lg:order-2 lg:w-2/4 py-6 lg:py-10  bg-blueSky flex lg:justify-start ">
        <div className="bg-blueSky mx-auto  lg:mx-0 lg:border-r-2 lg:border-y-2 lg:border-l-0 border-white  md:w-[80%]  xl:w-[50%] lg:my-[50px] lg:rounded-r-[36px] ">
          <img
            className="rounded-[33px] h-full w-[350px]  lg:w-auto lg:rounded-none"
            src="images/plomero.png"
            alt="imagen de plomero"
          />
        </div>
      </div>
      <button className=" absolute lg:bottom-6 bottom-5 ms-[40px] lg:ms-0 hover:bg-blueMarine   bg-blueSky rounded-lg w-32 h-10 text-white font-bold  border-white border-solid border shadow-xl">
        Help me
      </button>
    </section>
  );
};

export default About;
