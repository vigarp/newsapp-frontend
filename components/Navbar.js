import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/components/Navbar.module.css'

const Navbar = () => {
    const router = useRouter()
    return (
        <nav className={`h-20 mb-5 bg-white`}>
            <div className={`d-flex mx-5 mt-3 mb-4`}>
                <Image className={`pt-3`} src={require("../assets/icons/news-today-banner-loginpage.svg").default} alt="" />
                <div className={`d-flex mx-5 pt-3`}>
                    <div className={`mx-5 fw-bold`}>Home</div>
                    <div className={`mx-5 text-muted`}>Articles</div>
                    <div className={`mx-5 text-muted`}>Category</div>
                    <div className={`mx-5 text-muted`}>About</div>
                </div>
                <div className={`d-flex pt-2 ${styles.authBtns}`}>
                    <div className={`ms-5 me-3 py-1 text-decoration-none`}><Link href={"/auth/register"}>Sign up</Link></div>
                    <div className={`text-white px-3 py-1 ms-3 text-decoration-none ${styles.btnLogin}`} onClick={()=>router.push("/auth/login")}>Login</div>
                </div>
            </div>
            <hr/>
        </nav>
    );
}

export default Navbar;