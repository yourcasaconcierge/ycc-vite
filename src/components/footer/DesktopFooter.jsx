import content from "../../content";
import ycclogo from "../../assets/images/ycclogo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import LinkItem from "../LinkItem";
import { useContext } from "react";
import { RefContext } from "../../context/RefContext";

const DesktopFooter = () => {
  const { footer } = content;
  const { nav } = content;
  const { footerRef } = useContext(RefContext);
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1491489226161-1d38cb39ec64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"
        alt=""
        className="h-[15rem] lg:h-[25rem] w-full object-cover"
      />
      <div className="container layout-padding hidden xl:block py-5 text-[#D6DFDE]">
        <div className="flex justify-between mt-10">
          <div className="garamond">
            <div className="text-xl leading-5">
              <p>{footer.address}</p>
              <p>
                {footer.phone.split("-")[0]} - {footer.phone.split("-")[1]} -{" "}
                {footer.phone.split("-")[2]} - {footer.phone.split("-")[3]}
              </p>
              <p>
                {footer.email.split("@")[0]} @ {footer.email.split("@")[1]}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <div className="w-[27px] h-[3.03px] bg-variant"></div>
              <p>Follow us</p>
            </div>
            <div className="flex text-lg gap-2">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          <ul className="relative text-lg font-medium flex gap-5">
            {nav.map((item) => (
              <li key={item.id}>
                <LinkItem to={item.path} text={item.title} />
              </li>
            ))}
          </ul>
        </div>
        <div
          ref={footerRef}
          className="flex justify-between items-end mt-20 mb-1"
        >
          <img className="w-[400px] logo" src={ycclogo} alt="logo" />
          <p className="font-medium">{footer.copyRight}</p>
        </div>
      </div>
    </>
  );
};

export default DesktopFooter;
