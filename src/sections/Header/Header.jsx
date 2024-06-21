import styles from "./Header.css";
import profile_img from "../../assets/ay_img.jpg";
import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import CV from "../../assets/Resume - Ayoola Ayodeji..docx";
import Socials from "./Socials";
import { useTheme } from "../../ColorTheme";

function Header() {
  const { theme, toggleTheme } = useTheme("light");

  const themeIcon = theme === "light" ? <IoIosSunny /> : <IoIosMoon />;

  return (
    <section id="home" className="container">
      <a
            href="#"
            target="blank"
            className='btn-theme-icon'
            onClick={toggleTheme}
          >
            {themeIcon}
          </a>
      <div className="header_container">
        <div className='img-layout'>
          <img src={profile_img} alt="Ayoola Ayo Profile-image" />
        </div>
        <Socials />
        <div>
          <div>
            <h3>Hello i'm</h3>
            <h1>Ayoola Ayo</h1>
            <h2>Fullstack Developer & Graphic Designer</h2>
            <p>
              Freelancer Providing programming and design services. if you need
              with deigital services, please don't hesitate to contact me
            </p>
            <p>Let's work together and get started</p>
          </div>
          <div className="cta-btns">
            <a className="btn" href={CV} download>
              Download Cv
            </a>

            <a className="btn btn-primary" href="" download>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
