import Image from 'next/image';
import { build } from '@/mocks/build';

const Build = (): JSX.Element => {
  return (
    <section className="container mt-36 lg:mt-80 text-center relative">
      <Image
        className="absolute lg:left-60 top-[-50px] sm:top-[-200px] floating"
        src="/thorus.png"
        width={840}
        height={840}
        alt=""
      />
      <p className="sm:text-xl lg:text-2xl text-white uppercase tracking-widest opacity-60 mb-16">{build.label}</p>
      <h3 className="font-display text-4xl sm:text-7xl lg:text-8xl max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFFFFF66] mb-16">
        {build.title}
      </h3>
      <p className="text-white text-sm sm:text-xl lg:text-3xl max-w-[640px] mx-auto px-8 lg:px-0">{build.legend}</p>
    </section>
  );
};

export default Build;
