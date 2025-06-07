import Breadcrumbs from "./breadcrumbs";
import SearchSkip from "./search";
const Hero = () => {
  return (
    <section className="bg-[#455a6428] bg-opacity-10 rounded-lg p-4">
      <Breadcrumbs />
      <div className="pt-16 md:flex md:pr-16">
        <div className="flex-3/5">
          <h1 className="font-bold text-5xl capitalize text-[#2E7D32]">
            choose your perfect skip
          </h1>
          <p className="text-[263238] opacity-50 pt-4">
            From garden cleanups to full renovations, we&apos;ve got the right
            skip for you.
          </p>
        </div>
        <div className="hidden md:block flex-2/5 pt-4 md:pt-0">
          <img src="/bucket.png" alt="skip image" />
        </div>
      </div>
      <SearchSkip />
    </section>
  );
};

export default Hero;
