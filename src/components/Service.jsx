import services from "../json/service.json";
import Button from "./Button";

const Service = () => {
  return (
    <section className="relative flex flex-col  justify-center items-center ">
      <div
        id="serviceSection"
        className="  lg:h-[35vh] w-full flex justify-center  py-[50px]"
      >
        <h1 className="text-white font-bold  text-[40px]">Services</h1>
      </div>

      <div className="lg:absolute mt-[50px] md:mt-0 top-[140px] flex flex-col md:flex-row   gap-[50px] text-center">
        {services.map((e) => (
          <div
            className=" w-[200px] flex flex-col justify-center items-center gap-[30px] hover:bg-blueMarine p-6 hover:rounded-xl transition-all duration-150 hover:text-white"
            key={e.id}
          >
            <img
              className=" w-[150px] h-[150px] rounded-xl bg-red-200"
              src={e.image}
              alt={e.name}
            ></img>
            <div>
              <h1 className="text-blueSky font-bold text-[24px]">{e.name}</h1>
              <p>{e.p}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="  lg:h-[30vh] flex justify-center items-end p-5">
        <button className=" bg-blueSky rounded-lg w-32 h-10 hover:bg-blueMarine text-white font-bold  border-white border-solid border shadow-xl ">
          Help me
        </button>
      </div>
    </section>
  );
};

export default Service;
