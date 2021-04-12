import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div classNameName="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 my-auto text-center">
                            <span className="display-1 d-block ">404</span>
                            <div className="mb-4 lead">Ooops. Something went wrong</div>
                            <Link to="/" className="btn btn-outline-dark">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;