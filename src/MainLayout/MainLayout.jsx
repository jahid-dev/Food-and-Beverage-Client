import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;