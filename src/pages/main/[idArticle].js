// import internal modules
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

// import external modules
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import styles from "../../styles/Articleview.module.css"
import NavbarLogin from "../../components/NavbarLogin"

const Articleview = ({data}) => {
    const router = useRouter()

    // Authentication Block
    function authCheck() {
        if (typeof window !== "undefined" && localStorage.getItem('token') !== null) {
            return { isLoggedIn: true }
        } else {
            return { isLoggedIn: false }
        }
    }
    const { isLoggedIn } = authCheck()
    return (<>
        <Head>
            <title>Article View - NewsApp</title>
        </Head>
        {isLoggedIn ? (<NavbarLogin />) : (<Navbar />)}
        <section className={`section-navigation`}>
            <div className={`m-5 d-flex ${styles.btnBack}`} onClick={() => router.push("/main/homepage")}>
                <Image src={require("../../assets/icons/icon-back-articleview.svg").default} alt="" />
                <div className={`fw-bold mx-3 w-50`}>Back</div>
                <div className={`fw-bold`}>Article Viewer</div>
            </div>
        </section>
        <section className={`mt-5 section-title`}>
            <div className={`m-5 d-flex`}>
                <Image src={data.data?.attachment} width={595} height={370} alt="" />
                <div className={`mx-5 article-info`}>
                    <div className={`fw-bold fs-1`}>{data.data?.title}</div>
                    <div className={`author-info mt-3`}>
                        <div className={`fw-bold text-primary`}>{data.data?.publisher}</div>
                        <div className={`text-muted`}>{data.data?.created_at}</div>
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
            <div>{data.data?.body}</div>
        </div>
        </section>
        <Footer />
    </>);
}

export async function getServerSideProps(context) {
    const {idArticle} = context.query
    // Fetch data from external API
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL_BACKEND}/articles/${idArticle}`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Articleview;