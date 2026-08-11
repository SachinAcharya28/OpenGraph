import Features from "../../components/home/Features";
import GraphPreview from "../../components/home/GraphPreview";
import Hero from "../../components/home/Hero";
import HowItWorks from "../../components/home/HowItWorks";
import Footer from "../../components/layout/Footer";
import NavBar from "../../components/layout/NavBar";

const Home=()=>{
    return (
        <>
            <NavBar/>
            <Hero/>
            <Features/>
            <GraphPreview/>
            <HowItWorks/>
            <Footer/>
        </>
    )
}
export default Home;