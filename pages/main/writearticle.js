import NavbarLogin from "../../components/NavbarLogin"
import Footer from "../../components/Footer"
import Head from "next/head"
import Image from "next/image"
import styles from "../../styles/Writearticle.module.css"


const writeArticle = () => {
    return (<>
        <Head>
            <title>Write Article - NewsApp</title>
        </Head>
        <NavbarLogin />
        <div className={`d-flex m-5`}>
            <Image src={require("../../assets/icons/icon-back-writearticle.svg").default} alt="" />
            <div className={`mx-3 w-50`}>Back</div>
            <div className={`fw-bold`}>Write Article</div>
        </div>
        <div className={`d-flex m-5`}>
            <div className={`w-25 mx-5 my-5 photoSidebar`}>
                <div className={`p-5 text-center ${styles.boxCoverPhoto}`}>
                    <div className={`p-5 ${styles.innerBorderPhoto}`}>+</div>
                </div>
                <div className={`text-white text-center fw-bold px-3 py-3 my-5 ${styles.btnChoosePhoto}`}>Choose Cover Photo</div>
            </div>
            <div className={`w-100 mx-5 articleSection`}>
                <div className={`d-flex my-5`}>
                    <input
                        type="text"
                        placeholder="Article Tittle"
                        className={`w-50 py-3 px-3 me-3 ${styles.formArticle}`} />
                    <select
                        className={`w-50 bg-transparent py-3 px-3 ms-3 ${styles.formArticle}`}>
                        <option value="" disabled selected>Article Category:</option>
                        <option value="economy">Economy</option>
                        <option value="politic">Politic</option>
                        <option value="country">Country</option>
                        <option value="health">Health</option>
                        <option value="beauty">Beauty</option>
                    </select>
                </div>
                <textarea
                    type="text"
                    placeholder="Type the article"
                    className={`w-100 py-3 px-3 ${styles.formArticle}`} />
                    <div className={`text-white text-center fw-bold px-3 py-3 my-5 ${styles.btnRequestPublish}`}>Request Publish Article</div>
            </div>
        </div>
        <Footer />
    </>);
}

export default writeArticle;