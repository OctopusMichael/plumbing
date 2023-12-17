import testimoni from "../json/testimonials.json";

const Testimonials = () => {
  return (
    <section className="bg-blueSky">
      <div className="container py-8">
        <div>
          <h1 className="text-[40px] font-bold text-white text-center py-[50px]">
            Testimonials
          </h1>
        </div>
        <div className="grid  p-5  lg:grid-cols-2 gap-x-[50px] gap-y-[20px]">
          {testimoni.map((e) => (
            <div className="bg-white flex gap-2 p-5 rounded-[36px]" key={e.id}>
              <img className="self-start" src={e.avatar} alt={e.name} />
              <div className="flex flex-col gap-3">
                <h1 className="text-blueSky font-bold text-[20px]">{e.name}</h1>
                <p className="  leading-[20px] ">{e.p}</p>
                {e.rate === 1 && (
                  <div className="flex gap-2">
                    <img src="images/star.svg" alt="icon star" />
                  </div>
                )}
                {e.rate === 2 && (
                  <div className="flex gap-2">
                    <img src="images/star.svg" alt="icon star" />
                    <img src="images/star.svg" alt="icon star" />
                  </div>
                )}
                {e.rate === 3 && (
                  <div className="flex gap-2">
                    <img src="images/star.svg" alt="icon star" />
                    <img src="images/star.svg" alt="icon star" />
                    <img src="images/star.svg" alt="icon star" />
                  </div>
                )}
                {e.rate === 4 && (
                  <div className="flex gap-2">
                    <img src="images/star.svg" alt="icon star" />
                    <img src="images/star.svg" alt="icon star" />
                    <img src="images/star.svg" alt="icon star" />
                    <img src="images/star.svg" alt="icon star" />
                  </div>
                )}
                {e.rate === 5 && (
                  <div className="flex gap-2">
                    <img src="images/star.svg" alt="icon star" />
                    <img src="images/star.svg" alt="icon star" />
                    <img src="images/star.svg" alt="icon star" />
                    <img src="images/star.svg" alt="icon star" />
                    <img src="images/star.svg" alt="icon star" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
