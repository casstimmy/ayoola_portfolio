import styles from './Header.css'
import profile_img from '../../assets/ay_img.jpg'
import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import CV from '../../assets/Resume - Ayoola Ayodeji..docx'
import Socials from './Socials'
import { useTheme } from '../../ColorTheme'


function Header() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? IoIosSunny : IoIosMoon

  return (
    <section id='intro' className="container">
      <div className="header_container" >
        <div className={styles.coloeModeContainer}>
           <img src={profile_img} 
           alt="Ayoola Ayo Profile-image" />

           <a href="#"
           target='blank'
           className= {styles.colorMode}
           onClick={toggleTheme}>
            <IoIosSunny />
            </a>

            <a href="#"
            target='blank'
           className= {styles.colorMode}
           onClick={toggleTheme}>
            <IoIosMoon /> 
            </a>
        </div>
        <Socials/>
        <div>
            <h3>Hello i'm</h3>
            <h1>Ayoola Ayo</h1>
            <h3>Fullstack Developer & Graphic Designer</h3>
            <p>Freelancer Providing programming and design services. if you need with deigital services, please don't hesitate to contact me</p>
            <p>Let's work together and get started</p>
        </div>
        <div className='cta-btns'>
          <a className='btn' href={CV} download>
            Download Cv
          </a>

          <a className='btn btn-primary' href="" download>
            Contact Me
          </a>
        </div>
        </div>
    </section>
  )
}

export default Header
