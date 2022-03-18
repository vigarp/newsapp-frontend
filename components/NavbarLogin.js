import Image from "next/image"
import { useRouter } from "next/router"
import styles from '../styles/components/NavbarLogin.module.css'

const Navbar = () => {
    const router = useRouter()
    return (
        <nav className={`h-20 bg-white`}>
            <div className={`d-flex justify-content-between mx-5 mt-3 mb-4`}>
                <Image className={`pt-3`} src={require("../assets/icons/news-today-banner-loginpage.svg").default} alt="" />
                <div className={`d-flex mx-5 pt-3`}>
                    <div className={`mx-5 fw-bold`}>Home</div>
                    <div className={`mx-5 text-muted`}>Articles</div>
                    <div className={`mx-5 text-muted`}>Category</div>
                    <div className={`mx-5 text-muted`}>About</div>
                </div>
                <div className={`d-flex pt-2`}>
                    <Image src={require("../assets/icons/notification-navbar.svg").default} alt="" />
                    <Image src={require("../assets/profile-pict-navbar.png")} alt="" />
                </div>
            </div>
            <hr className={`${styles.divider}`} />
        </nav>
    );
}

export default Navbar;