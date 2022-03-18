import Head from "next/head"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import styles from "../../styles/Homepage.module.css"
import Image from "next/image"

const HomePage = () => {
    return (<>
        <Head>
            <title>Homepage - NewsApp</title>
        </Head>
        <Navbar />
        <div className={`${styles.landingFirst}`}>
            <div className={`${styles.innerContent}`}>
                <div className={`${styles.bannerHomepage}`}>Share Information<br /> and Educate People</div>
                <div className={`mt-3 ${styles.subtitleHomepage}`}>Everyone has their point of view of something, but just<br /> don&apos;t be afraid to express the facts. Be an author and<br /> share you prespective of something to the world.</div>
                <div className={`my-5 text-white ${styles.btnStartExploring}`}>Start Exploring</div>
            </div>
        </div>
        <div className={`landingSecond mx-5 mt-3`}>
            <div className={`d-flex justify-content-between`}>
                <div className={`fw-bold`}>Popular Tags</div>
                <div className={`text-primary`}>More</div>
            </div>
            <div className={`d-flex mt-3 mb-5`}>
                <div className={`text-primary px-3 mx-3 fw-bold ${styles.tagBox}`}>#ladygaga</div>
                <div className={`text-primary px-3 mx-3 fw-bold ${styles.tagBox}`}>#jokowidodo</div>
                <div className={`text-primary px-3 mx-3 fw-bold ${styles.tagBox}`}>#dayniki</div>
                <div className={`text-primary px-3 mx-3 fw-bold ${styles.tagBox}`}>#motogp</div>
                <div className={`text-primary px-3 mx-3 fw-bold ${styles.tagBox}`}>#minyakgoreng</div>
                <div className={`text-primary px-3 mx-3 fw-bold ${styles.tagBox}`}>#ramadhan</div>
                <div className={`text-primary px-3 mx-3 fw-bold ${styles.tagBox}`}>#jokowidodo</div>
                <div className={`text-primary px-3 mx-3 fw-bold ${styles.tagBox}`}>#dayniki</div>
                <div className={`text-primary px-3 mx-3 fw-bold ${styles.tagBox}`}>#ladygaga</div>
            </div>
            <div className={`d-flex justify-content-between mb-3`}>
                <div className={`fw-bold`}>Category</div>
                <div className={`text-primary`}>More</div>
            </div>
            <div className={`d-flex my-5`}>
                <div className={`mx-5`}>
                    <Image src={require("../../assets/goverment-cat-homepage.png")} alt="" />
                    <div className={`fw-bold text-center my-3`}>Goverment</div>
                </div>
                <div className={`mx-5`}>
                    <Image src={require("../../assets/economy-cat-homepage.png")} alt="" />
                    <div className={`fw-bold text-center my-3`}>Economy</div>
                </div>
                <div className={`mx-5`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} alt="" />
                    <div className={`fw-bold text-center my-3`}>Health</div>
                </div>
                <div className={`mx-5`}>
                    <Image src={require("../../assets/goverment-cat-homepage.png")} alt="" />
                    <div className={`fw-bold text-center my-3`}>Goverment</div>
                </div>
                <div className={`mx-5`}>
                    <Image src={require("../../assets/economy-cat-homepage.png")} alt="" />
                    <div className={`fw-bold text-center my-3`}>Economy</div>
                </div>
                <div className={`mx-5`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} alt="" />
                    <div className={`fw-bold text-center my-3`}>Health</div>
                </div>
            </div>
            <div className={`d-flex justify-content-between`}>
                <div className={`fw-bold`}>Recomended</div>
                <div className={`text-primary`}>More</div>
            </div>
            <div className={`d-flex my-5`}>
                <div className={`d-flex mx-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`d-flex mx-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`d-flex mx-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`d-flex mx-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.landingThird}`}>
            <div className={`d-flex justify-content-around ${styles.innerContent}`}>
                <div className={`innerLeft`}>
                    <div className={`fw-bold ${styles.bannerHomepageSecond}`}>Let&apos;s hear about<br /> Kayla&apos;s success story</div>
                    <div className={`my-5 ${styles.subtitleHomepageSecond}`}>See how well News Today works in a<br /> real user&apos;s life.</div>
                    <div className={`text-white ${styles.btnLetsStarted}`}>Let&apos;s get started</div>
                </div>
                <Image src={require("../../assets/kayla-video-homepage.svg").default} alt="" />
            </div>
        </div>
        <div className={`mx-5 mt-5 landingFourth`}>
            <div className={`fw-bold`}>Latest News</div>
            <div className={`row mt-1 justify-content-center`}>
                <div className={`col-4 d-flex m-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-4 d-flex m-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-4 d-flex m-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-4 d-flex m-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-4 d-flex m-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-4 d-flex m-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-4 d-flex m-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-4 d-flex m-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-4 d-flex m-3 ${styles.recomendedBox}`}>
                    <Image src={require("../../assets/health-cat-homepage.png")} width={130} height={205} alt="" />
                    <div className={`desc m-3`}>
                        <div className={`fw-bold text-primary`}>COVID-19</div>
                        <div>Why corona never ends? Let&apos;s see how its facts</div>
                        <div className={`d-flex justify-content-around mt-5`}>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>2.1 K</div>
                            </div>
                            <div className={`d-flex`}>
                                <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                <div className={`text-muted ms-1`}>3m ago</div>
                            </div>
                            <div className={`saved`}>
                                <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`text-muted text-center my-5`}>No Article Left</div>
            </div>
        </div>
        <Footer />
    </>);
}

export default HomePage;