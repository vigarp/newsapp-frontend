import Image from "next/image"
import Link from "next/link"
import styles from "../styles/components/NavbarLogin.module.css"

const NavbarLogin = () => {
    return (<>
        <nav>
            <div className={`d-flex justify-content-between mx-5 pt-3 pb-5`}>
                <Image src={require("../assets/icons/news-today-banner-loginpage.svg").default} alt="" />
                <div className={`d-flex pt-3`}>
                    <div className={`mx-5`}><Link href={"/main/homepage"}>Home</Link></div>
                    <div className={`mx-5`}><Link href={"/main/writearticle"}>Articles</Link></div>
                    <div className={`mx-5`}><Link href={"#"}>Category</Link></div>
                    <div className={`mx-5`}><Link href={"#"}>About</Link></div>
                </div>
                <div className={`search-section`}>
                    <div className={`px-3 ${styles.borderSearch}`}>
                        <Image src={require("../assets/icons/loop-search-navbar.svg").default} alt="" />
                        <input
                            placeholder="Search"
                            className={`${styles.searchBox} my-3 ps-3`} />
                    </div>
                </div>
                <div className={`d-flex pt-2`}>
                    <Image src={require("../assets/icons/notification-navbar.svg").default} alt="" />
                    <Image src={require("../assets/profile-pict-navbar.png")} alt="" />
                </div>
            </div>
            <hr className={`${styles.divider}`} />
        </nav>
    </>);
}

export default NavbarLogin;