import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer"
import NavbarLogin from "../../components/NavbarLogin"
import styles from "../../styles/Articleview.module.css"

const articleView = () => {
    return (<>
        <Head>
            <title>Article View - NewsApp</title>
        </Head>
        <NavbarLogin />
        <div className={`d-flex m-5`}>
            <Image src={require("../../assets/icons/icon-back-articleview.svg").default} alt="" />
            <div className={`mx-3 w-50`}>Back</div>
            <div className={`fw-bold`}>Article Viewer</div>
        </div>
        <div className={`d-flex m-5`}>
            <Image src={require("../../assets/bicycles-articleview.png")} alt="" />
            <div className={`mx-5 titleInfo`}>
                <div className={`fw-bold fs-1 mb-3`}>Thailand at the 2019 Southeast Asian Games</div>
                <div className={`text-secondary fs-5`}>Richard Gervain - Author</div>
                <div className={`text-muted`}>Wed, March 3rd 2021</div>
                <div className={`d-flex my-3`}>
                    <Image src={require("../../assets/icons/likes-articleview.svg").default} alt="" />
                    <div className={`text-muted ms-3 me-5 py-2`}>2.1k</div>
                    <Image src={require("../../assets/icons/saved-articleview.svg").default} alt="" />
                </div>
                <div className={`text-white fw-bold text-center py-3 ${styles.btnShareArticle}`}>Share Article Link</div>
            </div>
        </div>
        <div className={`mx-5 my-5 text-area`}>
            <div>During the 2019 Southeast Asian Games, governor the Sports Authority of Thailand (SAT) Kongsak Yodmanee criticised the organization of the games, as the Philippines held the games in many cities and municipalities, causing to the various concerns and controversies. He will propose to hold the next Thailand&apos;s Southeast Asian Games in &quot;one&quot; city or province. He also suggested Bangkok and Chonburi Province are the best choice for hosting the Thailand&apos;s games. He mentioned Bangkok traffic is less congested than Manila and the city has many existing venues for the games but water sports venues.

                Bangkok hosted the inaugural games in 1959 and 1967 as Southeast Asian Peninsular Games, which were the precursor to the modern Southeast Asian Games, and 1985 as Southeast Asian Games. Bangkok hosted many global and continental events such as four-time Asian Games and Summer Universiade in 2007.

                Bangkok will host the 2021 Asian Indoor and Martial Arts Games with Chonburi Province It acted as the test event and a prelude for the future multi-sport event, a proposed Youth Olympic Games in 2026.

                During the 2019 Southeast Asian Games, governor the Sports Authority of Thailand (SAT) Kongsak Yodmanee criticised the organization of the games, as the Philippines held the games in many cities and municipalities, causing to the various concerns and controversies. He will propose to hold the next Thailand&apos;s Southeast Asian Games in &quot;one&quot; city or province. He also suggested Bangkok and Chonburi Province are the best choice for hosting the Thailand&apos;s games. He mentioned Bangkok traffic is less congested than Manila and the city has many existing venues for the games but water sports venues.

                Bangkok hosted the inaugural games in 1959 and 1967 as Southeast Asian Peninsular Games, which were the precursor to the modern Southeast Asian Games, and 1985 as Southeast Asian Games. Bangkok hosted many global and continental events such as four-time Asian Games and Summer Universiade in 2007.

                Bangkok will host the 2021 Asian Indoor and Martial Arts Games with Chonburi Province It acted as the test event and a prelude for the future multi-sport event, a proposed Youth Olympic Games in 2026.
            </div>
        </div>
        <Footer />
    </>);
}

export default articleView;