import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cakelify from "./CakelifyLogo.png";
import InstagramIcon from "./Instagram_icon.png.webp";
import WhatsappIcon from "./whatsapp.png";
const Footer = () => {
  return (
    <footer className="flex justify-center flex-col">
      <img src="footer.png" className="mt-4 mb-10" alt="" />

      <div className=" mb-2 text-slate-950">
        <div className="ml-3 flex flex-col text-left ">
          <img className="w-36" src={Cakelify} alt="" />
        </div>

        <h6 className="mt-3 ml-4 text-alpha-grey">©️2024</h6>
        <h6 className="font-medium ml-4 mt-3 text-alpha-grey mb-3">
          Join us online for exclusive updates, ❤️ <br />
          offers and fun content!
        </h6>

        <span className="flex ">
          <a href="https://www.instagram.com/">
            <img
              src={InstagramIcon}
              className=" w-6 ml-4 mb-0 rounded-full"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src={WhatsappIcon}
              className="w-7  ml-2 mb-1 rounded-full"
              alt=""
            />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
