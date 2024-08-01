import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";


const Recomanded = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh]">
<h1 className="text-3xl font-bold Playfair_font my-4 ">Sort by category List</h1>
           <details className="dropdown my-8">
  <summary className="btn m-1 bg-green-500">Category <IoIosArrowDropdown className="h-8 w-6"></IoIosArrowDropdown></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <Link to={'/fiction'}><li><a>Fiction</a></li></Link>
   <Link to={'/fantasy'}> <li><a>Fantasy</a></li></Link>
   <Link to={'/historical_Fantasy'}> <li><a>Historical Fiction</a></li> </Link>
  </ul> 
</details>
        </div> 
    );
};

export default Recomanded;