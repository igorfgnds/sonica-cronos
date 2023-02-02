import { footer } from '@/mocks/footer';

const Footer = (): JSX.Element => {
  return (
    <footer className="container grid grid-cols-2 sm:grid-cols-5 sm:justify-items-center pt-20 px-10 sm:p-0 sm:py-24 lg:py-36">
      {footer.map((item, index) => {
        return (
          <div key={index} className="mb-5 sm:mb-0">
            <h6 className="text-xl lg:text-3xl text-white font-medium mb-10">{item.title}</h6>
            <nav>
              <ul>
                {footer[index].links.map((link, index) => {
                  return (
                    <li key={index} className="mb-10">
                      <a href="#" className="text-md lg:text-2xl text-[#FFFFFF73] hover:text-white">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
