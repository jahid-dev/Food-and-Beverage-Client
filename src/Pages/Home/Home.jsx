
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from "react-hot-toast";

const Home = () => {
    AOS.init();
   
    return (
        <div>
            <div>
                <Toaster></Toaster>
            </div>
            
        </div>
    );
};


export default Home