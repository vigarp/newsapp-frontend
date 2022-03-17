import Head from "next/head"
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const HomePage = () => {
    return (<>
    <Head>
        <title>Homepage - NewsApp</title>
    </Head>
        <Navbar />
    </>);
}

export default HomePage;