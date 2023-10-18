
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from "react-hot-toast";
import HeroSection from '../../components/Header/HeroSection/HeroSection';

const Home = () => {
    AOS.init();
   
    return (
        <div>
            <div>
                <Toaster></Toaster>
            </div>
            <HeroSection></HeroSection>
        </div>
    );
};


export default Home