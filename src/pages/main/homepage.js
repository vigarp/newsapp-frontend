import Head from "next/head"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import styles from "../../styles/Homepage.module.css"
import Image from "next/image"

const homepage = () => {
    return (<>
        <Head>
            <title>Homepage - NewsApp</title>
        </Head>
        <Navbar />
        <div className={`${styles.landingFirst}`}>
            <div className={`px-5 py-5 banner-inner`}>
                <div className={`${styles.bannerHomepage}`}>Share Information<br /> and Educate People</div>
                <div className={`mt-3 ${styles.subtitleHomepage}`}>Everyone has their point of view of something, but just<br /> don&apos;t be afraid to express the facts. Be an author and<br /> share you prespective of something to the world.</div>
                <div className={`my-5 text-white ${styles.btnStartExploring}`}>Start Exploring</div>
            </div>
        </div>
        <div className={`${styles.landingSecond}`}>
            <div className={`px-5 py-5 landing-second-inner`}>
                <div className={`popular-tags`}>
                    <div className={`d-flex justify-content-between`}>
                        <div className={`fw-bold`}>Popular Tags</div>
                        <div className={`text-primary`}>More</div>
                    </div>
                    <div className={`d-flex mt-3`}>
                        <div className={`text-primary fw-bold px-3 mx-3 ${styles.tagBackground}`}>#ladygaga</div>
                        <div className={`text-primary fw-bold px-3 mx-3 ${styles.tagBackground}`}>#jokowidodo</div>
                        <div className={`text-primary fw-bold px-3 mx-3 ${styles.tagBackground}`}>#dayniki</div>
                        <div className={`text-primary fw-bold px-3 mx-3 ${styles.tagBackground}`}>#ladygaga</div>
                        <div className={`text-primary fw-bold px-3 mx-3 ${styles.tagBackground}`}>#ladygaga</div>
                        <div className={`text-primary fw-bold px-3 mx-3 ${styles.tagBackground}`}>#jokowidodo</div>
                        <div className={`text-primary fw-bold px-3 mx-3 ${styles.tagBackground}`}>#dayniki</div>
                        <div className={`text-primary fw-bold px-3 mx-3 ${styles.tagBackground}`}>#ladygaga</div>
                        <div className={`text-primary fw-bold px-3 mx-3 ${styles.tagBackground}`}>#dayniki</div>
                    </div>
                </div>
                <div className={`mt-5 category`}>
                    <div className={`d-flex justify-content-between`}>
                        <div className={`fw-bold`}>Category</div>
                        <div className={`text-primary`}>More</div>
                    </div>
                    <div className={`mx-5 category-cards`}>
                        <div className={`d-flex mt-3`}>
                            <div className={`category-card-inner mx-3`}>
                                <Image src={require("../../assets/goverment-cat-homepage.png")} width={204} height={222} alt="" />
                                <div className={`text-center fw-bold mt-3`}>Goverment</div>
                            </div>
                            <div className={`category-card-inner mx-3`}>
                                <Image src={require("../../assets/economy-cat-homepage.png")} width={204} height={222} alt="" />
                                <div className={`text-center fw-bold mt-3`}>Economy</div>
                            </div>
                            <div className={`category-card-inner mx-3`}>
                                <Image src={require("../../assets/health-cat-homepage.png")} width={204} height={222} alt="" />
                                <div className={`text-center fw-bold mt-3`}>Health</div>
                            </div>
                            <div className={`category-card-inner mx-3`}>
                                <Image src={require("../../assets/goverment-cat-homepage.png")} width={204} height={222} alt="" />
                                <div className={`text-center fw-bold mt-3`}>Goverment</div>
                            </div>
                            <div className={`category-card-inner mx-3`}>
                                <Image src={require("../../assets/economy-cat-homepage.png")} width={204} height={222} alt="" />
                                <div className={`text-center fw-bold mt-3`}>Economy</div>
                            </div>
                            <div className={`category-card-inner mx-3`}>
                                <Image src={require("../../assets/health-cat-homepage.png")} width={204} height={222} alt="" />
                                <div className={`text-center fw-bold mt-3`}>Health</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`mt-5 recommended`}>
                    <div className={`d-flex justify-content-between`}>
                        <div className={`fw-bold`}>Recommended</div>
                        <div className={`text-primary`}>More</div>
                    </div>
                    <div className={`recommended-card`}>
                        <div className={`d-flex mt-3`}>
                            <div className={`d-flex mx-3 w-25 ${styles.recommendedCardBackground}`}>
                                <Image src={require("../../assets/health-cat-homepage.png")} width={126} height={202} alt="" />
                                <div className={`mx-3 my-3 recommended-card-description`}>
                                    <div className={`text-primary fw-bold`}>COVID-19</div>
                                    <div>Why corona never ends? Let&apos;s see how its facts</div>
                                    <div className={`mt-1 d-flex justify-content-between recommended-card-info`}>
                                        <div className={`d-flex like-info`}>
                                            <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                            <div className={`mx-1 text-muted`}>2.1k</div>
                                        </div>
                                        <div className={`d-flex time-info`}>
                                            <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                            <div className={`mx-1 text-muted`}>3m ago</div>
                                        </div>
                                        <div className={`d-flex save-info`}>
                                            <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`d-flex mx-3 w-25 ${styles.recommendedCardBackground}`}>
                                <Image src={require("../../assets/goverment-cat-homepage.png")} width={126} height={202} alt="" />
                                <div className={`mx-3 my-3 recommended-card-description`}>
                                    <div className={`text-primary fw-bold`}>President Election</div>
                                    <div>Why corona never ends? Let&apos;s see how its facts</div>
                                    <div className={`mt-1 d-flex justify-content-between recommended-card-info`}>
                                        <div className={`d-flex like-info`}>
                                            <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                            <div className={`mx-1 text-muted`}>2.1k</div>
                                        </div>
                                        <div className={`d-flex time-info`}>
                                            <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                            <div className={`mx-1 text-muted`}>3m ago</div>
                                        </div>
                                        <div className={`d-flex save-info`}>
                                            <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`d-flex mx-3 w-25 ${styles.recommendedCardBackground}`}>
                                <Image src={require("../../assets/economy-cat-homepage.png")} width={126} height={202} alt="" />
                                <div className={`mx-3 my-3 recommended-card-description`}>
                                    <div className={`text-primary fw-bold`}>Currency Prices</div>
                                    <div>Why corona never ends? Let&apos;s see how its facts</div>
                                    <div className={`mt-1 d-flex justify-content-between recommended-card-info`}>
                                        <div className={`d-flex like-info`}>
                                            <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                            <div className={`mx-1 text-muted`}>2.1k</div>
                                        </div>
                                        <div className={`d-flex time-info`}>
                                            <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                            <div className={`mx-1 text-muted`}>3m ago</div>
                                        </div>
                                        <div className={`d-flex save-info`}>
                                            <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`d-flex mx-3 w-25 ${styles.recommendedCardBackground}`}>
                                <Image src={require("../../assets/goverment-cat-homepage.png")} width={126} height={202} alt="" />
                                <div className={`mx-3 my-3 recommended-card-description`}>
                                    <div className={`text-primary fw-bold`}>President Election</div>
                                    <div>Why corona never ends? Let&apos;s see how its facts</div>
                                    <div className={`mt-1 d-flex justify-content-between recommended-card-info`}>
                                        <div className={`d-flex like-info`}>
                                            <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                            <div className={`mx-1 text-muted`}>2.1k</div>
                                        </div>
                                        <div className={`d-flex time-info`}>
                                            <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                            <div className={`mx-1 text-muted`}>3m ago</div>
                                        </div>
                                        <div className={`d-flex save-info`}>
                                            <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.landingThird}`}>
            <div className={`landing-third-inner`}>
                <div className={`d-flex justify-content-around`}>
                    <div className={`inner-left`}>
                        <div className={`${styles.bannerVideoSection}`}>Let&apos;s hear about<br /> Kayla&apos;s success story</div>
                        <div className={`mt-3 mb-5`}>See how well News Today works in a real user&apos;s life.</div>
                        <div className={`text-white ${styles.btnGetStarted}`}>Let&apos;s get started</div>
                    </div>
                    <div className={`ms-5 inner-right`}>
                        <Image src={require("../../assets/kayla-video-homepage.svg").default} width={671} height={390} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className={`landingFourth`}>
            <div className={`px-5 py-5 landing-fourth-inner`}>
                <div className={`latest-news`}>
                    <div className={`fw-bold`}>Latest News</div>
                </div>
                <div className={`news-rows row row justify-content-center`}>
                    <div className={`col-4 d-flex m-3 my-5 w-25 ${styles.recommendedCardBackground}`}>
                        <Image src={require("../../assets/goverment-cat-homepage.png")} width={126} height={202} alt="" />
                        <div className={`mx-3 my-3 recommended-card-description`}>
                            <div className={`text-primary fw-bold`}>President Election</div>
                            <div>Why corona never ends? Let&apos;s see how its facts</div>
                            <div className={`mt-1 d-flex justify-content-between recommended-card-info`}>
                                <div className={`d-flex like-info`}>
                                    <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                    <div className={`mx-1 text-muted`}>2.1k</div>
                                </div>
                                <div className={`d-flex time-info`}>
                                    <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                    <div className={`mx-1 text-muted`}>3m ago</div>
                                </div>
                                <div className={`d-flex save-info`}>
                                    <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-4 d-flex m-3 my-5 w-25 ${styles.recommendedCardBackground}`}>
                        <Image src={require("../../assets/goverment-cat-homepage.png")} width={126} height={202} alt="" />
                        <div className={`mx-3 my-3 recommended-card-description`}>
                            <div className={`text-primary fw-bold`}>President Election</div>
                            <div>Why corona never ends? Let&apos;s see how its facts</div>
                            <div className={`mt-1 d-flex justify-content-between recommended-card-info`}>
                                <div className={`d-flex like-info`}>
                                    <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                    <div className={`mx-1 text-muted`}>2.1k</div>
                                </div>
                                <div className={`d-flex time-info`}>
                                    <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                    <div className={`mx-1 text-muted`}>3m ago</div>
                                </div>
                                <div className={`d-flex save-info`}>
                                    <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-4 d-flex m-3 my-5 w-25 ${styles.recommendedCardBackground}`}>
                        <Image src={require("../../assets/goverment-cat-homepage.png")} width={126} height={202} alt="" />
                        <div className={`mx-3 my-3 recommended-card-description`}>
                            <div className={`text-primary fw-bold`}>President Election</div>
                            <div>Why corona never ends? Let&apos;s see how its facts</div>
                            <div className={`mt-1 d-flex justify-content-between recommended-card-info`}>
                                <div className={`d-flex like-info`}>
                                    <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                    <div className={`mx-1 text-muted`}>2.1k</div>
                                </div>
                                <div className={`d-flex time-info`}>
                                    <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                    <div className={`mx-1 text-muted`}>3m ago</div>
                                </div>
                                <div className={`d-flex save-info`}>
                                    <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-4 d-flex m-3 w-25 ${styles.recommendedCardBackground}`}>
                        <Image src={require("../../assets/goverment-cat-homepage.png")} width={126} height={202} alt="" />
                        <div className={`mx-3 my-3 recommended-card-description`}>
                            <div className={`text-primary fw-bold`}>President Election</div>
                            <div>Why corona never ends? Let&apos;s see how its facts</div>
                            <div className={`mt-1 d-flex justify-content-between recommended-card-info`}>
                                <div className={`d-flex like-info`}>
                                    <Image src={require("../../assets/icons/likes-homepage.svg").default} alt="" />
                                    <div className={`mx-1 text-muted`}>2.1k</div>
                                </div>
                                <div className={`d-flex time-info`}>
                                    <Image src={require("../../assets/icons/clock-homepage.svg").default} alt="" />
                                    <div className={`mx-1 text-muted`}>3m ago</div>
                                </div>
                                <div className={`d-flex save-info`}>
                                    <Image src={require("../../assets/icons/saved-homepage.svg").default} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`end-articles`}>
                    <div className={`text-center text-muted mt-5 mb-3`}>No article left</div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default homepage;