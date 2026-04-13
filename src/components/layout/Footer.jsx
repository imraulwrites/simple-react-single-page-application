import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import DigitoolsW from '../../assets/digitools-white.png';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const product = ['Features', 'Pricing', 'Templates', 'Integrations'];

const company = ['About', 'Blog', 'Careers', 'Press'];

const resources = ['Documentation', 'Help Center', 'Community', 'Contact'];

function Footer() {
  return (
    <footer className="bg-dark-shade text-white">
      <div className="wrapper text-center md:text-left ">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-16 pt-30 pb-20 border-b-[1px] border-[#e5e7ebFF]">
          <div className="h-40 flex flex-col justify-center items-center md:justify-start md:items-start">
            <img className="py-4 w-fit" src={DigitoolsW} alt="DigiTools" />
            <p className="text-base font-normal text-white">
              Premium digital tools for creators, professionals, and businesses. Work smarter with
              our suite of powerful tools.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="font-medium text-xl mb-4">Products</h4>
              <ul>
                {product.map((item, id) => (
                  <li key={id} className="mb-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-xl mb-4">Company</h4>
              <ul>
                {company.map((item, id) => (
                  <li key={id} className="mb-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-xl mb-4">Resources</h4>
              <ul>
                {resources.map((item, id) => (
                  <li key={id} className="mb-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}

          <div className="lg:ml-8 ">
            <h4 className="font-medium text-xl mb-4">Social Links</h4>
            <ul className="flex gap-3 justify-center items-center md:justify-start">
              <li className="bg-white text-black rounded-full py-0.5 px-1">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="bg-white text-black rounded-full py-0.5 px-1">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li className="bg-white text-black rounded-full py-0.5 px-1">
                <FontAwesomeIcon icon={faX} />
              </li>
            </ul>
          </div>
        </div>

        {/* copyrights */}
        <div className="flex flex-col md:flex-row justify-between py-7 text-white/60">
          <div>
            <p>© 2026 Digitools. All rights reserved. </p>
          </div>
          <div>
            <ul className="flex items-center justify-center md:justify-start gap-8">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
