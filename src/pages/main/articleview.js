import Head from "next/head"
import Image from "next/image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import styles from "../../styles/Articleview.module.css"

const articleview = () => {
    return (<>
        <Head>
            <title>Article View - NewsApp</title>
        </Head>
        <Navbar />
        <section className={`section-navigation`}>
            <div className={`m-5 d-flex`}>
                <Image src={require("../../assets/icons/icon-back-articleview.svg").default} alt="" />
                <div className={`fw-bold mx-3 w-50`}>Back</div>
                <div className={`fw-bold`}>Article Viewer</div>
            </div>
        </section>
        <section className={`mt-5 section-title`}>
            <div className={`m-5 d-flex`}>
                <Image src={require("../../assets/bicycles-articleview.png")} width={595} height={370} alt="" />
                <div className={`mx-5 article-info`}>
                    <div className={`fw-bold fs-1`}>Thailand at the 2019 Southeast Asian Games</div>
                    <div className={`author-info mt-3`}>
                        <div className={`fw-bold text-primary`}>Richard Gervain - Author</div>
                        <div className={`text-muted`}>Wed, March 3rd 2021</div>
                    </div>
                    <div className={`d-flex mt-3 buttons-like-save`}>
                        <div className={`d-flex ${styles.btnLike}`}>
                            <Image src={require("../../assets/icons/likes-articleview.svg").default} alt="" />
                            <div className={`text-muted ms-1 py-2`}>2.1k</div>
                        </div>
                        <div className={`ms-5 ${styles.btnSave}`}>
                            <Image src={require("../../assets/icons/saved-articleview.svg").default} alt="" />
                        </div>
                    </div>
                    <div className={`mt-3 text-white fw-bold text-center py-3 ${styles.btnShareArticle}`}>Share Article Link</div>
                </div>
            </div>
        </section>
        <section className={`section-textarea`}>
        <div className={`mx-5 my-5`}>
            <div>During the 2019 Southeast Asian Games, governor the Sports Authority of Thailand (SAT) Kongsak Yodmanee criticised the organization of the games, as the Philippines held the games in many cities and municipalities, causing to the various concerns and controversies. He will propose to hold the next Thailand&apos;s Southeast Asian Games in &quot;one&quot; city or province. He also suggested Bangkok and Chonburi Province are the best choice for hosting the Thailand&apos;s games. He mentioned Bangkok traffic is less congested than Manila and the city has many existing venues for the games but water sports venues.

                Bangkok hosted the inaugural games in 1959 and 1967 as Southeast Asian Peninsular Games, which were the precursor to the modern Southeast Asian Games, and 1985 as Southeast Asian Games. Bangkok hosted many global and continental events such as four-time Asian Games and Summer Universiade in 2007.

                Bangkok will host the 2021 Asian Indoor and Martial Arts Games with Chonburi Province It acted as the test event and a prelude for the future multi-sport event, a proposed Youth Olympic Games in 2026.

                During the 2019 Southeast Asian Games, governor the Sports Authority of Thailand (SAT) Kongsak Yodmanee criticised the organization of the games, as the Philippines held the games in many cities and municipalities, causing to the various concerns and controversies. He will propose to hold the next Thailand&apos;s Southeast Asian Games in &quot;one&quot; city or province. He also suggested Bangkok and Chonburi Province are the best choice for hosting the Thailand&apos;s games. He mentioned Bangkok traffic is less congested than Manila and the city has many existing venues for the games but water sports venues.

                Bangkok hosted the inaugural games in 1959 and 1967 as Southeast Asian Peninsular Games, which were the precursor to the modern Southeast Asian Games, and 1985 as Southeast Asian Games. Bangkok hosted many global and continental events such as four-time Asian Games and Summer Universiade in 2007.

                Bangkok will host the 2021 Asian Indoor and Martial Arts Games with Chonburi Province It acted as the test event and a prelude for the future multi-sport event, a proposed Youth Olympic Games in 2026.
            </div>
        </div>
        </section>
        <Footer />
    </>);
}

export default articleview;