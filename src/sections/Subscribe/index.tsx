import Input from '@/components/Input';

const Subscribe = (): JSX.Element => {
  return (
    <section className="container lg:grid lg:grid-cols-2 py-10 lg:py-28 border-y border-[#FFFFFF1A] text-center lg:text-left px-8 lg:px-0">
      <div className="lg:ml-24 mb-10 lg:mb-0">
        <p className="text-2xl lg:text-5xl text-white font-bold mb-5">Receive transmissions</p>
        <p className="text-xl lg:text-3xl text-white">
          Unsubscribe at any time.{' '}
          <a className="hover:underline" href="#">
            Privacy policy ↗
          </a>
        </p>
      </div>
      <div>
        <Input type="text" placeholder="Your email" className="max-w-[450px]" />
      </div>
    </section>
  );
};

export default Subscribe;
