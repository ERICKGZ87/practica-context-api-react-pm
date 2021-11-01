import { FaBoxes, FaEnvelope, FaHome, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <div className="container">

            <div className="row">
              
                <div className="col-md-5">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <img className="logoHome" src="https://cdn.shopify.com/s/files/1/0093/7603/8975/products/66a-fotomontaje-lamparas-logo-star-wars-02190beb-9a1e-48fa-87de-e90c3545d39c_8ccf62fc-4118-4e9b-96c6-c8c411242022.jpg?v=1586386530"></img>
                        <div className="container-fluid nav justify-content-center">

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" aria-current="page" to="/">
                                            <FaHome />
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Heroes">
                                            <FaEnvelope />
                                           Heroes
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Planetas">
                                            <FaEnvelope />
                                            planetas
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Contact">
                                            <FaEnvelope />
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="About">
                                            <FaEnvelope />
                                            About
                                        </Link>
                                    </li>
                                 

                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>
                <div className="col-md-7">
               
                </div>
                
            </div>

        </div>







    )


}

export default Navbar