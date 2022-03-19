import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Login.module.css'
import Footer from '../../components/Footer'
import { useState } from 'react/cjs/react.development'
import { useRouter } from 'next/router'
import axios from 'axios'

const Login = () => {
    const router = useRouter()
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })

    const [formLoginError, setFormLoginError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value
        })
    }

    const validateLogin = (values) => {
        const errors = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!values.email) {
            errors.email = "Email or Password Invalid";
        } else if (!regex.test(values.email)) {
            errors.email = "Email or Password Invalid";
        }
        if (!values.password) {
            errors.password = "Email or Password Invalid";
        } else if (values.password.length < 6) {
            errors.password = "Email or Password Invalid";
        }
        return errors;
    }

    const handleSubmit = () => {
        const resultValidate = validateLogin(formLogin)
        setFormLoginError(resultValidate)
        handleClick(resultValidate)
    }

    const handleClick = (resultValidate) => {
        if (Object.keys(resultValidate).length === 0) {
            setFormLoginError(false)
            setLoading(true)
            axios.post(`${process.env.NEXT_PUBLIC_APP_URL_BACKEND}/login`,
                {
                    email: formLogin.email,
                    password: formLogin.password
                })
                .then((res) => {
                    const tokenUser = res.data.data.token
                    localStorage.setItem('token', tokenUser)
                    setLoading(false)
                    router.push("/main/homepage")
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

    return (<>
        <Head>
            <title>Login - NewsApp</title>
        </Head>
        <div className={`bg-white`}>
            <div className={`d-none d-lg-flex`}>
                <div className={`w-50 ${styles.bgAuthLeft}`}></div>
                <div className={`w-50 mx-5`}>
                    <div className={`fw-bold fs-3 mt-5`}>Login</div>
                    <div className={`form-wrapper my-5`}>
                        <div className={`fw-bold mb-2`}>Email Address:</div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            onChange={handleChange}
                            value={formLogin.email}
                            className={`py-3 px-3 bg-transparent w-75 mb-4 ${styles.inputLogin}`} />
                        <div className={`fw-bold mb-2`}>Password:</div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            value={formLogin.password}
                            className={`py-3 px-3 bg-transparent w-75 ${styles.inputLogin}`} />
                    </div>
                    <div className={`text-primary text-center w-75 my-5`}>{formLoginError.email || formLoginError.password}</div>
                    <div onClick={handleSubmit} className={`py-3 px-5 w-75 text-white fw-bold text-center ${styles.btnLogin}`}>{loading ? 'Loading...' : 'Login'}</div>
                    <div className={`d-flex my-5`}>
                        <hr className={`w-25 ${styles.hrBlue}`} />
                        <div className={`text-primary px-3 py-1`}>Don&apos;t have an account?</div>
                        <hr className={`w-25 ${styles.hrBlue}`} />
                    </div>
                    <div className={`py-3 px-5 w-75 text-white fw-bold text-center ${styles.btnSignUp}`} onClick={() => router.push("/auth/register")}>Sign Up Now</div>
                    <div className={`text-decoration-underline text-center w-75 my-5`}><Link href="/main/home">Back to Home Page</Link></div>
                </div>
            </div>
            <Footer />

            {/* Mobile */}
            <div className="d-lg-none">
                <div className={`text-center my-5`}><Image className={`text-center`} src={require("../../assets/icons/news-today-banner-loginpage.svg").default} alt="" /></div>
                <div className={`d-flex mx-5 justify-content-around`}>
                    <div className={`login`}>
                        <div className={`text-primary fw-bold text-center`}>Login</div>
                        <Image src={require("../../assets/icons/horizon-mobile-loginpage.svg").default} alt="" />
                    </div>
                    <div className={`text-muted fw-bold text-center`}><Link href="/auth/register">Sign Up</Link></div>
                </div>
                <div className={`${styles.formWrapperMobile}`}>
                    <div className={`py-3 px-5`}>
                        <div className={`fw-bold`}>Welcome Back</div>
                        <div className={`mt-3 mb-5`}>Sign in with your account</div>
                        <div className={`mb-2`}>Email</div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            onChange={handleChange}
                            value={formLogin.email}
                            className={`py-3 bg-transparent w-100 mb-4 border-0 border-bottom ${styles.inputLoginMobile}`} />
                        <div className={`mb-2`}>Password</div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            value={formLogin.password}
                            className={`py-3 bg-transparent w-100 mb-4 border-0 border-bottom ${styles.inputLoginMobile}`} />
                        <div className={`position-relative float-end ${styles.iconEyecrossed}`}><Image src={require("../../assets/icons/eye-crossed_loginpage.svg").default} alt="" /></div>
                        <div className={`text-decoration-underline ${styles.forgotPassMobile}`}><Link href="/auth/forgot-password">Forgot your password?</Link></div>
                        <div className={`text-primary text-center mt-5`}>{formLoginError.email || formLoginError.password}</div>
                        <div className={`py-3 px-5 my-5 w-100 text-white fw-bold text-center ${styles.btnLogin}`} onClick={handleSubmit}>Login</div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Login;