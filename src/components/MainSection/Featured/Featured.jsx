import { Link } from "react-router-dom";

const Featured = ({ company }) => {
    const { companyName, _id, image, brandMotto } = company;
    return (
        <div className="max-w-7xl  mx-auto">
            <div >
                <Link to={`/companyproductdetails/${_id}`}>
                    <button className="group relative">
                        <div className="group-hover:bg-opacity-80 transition-opacity duration-700">
                            <div className="card w-80 h-80 hover:opacity-50   image-full relative">
                                <figure>
                                    <img
                                        src={image}
                                        alt={companyName}
                                        className="transition-transform transform hover:scale-105"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-center font-mono font-bold text-2xl">
                                        {companyName}
                                    </h2>
                                </div>
                                <div className="card-body absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <h2 className="card-title text-2xl font-mono">
                                        {brandMotto}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Featured;
