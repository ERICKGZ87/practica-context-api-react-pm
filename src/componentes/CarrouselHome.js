import { Link } from "react-router-dom";
import PropType from "prop-types";

const CarrouselHome = ({ img1, img2, img3,img4}) => {


    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-md-4">

                    </div>

                    <div className="col-md-6">
                        <div
                            id="carouselExampleSlidesOnly"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={img1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={img2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={img3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={img4} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-2">


                    </div>
                </div>

            </div>

        </>
    )
}
CarrouselHome.PropType = {
    img : PropType.string
 
    }

export default CarrouselHome;
