import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/components/Navbar.module.css'

const Navbar = () => {
    const router = useRouter()
    return (
        <nav>
            <div className={`d-flex justify-content-between mx-5 pt-3 pb-5`}>
                <Image src={require("../assets/icons/news-today-banner-loginpage.svg").default} alt="" />
                <div className={`d-flex pt-3 ${styles.navbarLinks}`}>
                    <div className={`mx-5`}><Link href={"/main/homepage"}>Home</Link></div>
                    <div className={`mx-5`}><Link href={"/main/writearticle"}>Articles</Link></div>
                    <div className={`mx-5`}><Link href={"#"}>Category</Link></div>
                    <div className={`mx-5`}><Link href={"#"}>About</Link></div>
                </div>
                <div className={`d-flex pt-1`}>
                    <div className={`px-3 py-2 text-decoration-none`}><Link href={"/auth/register"}>Sign up</Link></div>
                    <div className={`text-white px-3 py-1 ms-3 text-decoration-none ${styles.btnLogin}`} onClick={()=>router.push("/auth/login")}>Login</div>
                </div>
            </div>
            <hr className={`${styles.divider}`} />
        </nav>
    );
}

export default Navbar;