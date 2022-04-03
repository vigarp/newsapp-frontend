import Head from "next/head"
import Image from "next/image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import styles from "../../styles/Writearticle.module.css"
import { useState } from "react"
import { decodeToken } from "react-jwt"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect } from "react"
import NavbarLogin from "../../components/NavbarLogin"

const Writearticle = () => {
    const router = useRouter()
    function authCheck() {
        if (typeof window !== "undefined" && localStorage.getItem('token') !== null) {
            return { isLoggedIn: true }
        } else {
            return { isLoggedIn: false }
        }
    }
    const { isLoggedIn } = authCheck()

    useEffect(() => {
        if (isLoggedIn === false) {
            router.push("/auth/login")
        }
    })
    const [showModal, setShowModal] = useState(false);
    // const [getFormPic, setGetFormPic] = useState({});

    // const [showPicData, setShowPicData] = useState();

    // const [formDataPicTemp, setFormDataPicTemp] = useState({
    //     picture: ""
    // })
    // const formDataPic = new URLSearchParams()
    // formDataPic.append("picture", formDataPicTemp.picture[0])

    const [picTempData, setPicTempData] = useState({
        picture: ""
    })

    const [picShow, setPicShow] = useState({
        picture: ''
    })
    const [formArticle, setFormArticle] = useState({
        title: '',
        category: '',
        type: ''
    })

    const handleChangePic = (e) => {
        setPicTempData({
            ...picTempData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitPic = () => {
        setPicShow({
            picture: picTempData.picture
        })
        openModal(false)
    }
    const handleChangeForm = (e) => {
        setFormArticle({
            ...formArticle,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (typeof window !== "undefined") {
            const tokenUser = localStorage.getItem('token');
            const userInfo = decodeToken(tokenUser);
            axios.post(`${process.env.NEXT_PUBLIC_APP_URL_BACKEND}/articles`,
                {
                    id_user: userInfo.id,
                    publisher: userInfo.username || 'Anoonym',
                    title: formArticle.title,
                    category: formArticle.category,
                    body: formArticle.type,
                    attachment: picTempData.picture
                })
                .then((res) => {
                    const postMessage = res.data.message
                    alert(postMessage)
                })
                .catch((err) => {
                    setLoading(false)
                    console.log(err)
                    if (err.response.status === 403) {
                        alert(err.response.data.message)
                    } else {
                        alert('Internal Server Error')
                    }
                })
        }
    }

    const openModal = (param) => {
        setShowModal(param)
    }

    const picData = (data) => {
        setShowPicData(data)
    }
    return (<>
        <Head>
            <title>Write Article - NewsApp</title>
        </Head>
        {isLoggedIn ? (<NavbarLogin />) : (<Navbar />)}
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
                        {picShow.picture ? (
                            <Image src={picShow?.picture} height={200} width={200} alt="" />
                        ) : (
                            <div className={`text-center p-5 ${styles.innerBorderPhoto}`}>+</div>
                        )}
                    </div>
                    <div onClick={() => openModal(true)} className={`text-white text-center fw-bold px-3 py-3 my-5 ${styles.btnChoosePhoto}`}>Choose Cover Photo</div>
                </div>
                <div className={`w-100 mx-5 form-section`}>
                    <div className={`d-flex`}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Article Title"
                            onChange={handleChangeForm}
                            value={formArticle.title}
                            className={`w-50 p-3 ${styles.formArticle}`} />
                        <select className={`w-50 bg-transparent py-3 px-3 ms-3 ${styles.formArticle}`} value={formArticle.category} onChange={handleChangeForm} name="articlecategory" aria-label="Default select example">
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
                        name="type"
                        placeholder="Type the Article"
                        onChange={handleChangeForm}
                        value={formArticle.type}
                        className={`mt-5 w-100 py-3 px-3 ${styles.formArticle}`} />
                    <div onClick={handleClick} className={`text-white text-center fw-bold px-3 py-3 my-5 ${styles.btnRequestPublish}`}>Request Publish Article</div>
                </div>
            </div>
        </section>
        <Footer />
        {showModal === true ? (
            <div className={`${styles.modalWrapper}`}>
                <div className={`${styles.modalInner}`}>
                    <div className={`d-flex`}>
                        <div className={`fw-bold text-muted flex-grow-1`}>Add Picture</div>
                        <div className={`close-button`} onClick={() => openModal(false)}>X</div>
                    </div>
                    <hr />
                    <div>Select File and upload the picture</div>
                    <div className={`my-3`}>Change Profile Picture</div>
                    <input
                        type="text"
                        name="picture"
                        placeholder="Article Picture"
                        onChange={handleChangePic}
                        value={picTempData.picture} />
                    <div className={`w-50 px-5 py-3 text-center my-3 text-white ${styles.btnSubmitPicture}`} onClick={handleSubmitPic} >Submit Picture</div>
                </div>
            </div>
        ) : ('')}
    </>);
}

export default Writearticle;