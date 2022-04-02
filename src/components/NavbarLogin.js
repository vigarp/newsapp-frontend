import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { decodeToken } from "react-jwt"
import { useState } from "react"
import styles from "../styles/components/NavbarLogin.module.css"
import { useRouter } from "next/router"

const NavbarLogin = () => {
    const router = useRouter()
    const [detailData, setDetailData] = useState()
    useEffect(() => {
        if (typeof window !== "undefined") {
            const tokenUser = localStorage.getItem('token');
            const userInfo = decodeToken(tokenUser);
            axios.get(`${process.env.NEXT_PUBLIC_APP_URL_BACKEND}/users/${userInfo.id}`)
                .then((res) => {
                    const detailUser = res.data?.data
                    setDetailData(detailUser)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [])

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
                    <Image onClick={()=> router.push("/main/profile")} className={`rounded rounded-pill ${styles.userPointer}`} src={detailData?.picture || "https://res.cloudinary.com/vigarp/image/upload/v1648941174/newsapp-assets/Facebook-Blank-Photo_rormrb.jpg"} width={43.68} height={43.68} alt="" />
                </div>
            </div>
            <hr className={`${styles.divider}`} />
        </nav>
    </>);
}

export default NavbarLogin;