import NavbarLogin from "../../components/NavbarLogin"
import Footer from "../../components/Footer"
import Head from "next/head"
import Image from "next/image"
import styles from "../../styles/Writearticle.module.css"
import { useState } from "react/cjs/react.development"
import axios from "axios"


const WriteArticle = () => {
    const [showModal, setShowModal] = useState(false);
    const [getFormPic, setGetFormPic] = useState({});

    const [showPicData, setShowPicData] = useState();

    const [formDataPicTemp, setFormDataPicTemp] = useState({
        picture: ""
    })
    const formDataPic = new URLSearchParams()
    formDataPic.append("picture", formDataPicTemp.picture[0])

    const [formArticle, setFormArticle] = useState({
        picture: '',
        title: '',
        category: '',
        type: ''
    })

    const handleChangeForm = (e) => {
        setFormArticle({
            ...formArticle,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        axios.post(`${process.env.NEXT_PUBLIC_APP_URL_BACKEND}/articles`,
                {
                    id_user: 669,
                    publisher: "Ismail",
                    header: "lorem ipsumess",
                    title: formArticle.title,
                    category: formArticle.category,
                    body: formArticle.type,
                    attachment: formArticle.picture
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
        <NavbarLogin />
        <div className={`d-flex m-5`}>
            <Image src={require("../../assets/icons/icon-back-writearticle.svg").default} alt="" />
            <div className={`mx-3 w-50`}>Back</div>
            <div className={`fw-bold`}>Write Article</div>
        </div>
        <div className={`d-flex m-5`}>
            <div className={`w-25 mx-5 my-5 photoSidebar`}>
                <div className={`p-5 text-center ${styles.boxCoverPhoto}`}>
                    {formArticle.picture ? (
                        <Image src={formArticle.picture} height={200} width={200} alt="" />
                    ) : (
                        <div className={`p-5 ${styles.innerBorderPhoto}`}>+</div>
                    )}
                    
                </div>
                <div className={`text-white text-center fw-bold px-3 py-3 my-5 ${styles.btnChoosePhoto}`} onClick={() => openModal(true)}>Choose Cover Photo</div>
            </div>
            <div className={`w-100 mx-5 articleSection`}>
                <div className={`d-flex my-5`}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Article Tittle"
                        onChange={handleChangeForm}
                        value={formArticle.title}
                        className={`w-50 py-3 px-3 me-3 ${styles.formArticle}`} />
                    <select className={`w-50 bg-transparent py-3 px-3 ms-3 ${styles.formArticle}`} value={formArticle.category} onChange={handleChangeForm} name="category" aria-label="Default select example">
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
                    onChange={handleChangeForm}
                    value={formArticle.type}
                    placeholder="Type the article"
                    className={`w-100 py-3 px-3 ${styles.formArticle}`} />
                <div onClick={handleClick} className={`text-white text-center fw-bold px-3 py-3 my-5 ${styles.btnRequestPublish}`}>Request Publish Article</div>
            </div>
        </div>
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
                        onChange={handleChangeForm}
                        value={formArticle.picture} />
                <div className={`w-50 px-5 py-3 text-center my-3 text-white ${styles.btnSubmitPicture}`} onClick={() => openModal(false)} >Submit Picture</div>
                </div>
            </div>
        ) : ('')}
    </>);
}

export default WriteArticle;