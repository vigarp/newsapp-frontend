import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Register.module.css'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import { useState } from 'react/cjs/react.development'

const Register = () => {
    const router = useRouter()
    const [formRegister, setFormRegister] = useState({
        email: '',
        password: '',
        phonenumber: ''
    })

    const [formRegisterError, setFormRegisterError] = useState(false)

    const handleChange = (e) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value
        })
    }

    const validateRegister = (values) => {
        const errors = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Email is invalid";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password at least 6 characters";
        }
        if (!values.phonenumber) {
            errors.phonenumber = "Phone number is required";
        } else if (values.phonenumber.length < 10) {
            errors.phonenumber = "Phone number is invalid";
        }
        return errors;
    }

    const handleSubmit = () => {
        const resultValidate = validateRegister(formRegister)
        setFormRegisterError(resultValidate)
        handleClick(resultValidate)
    }

    const handleClick = (resultValidate) => {
        if (Object.keys(resultValidate).length === 0) {
            setFormRegisterError(false)
            console.log(formRegister)
        }
    }
    return (
        <div className={`bg-white`}>
            <div className={`d-none d-lg-flex`}>
                <div className={`w-50 ${styles.bgAuthLeft}`}></div>
                <div className={`w-50 mx-5`}>
                    <div className={`fw-bold fs-3 mt-5`}>Register</div>
                    <div className={`text-muted`}>Hey, welcome to News Today! Create an account to enjoy our<br /> full feautres!</div>
                    <div className={`form-wrapper my-5`}>
                        <div className={`fw-bold mb-2`}>Email Address:</div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            onChange={handleChange}
                            value={formRegister.email}
                            className={`py-3 px-3 bg-transparent w-75 mb-4 ${styles.inputRegister}`}></input>
                        <div className={`fw-bold mb-2`}>Password:</div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            value={formRegister.password}
                            className={`py-3 px-3 bg-transparent w-75 mb-4 ${styles.inputRegister}`}></input>
                        <div className={`fw-bold mb-2`}>Phone Number:</div>
                        <input
                            type="number"
                            name="phonenumber"
                            placeholder="Enter your phone number"
                            onChange={handleChange}
                            value={formRegister.phonenumber}
                            className={`py-3 px-3 bg-transparent w-75 ${styles.inputRegister}`}></input>
                    </div>
                    <div className={`text-primary text-center w-75 my-5`}>{formRegisterError.email || formRegisterError.password || formRegisterError.phonenumber}</div>
                    <div onClick={handleSubmit} className={`py-3 px-5 w-75 text-white fw-bold text-center ${styles.btnRegister}`}>Sign Up</div>
                    <div className={`d-flex my-5`}>
                        <hr className={`w-25 ${styles.hrBlue}`} />
                        <div className={`text-primary px-3 py-1`}>Already have an account?</div>
                        <hr className={`w-25 ${styles.hrBlue}`} />
                    </div>
                    <div className={`py-3 px-5 w-75 text-white fw-bold text-center ${styles.btnLogin}`} onClick={()=> router.push("/auth/login")}>Login Here</div>
                    <div className={`text-decoration-underline text-center w-75 my-5`}><Link href="/main/home">Back to Home Page</Link></div>
                </div>
            </div>
            <Footer />

            {/* Mobile */}
            <div className="d-lg-none">
                <div className={`text-center my-5`}><Image className={`text-center`} src={require("../../assets/icons/news-today-banner-loginpage.svg").default} alt="" /></div>
                <div className={`d-flex mx-5 justify-content-around`}>
                    <div className={`text-muted fw-bold text-center`}><Link href="/auth/login">Login</Link></div>
                    <div className={`register`}>
                        <div className={`text-primary fw-bold text-center`}>Sign Up</div>
                        <Image src={require("../../assets/icons/horizon-mobile-loginpage.svg").default} alt="" />
                    </div>
                </div>
                <div className={`${styles.formWrapperMobile}`}>
                    <div className={`py-3 px-5`}>
                        <div className={`fw-bold`}>Hey, welcome!</div>
                        <div className={`mt-3 mb-5`}>Sign up to see popular news, your can<br /> write your own too!</div>
                        <div className={`mb-2`}>Email</div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            onChange={handleChange}
                            value={formRegister.email}
                            className={`py-3 bg-transparent w-100 mb-4 border-0 border-bottom ${styles.inputRegisterMobile}`} />
                        <div className={`mb-2`}>Password</div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            value={formRegister.password}
                            className={`py-3 bg-transparent w-100 mb-4 border-0 border-bottom ${styles.inputRegisterMobile}`} />
                        <div className={`position-relative float-end ${styles.iconEyecrossed}`}><Image src={require("../../assets/icons/eye-crossed_loginpage.svg").default} alt="" /></div>
                        <div className={`mb-2`}>Phone Number</div>
                        <input
                            type="number"
                            name="phonenumber"
                            placeholder="Enter your phone number"
                            onChange={handleChange}
                            value={formRegister.phonenumber}
                            className={`py-3 bg-transparent w-100 mb-4 border-0 border-bottom ${styles.inputRegisterMobile}`} />
                            <div className={`text-primary text-center mt-5`}>{formRegisterError.email || formRegisterError.password || formRegisterError.phonenumber}</div>
                        <div onClick={handleSubmit} className={`py-3 px-5 my-5 w-100 text-white fw-bold text-center ${styles.btnRegister}`}>Sign Up</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;