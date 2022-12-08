import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function AppFooter() {
  return (
    <div className="footer">
      <div className="footer__text-content mb-4">
        <h4>Address</h4>
        <div>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit <br />.
          Cum, quos!
        </div>
      </div>

      <div className="footer__text-content mb-4">
        <h4>İş saatları</h4>
        <div>
          FRI, SAT 11:00 AM - 10:30 PM
          <br></br>
          SUN, MON, TUE, WED, THUR <br />
          11:00 AM - 10:00 PM
        </div>
      </div>

      <div className="footer__text-content">
        <h4>Əlaqə</h4>
        <div className="mb-3 mt-4">
          <div>
            <a href="#1">
              <FaFacebookF />
            </a>
            <a href="#2">
              <FaInstagram />
            </a>
            <a href="#3">
              <FaTwitter />
            </a>
          </div>
          <div>
            <div>
              <a href="tel:6031112298">+99400000000</a> <br />
              <a href="mailto:menufood@gmail.com">menufood@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
