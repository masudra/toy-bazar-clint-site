import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10  bg-neutral text-base-content text-white">
        <div className='mt-0'>
          <img src={logo} alt="" />

          <p>Toy Bazar ltd.<br />Providing reliable toy 2000</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          <h2 className='mt-24'>
          &copy;COPYRIGHT By Toy BAZAR

          </h2>

        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Flow on social</span>
          <Link to='https://www.facebook.com/' className="link link-hover">Facebook</Link>
          <Link to='https://www.instagram.com/?hl=en' className="link link-hover">Instagram</Link>
          <Link to='https://twitter.com/' className="link link-hover">Twitter</Link>
        </div>
  
      </footer>

    </div>
  );
};

export default Footer;