import { useState } from 'react';
import { header } from '@/mocks/header';

const Header = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container fixed top-0 z-20 lg:static grid grid-cols-2 lg:grid-cols-3 items-center p-3 lg:py-24 bg-[#050505]">
      <h1>
        <a className="text-2xl text-white hover:text-[#719df2] transition font-medium p-2" href="#">
          {header.title}
        </a>
      </h1>
      <div className="lg:hidden text-right">
        <button className="text-6xl text-white lg:hidden px-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '×' : '≡'}
        </button>
      </div>
      <nav
        className={
          (mobileMenuOpen ? 'left-0' : '-left-full') +
          ' w-full fixed lg:static top-[84px] right-0 bottom-0 z-20 bg-[#050505] transition-all px-6 pt-24 lg:p-0 lg:grid lg:grid-cols-3 text-center'
        }
      >
        {header.navigation.map((item, index) => (
          <a
            key={index}
            href="#"
            className="block text-xl text-white hover:text-[#719df2] transition font-medium p-8 lg:p-2 -mx-4 lg:m-0"
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="hidden lg:block text-right">
        <a className="text-2xl text-white hover:text-[#719df2] transition font-medium p-2" href="#">
          {header.action} &#8250;
        </a>
      </div>
    </header>
  );
};

export default Header;
