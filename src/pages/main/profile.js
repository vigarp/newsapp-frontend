// import internal modules
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { decodeToken } from "react-jwt"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

// import external modules
import NavbarLogin from "../../components/NavbarLogin"
import Footer from "../../components/Footer"
import styles from "../../styles/Profile.module.css"

const Profile = () => {
    const router = useRouter();
    // Authentication Block
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

    // useState Block

    const [detailData, setDetailData] = useState({})
    const [formProfile, setFormProfile] = useState({
        username: '',
        fullname: '',
        email: '',
        password: '',
        job: '',
        about: ''
    })
    const [formProfileError, setFormProfileError] = useState(false)

    const handleChange = (e) => {
        setFormProfile({
            ...formProfile,
            [e.target.name]: e.target.value
        })
    }

    const validateProfile = (values) => {
        const errors = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required"
        }
        if (!values.fullname) {
            errors.fullname = "Fullname is required"
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Email is invalid";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password at least 6 characters ";
        }
        if (!values.job) {
            errors.job = "Job is required"
        }
        if (!values.about) {
            errors.about = "About is required"
        }
        return errors;
    }

    const handleSubmit = () => {
        const resultValidate = validateProfile(formProfile)
        setFormProfileError(resultValidate)
        handleClick(resultValidate)
    }

    const handleClick = (resultValidate) => {
        console.log(formProfile)
        // if (Object.keys(resultValidate).length === 0) {
        //     setFormLoginError(false)
        //     setLoading(true)
        //     axios.post(`${process.env.NEXT_PUBLIC_APP_URL_BACKEND}/login`,
        //         {
        //             email: formLogin.email,
        //             password: formLogin.password
        //         })
        //         .then((res) => {
        //             const tokenUser = res.data.data.token
        //             localStorage.setItem('token', tokenUser)
        //             setLoading(false)
        //             router.push("/main/homepage")
        //         })
        //         .catch((err) => {
        //             setLoading(false)
        //             console.log(err)
        //             if (err.response.status === 403) {
        //                 alert(err.response.data.message)
        //             } else {
        //                 alert('Internal Server Error')
        //             }
        //         })
        // }
    }

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
        <Head>
            <title>Profile - NewsApp</title>
        </Head>
        <NavbarLogin />
        <div className={`mb-1 d-flex section-wrapper`}>
            <section className={`m-5 w-25`}>
                <div className={`fw-bold`}>Profile</div>
                <div className={`mt-5 ${styles.profileCard}`}>
                    <div className={`p-5 profilecard-content`}>
                        <div className={`d-flex`}>
                            <div className={`p-1 border rounded-pill`}>
                                <Image className={`rounded-pill`} src={detailData.picture || require("../../assets/plain-profile.jpg")} width={66.71} height={66.71} alt="" />
                            </div>
                            <div className={`mx-3 username-description`}>
                                <div className={`text-muted`}>@{detailData.username}</div>
                                <div className={`fw-bold`}>{detailData.fullname || detailData.username}</div>
                                <div className={`text-primary`}>{detailData.role}</div>
                            </div>
                        </div>
                        <div className={`my-3 about-me`}>
                            <div className={`fw-bold`}>About Me</div>
                            <div className={`mt-3`}>{detailData.about || <span className={`fst-italic`}>No About</span>}</div>
                        </div>
                        <div className={`${styles.boxStatsPanel}`}>
                            <div className={`mx-5 d-flex justify-content-between`}>
                                <div className={`text-center post`}>
                                    <div className={`fw-bold text-white`}>52</div>
                                    <div className={`text-white`}>Post</div>
                                </div>
                                <div className={`mx-3 text-center visitor`}>
                                    <div className={`fw-bold text-white`}>250</div>
                                    <div className={`text-white`}>Visitor</div>
                                </div>
                                <div className={`text-center comment`}>
                                    <div className={`fw-bold text-white`}>4.5K</div>
                                    <div className={`text-white`}>Comment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`my-5 menu-list`}>
                    <div className={`m-5 d-flex justify-content-between ${styles.userPointer}`}>
                        <div className={`fw-bold`}>Edit Profile</div>
                        <Image src={require("../../assets/icons/angle-right-profile.svg").default} alt="" />
                    </div>
                    <div className={`m-5 d-flex justify-content-between ${styles.userPointer}`}>
                        <div className={`fw-bold`}>Saved Post</div>
                        <Image src={require("../../assets/icons/angle-right-profile.svg").default} alt="" />
                    </div>
                    <div className={`m-5 d-flex justify-content-between ${styles.userPointer}`}>
                        <div className={`fw-bold`}>FAQ</div>
                        <Image src={require("../../assets/icons/angle-right-profile.svg").default} alt="" />
                    </div>
                    <div className={`m-5 d-flex justify-content-between ${styles.userPointer}`}>
                        <div className={`fw-bold`}>Help</div>
                        <Image src={require("../../assets/icons/angle-right-profile.svg").default} alt="" />
                    </div>
                    <div className={`m-5 d-flex justify-content-between ${styles.userPointer}`}>
                        <div className={`fw-bold`}>Logout</div>
                        <Image src={require("../../assets/icons/angle-right-profile.svg").default} alt="" />
                    </div>
                </div>
            </section>
            <div className={`${styles.dividerVertical}`} />
            <section className={`m-5 w-75`}>
                <div className={`d-flex justify-content-end`}>
                    <div className={`mx-auto mb-3`}>
                        <Image src={detailData.picture || require("../../assets/plain-profile.jpg").default} width={113} height={119} alt="" />
                        <div className={`text-muted ${styles.userPointer}`}>Choose profile picture</div>
                    </div>
                    <div onClick={handleSubmit} className={`text-primary ${styles.userPointer}`}>Save Change</div>
                </div>
                <div className={`row`}>
                    <div className={`col-6`}>
                        <div className={`mb-3`}>Username:</div>
                        <div className={`w-75 px-3 py-3 ${styles.borderForm}`}>
                            <input
                                type="text"
                                name="username"
                                placeholder={detailData.username}
                                onChange={handleChange}
                                value={formProfile.username}
                                className={`w-100 ${styles.formBox}`} />
                        </div>
                    </div>
                    <div className={`col-6`}>
                        <div className={`mb-3`}>Name:</div>
                        <div className={`w-75 px-3 py-3 ${styles.borderForm}`}>
                            <input
                                type="text"
                                name="fullname"
                                placeholder={detailData.fullname}
                                onChange={handleChange}
                                value={formProfile.fullname}
                                className={`w-100 ${styles.formBox}`} />
                        </div>
                    </div>
                    <div className={`col-6`}>
                        <div className={`my-3`}>Email:</div>
                        <div className={`w-75 px-3 py-3 ${styles.borderForm}`}>
                            <input
                                type="email"
                                name="email"
                                placeholder={detailData.email}
                                onChange={handleChange}
                                value={formProfile.email}
                                className={`w-100 ${styles.formBox}`} />
                        </div>
                    </div>
                    <div className={`col-6`}>
                        <div className={`my-3`}>Password:</div>
                        <div className={`w-75 px-3 py-3 ${styles.borderForm}`}>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={formProfile.password}
                                className={`w-100 ${styles.formBox}`} />
                        </div>
                    </div>
                    <div className={`col-6`}>
                        <div className={`my-3`}>Job:</div>
                        <div className={`w-75 px-3 py-3 ${styles.borderForm}`}>
                            <input
                                type="text"
                                name="job"
                                onChange={handleChange}
                                value={formProfile.job}
                                placeholder={detailData.job}
                                className={`w-100 ${styles.formBox}`} />
                        </div>
                    </div>
                    <div className={`col-6`}>
                        <div className={`my-3`}>About:</div>
                        <div className={`w-75 px-3 py-3 ${styles.borderForm}`}>
                            <input
                                type="text"
                                name="about"
                                onChange={handleChange}
                                value={formProfile.about}
                                placeholder={detailData.about}
                                className={`w-100 ${styles.formBox}`} />
                        </div>
                    </div>
                </div>
                <div className={`text-center text-white fw-bold m-5 p-3 ${styles.btnRequestAuthor}`}>Request to be an author</div>
            </section>
        </div>
        <Footer />
    </>);
}

export default Profile;