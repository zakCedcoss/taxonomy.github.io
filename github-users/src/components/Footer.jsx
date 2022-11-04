import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
function Footer({ login }) {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
      </div>
      <div className="footer-name">@ {login ? login : "devilboy"}</div>
    </div>
  );
}

export default Footer;
