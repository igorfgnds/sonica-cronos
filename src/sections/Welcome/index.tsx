import Image from 'next/image';
import { welcome } from '@/mocks/welcome';

const Welcome = (): JSX.Element => {
  return (
    <section className="container mt-52 lg:mt-24 text-center relative">
      <Image
        className="blur absolute left-[-200px] lg:left-14 top-[-100px] lg:top-[-50px] floating"
        src="/hedron.png"
        width={335}
        height={335}
        alt=""
      />
      <Image
        className="blur absolute right-[-200px] sm:right-[-400px] lg:top-32 floating"
        src="/hedron.png"
        width={620}
        height={620}
        alt=""
      />
      <div className="relative z-10">
        <p className="text-md sm:text-xl lg:text-2xl text-white uppercase tracking-widest opacity-60 mb-12">
          {welcome.label}
        </p>
        <h2 className="font-display text-4xl sm:text-7xl min-[967px]:text-9xl min-[1100px]:text-[150px] leading-none max-w-6xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFFFFF66] mb-12 px-6 lg:p-0">
          {welcome.title}
        </h2>
        <p className="text-white text-sm sm:text-xl lg:text-3xl max-w-3xl mx-auto px-10 sm:px-24 lg:p-0">
          {welcome.legend}
        </p>
      </div>
    </section>
  );
};

export default Welcome;
