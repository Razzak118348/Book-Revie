import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center justify-center text-xl mt-52    
        
        items-center  font-bold">
            <h2>Oops!!!!</h2>
            <Link to={'/'}><button className="btn mt-5">Go back</button></Link>
        </div>
    );
};

export default Error;