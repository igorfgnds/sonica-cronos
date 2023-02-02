import Image from 'next/image';
import Button from '@/components/Button';
import CountUp, { useCountUp } from 'react-countup';
import { learn } from '@/mocks/learn';

const Learn = (): JSX.Element => {
  useCountUp({
    ref: 'apps',
    end: learn.indicators[0].value,
    suffix: '+',
    scrollSpyOnce: true,
    enableScrollSpy: true,
  });

  useCountUp({
    ref: 'digital',
    end: learn.indicators[1].value,
    prefix: '$',
    suffix: 'B+',
    scrollSpyOnce: true,
    enableScrollSpy: true,
  });

  return (
    <section className="container mt-36 lg:mt-80 lg:grid lg:grid-cols-3 relative px-8">
      <Image
        className="absolute left-0 lg:left-[-350px] top-10 floating"
        src="/helix.png"
        width={600}
        height={600}
        alt=""
      />
      <div className="col-span-2 text-center lg:text-left relative z-10">
        <p className="ext-md sm:text-xl lg:text-2xl text-white uppercase tracking-widest opacity-60 mb-16">
          {learn.label}
        </p>
        <h3 className="font-display text-4xl sm:text-7xl lg:text-8xl max-w-3xl mx-auto lg:mx-0 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFFFFF66] mb-16">
          {learn.title}
        </h3>
        <p className="text-white text-sm sm:text-xl lg:text-3xl max-w-2xl mx-auto lg:mx-0 mb-16">{learn.legend}</p>
        <Button type="primary" className="w-full max-w-[280px] lg:mr-5 mb-4 lg:mb-0">
          {learn.buttons[0]}
        </Button>
        <Button type="secondary" className="w-full max-w-[280px]">
          {learn.buttons[1]} &#8250;
        </Button>
      </div>
      <div>
        <div className="text-center lg:text-right mt-12 lg:mt-28">
          <h4
            id="apps"
            className="font-display text-7xl lg:text-9xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFFFFF66]"
          >
            <CountUp end={learn.indicators[0].value} enableScrollSpy />
          </h4>
          <p className="text-white text-3xl">{learn.indicators[0].label}</p>
        </div>
        <div className="text-center lg:text-right mt-12 lg:mt-28">
          <h4
            id="digital"
            className="font-display text-7xl lg:text-9xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFFFFF66]"
          >
            <CountUp end={learn.indicators[1].value} enableScrollSpy />
          </h4>
          <p className="text-white text-3xl">{learn.indicators[0].label}</p>
        </div>
      </div>
    </section>
  );
};

export default Learn;
