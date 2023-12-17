import Button from "./Button";
import services from "../json/service.json";

const Hero = () => {
  return (
    <section
      id="heroSection"
      className="  py-[24px] md:py-[100px] flex flex-col justify-center items-center "
    >
      <div className="container">
        <div className=" md:max-w-[600px] md:mx-auto flex  flex-col items-center justify-center text-center gap-[30px]">
          <div className=" flex flex-col justify-center items-center md:flex md:flex-row gap-5">
            <img
              className="w-[100px] h-[100px]"
              src="images/octopus.svg"
              alt="logo"
            />
            <div className="flex flex-col leading-10 tracking-[10px] text-white font-bold">
              <h1 className="text-[40px]">OCTOPUS</h1>
              <h2 className="text-[28px]">PLUMBING</h2>
            </div>
          </div>
          <div className="text-white px-[50px] md:px-0">
            <h1 className="text-[24px] md:text-[40px] font-bold text-white">
              Lorem ipsum dolor sit.
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nam iste vero dicta optio placeat porro, maxime quos
              iure similique aliquid. Eligendi dolor, impedit reprehenderit
              omnis ex debitis similique odio.
            </p>
          </div>
          <div className="flex gap-2 md:gap-36 text-center text-white">
            {services.slice(0, 3).map((e) => (
              <div key={e.id}>
                <img className="" src={e.icon} alt="" />

                <h1 className="font-bold">{e.name}</h1>
              </div>
            ))}
          </div>
          <Button>Help me</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
