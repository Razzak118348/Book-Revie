import { useEffect, useState } from "react";
import EachFantasy from "./EachFantasy";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const Fantasy = () => {
    const allBooks=useLoaderData();
    const [FantasyBooks, setFantasyBooks]=useState([])
 useEffect(()=>{
const filterbooks = allBooks.filter(book=>book.category==='Fantasy')
setFantasyBooks(filterbooks);
 },[allBooks])

    return (
        <div>
          <div className="flex items-center justify-center">
          <details className="dropdown my-8">
  <summary className="btn m-1 bg-green-500">Category <IoIosArrowDropdown className="h-8 w-6"></IoIosArrowDropdown></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <Link to={'/fiction'}><li><a>Fiction</a></li></Link>
   <Link to={'/fantasy'}> <li><a>Fantasy</a></li></Link>
   <Link to={'/historical_Fantasy'}> <li><a>Historical Fiction</a></li> </Link>
  </ul> 
</details>
          </div>

            <div >
          <h1 className="text-center bg-gray-300 p-2 rounded-lg text-3xl font-bold Playfair_font my-4 ">This is Fantasy section </h1>

            {
                FantasyBooks.map(eachbook=><EachFantasy key={eachbook.bookId} eachBook={eachbook}></EachFantasy>)
            }
        </div>
        </div>
    );
};

export default Fantasy;