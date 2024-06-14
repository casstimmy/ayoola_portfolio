import styles from './Header.css'
import profile_img from '../../assets/ay_img.jpg'
import modeIcon from '../../assets/moon-svgrepo-com.svg'
import modeIcon2 from '../../assets/icons8-sun.svg'
import CV from '../../assets/Resume - Ayoola Ayodeji..docx'
import Nav from './Nav'
import Socials from './Socials'


function header() {
  return (
    <section id='intro' className={styles.container}>
      <Nav/>
      <Socials/>
        <div className={styles.coloeModeContainer}>
           <img src={profile_img} 
           alt="Profile image of Ayoola Ayo" />
s
           <img src={modeIcon} 
           className= {styles.colorMode}
           alt="Color Theme Icon" />

            <img src={modeIcon2} 
            className= {styles.colorMode}
            alt="Color Theme Icon" />
        </div>
        <div>
            <h3>Hello i'm</h3>
            <h1>Ayoola Ayo</h1>
            <h3>Fullstack Developer & Graphic Designer</h3>
            <p>Freelancer Providing programming and design services. if you need with deigital services, please don't hesitate to contact me</p>
            <p>Let's work together and get started</p>
        </div>
        <div>
          <a href={CV} download>
            <button className='hover'>Download Cv</button>
          </a>

          <a href="" download>
            <button className='hover'>Contact</button>
          </a>
        </div>
    </section>
  )
}

export default header
