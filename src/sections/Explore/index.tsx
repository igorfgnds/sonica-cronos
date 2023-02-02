import Image from 'next/image';
import Button from '@/components/Button';
import { explore } from '@/mocks/expolore';

const Explore = (): JSX.Element => {
  return (
    <section className="container mt-24 lg:mt-48 sm:grid sm:grid-cols-2 text-center lg:text-left px-8 lg:px-0">
      {explore.features.map((item, index) => {
        return (
          <div key={index} className="lg:mx-24 mb-10 lg:mb-32">
            <Image
              className="mx-auto lg:mx-0 max-w-[150px] lg:max-w-none"
              src={item.image}
              width={296}
              height={296}
              alt={item.title}
            />
            <h5 className="text-white text-3xl lg:text-5xl font-bold mb-2 lg:mb-5">{item.title}</h5>
            <p className="text-white text-sm lg:text-2xl lg:max-w-2xl">{item.text}</p>
          </div>
        );
      })}

      <div className="col-span-2 w-full mt-16 lg:mt-0 lg:ml-24 mb-20 lg:mb-32">
        <Button type="primary" className="w-full max-w-[280px] ">
          {explore.button}
        </Button>
      </div>
    </section>
  );
};

export default Explore;
