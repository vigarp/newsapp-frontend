import Head from "next/head"
import Image from "next/image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import styles from "../../styles/Writearticle.module.css"

const writearticle = () => {
    return (<>
        <Head>
            <title>Write Article - NewsApp</title>
        </Head>
        <Navbar />
        <section className={`section-navigation`}>
            <div className={`m-5 d-flex`}>
                <Image src={require("../../assets/icons/icon-back-writearticle.svg").default} alt="" />
                <div className={`fw-bold mx-3 w-50`}>Back</div>
                <div className={`fw-bold`}>Write Article</div>
            </div>
        </section>
        <section className={`section-form-article`}>
            <div className={`m-5 d-flex h-100`}>
                <div className={`w-25`}>
                    <div className={`p-3 ${styles.boxCoverPhoto}`}>
                        <div className={`text-center p-5 ${styles.innerBorderPhoto}`}>+</div>
                    </div>
                    <div className={`text-white text-center fw-bold px-3 py-3 my-5 ${styles.btnChoosePhoto}`}>Choose Cover Photo</div>
                </div>
                <div className={`w-100 mx-5 form-section`}>
                    <div className={`d-flex`}>
                        <input
                            type="text"
                            name="articletitle"
                            placeholder="Article Title"
                            className={`w-50 p-3 ${styles.formArticle}`} />
                        <select className={`w-50 bg-transparent py-3 px-3 ms-3 ${styles.formArticle}`} name="articlecategory" aria-label="Default select example">
                            <option defaultValue="" disabled>Article Category:</option>
                            <option>Economy</option>
                            <option>Politic</option>
                            <option>Country</option>
                            <option>Health</option>
                            <option>Beauty</option>
                        </select>
                    </div>
                    <textarea
                        type="text"
                        name="typearticle"
                        placeholder="Type the Article"
                        className={`mt-5 w-100 py-3 px-3 ${styles.formArticle}`} />
                    <div className={`text-white text-center fw-bold px-3 py-3 my-5 ${styles.btnRequestPublish}`}>Request Publish Article</div>
                </div>
            </div>
        </section>
        <Footer />
    </>);
}

export default writearticle;