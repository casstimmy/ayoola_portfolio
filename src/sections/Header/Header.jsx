import styles from './Header.css'
import profile_img from '../../assets/ay_img.jpg'
import modeIcon from '../../assets/moon-svgrepo-com.svg'
import modeIcon2 from '../../assets/icons8-sun.svg'



function header() {
  return (
    <section id='intro' className={styles.container}>
        <div className={styles.coloeModeContainer}>
           <img src={profile_img} 
           alt="Profile image of Ayoola Ayo" />

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
            <p>Freelancer Providing programming and design services. if you need with deigital services, please don't hesitate to contact me</p>
            <p>Let's work together and get started</p>
        </div>
    </section>
  )
}

export default header
