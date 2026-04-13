import Banner from '../../assets/banner.png';
import Circle from '../../assets/circle.png';
import Play from '../../assets/Play.png';
import Button from '../ui/Button';

function Hero() {
  return (
    <section className="wrapper flex flex-col-reverse md:flex-row-reverse justify-between gap-4 my-16">
      {/* hero image */}
      <div className="flex-[40%] flex justify-center md:justify-end">
        <img src={Banner} alt="Banner Image" />
      </div>

      {/* hero content */}
      <div className="flex-[60%] flex items-center">
        <div className="flex flex-col gap-4">
          <div className="bg-[#e1e7ff] py-2 px-4 rounded-3xl font-semibold text-base flex items-center gap-2 w-fit">
            <img src={Circle} className="w-4 h-4" alt="" />
            <span className="bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="text-7xl font-extrabold text-heading-dark text-center md:text-left">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-lg/ text-muted text-center md:text-left">
            Access premium AI tools, design assets, templates, and productivity software—all in one
            place. Start creating faster today. <br /> Explore Products{' '}
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button className="btn-primary">Explore Products</Button>
            <Button className="flex items-center gap-2 custom-text-gradient text-base font-bold border-2 border-primary px-4 py-3 rounded-3xl outline-0">
              <img src={Play} alt="" /> <span className="">Watch Demo</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
