
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from "react-hot-toast";
import HeroSection from '../../components/Header/HeroSection/HeroSection';
import MainSection from '../../components/MainSection/MainSection';

const Home = () => {
    AOS.init();
   
    return (
        <div>
            <div>
                <Toaster></Toaster>
            </div>
            <HeroSection></HeroSection>
            <MainSection></MainSection>
        </div>
    );
};


export default Home