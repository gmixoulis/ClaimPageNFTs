import "../styles/Hero.css";

const Hero = () => {


  return (
    <div className="p-5 container grid" >
        <div style={{marginTop:"5vh"}} className="max-w-md mx-auto flex items-center justify-left  overflow-hidden md:max-w-2xl">
          <div className="md:flex flex-1 w-64">
            <div className="md:shrink-1">
            </div>
            <div className="p-8">
             </div>
          </div>
        </div>

      <div style={{marginTop:"5vh"}} >
        <div className="sm:grid sm:grid-cols-4 gap-4">
      <h2 id="header-text-first" className="col-start-1 col-span-4"  > UNIC META511MC Course Materials</h2>
      <h3 id="header-text-second" className="col-start-1 col-span-4"  > Official University of Nicosia (UNIC) course material.</h3>
      </div>
      </div>
    </div>
  );
};

export default Hero;
