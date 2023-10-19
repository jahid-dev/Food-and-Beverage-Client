import { useLoaderData } from "react-router-dom";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";


const MainSection = () => {
    const companies = useLoaderData()
    return (
        <div>
            <h2 className="text-5xl text-center my-32 font-bold font-serif">
                Our Partners
            </h2>
            <div className="max-w-7xl  mx-auto">
                <div className="grid md:ml-3 grid-cols-1 md:grid-cols-3 gap-3">

                    {companies.map((company) => (
                        <Featured key={company.id} company={company}></Featured>
                    ))}
                </div>
            </div>
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default MainSection;