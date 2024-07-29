import { useState } from "react";
import { Link } from "react-router-dom";
import ReadBooks from "../ReadBooks/ReadBooks";
import Wishlist from "../Wishlist/Wishlist";



const ListedBook = () => {
const [tabIndex,setTabIndex]=useState(0)


    return (
        <div>
            <h2 className="text-4xl Playfair_font text-center my-5 bg-gray-200 p-5 rounded-lg">Books</h2>

            <div className="p-2 flex justify-center md:justify-start
             my-5 rounded-lg overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link to={'/listedBook'}  onClick={()=>setTabIndex(0)}className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0?'border border-b-0':"border-b"} dark:border-gray-600 dark:text-gray-600`}>
		
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Read Books</span>
	</Link>
	<Link to={'/listedBook'} onClick={()=>setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1?'border border-b-0':"border-b"} dark:border-gray-600 dark:text-gray-600`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Wishlist Books</span>
	</Link>
	
</div>
{
    tabIndex===0?<ReadBooks></ReadBooks>:<Wishlist></Wishlist>
} 
{/* another way  for many component include  */}
{/* {tabIndex===0&&<ReadBooks></ReadBooks>}
{
    tabIndex==1 && <Wishlist></Wishlist>
} */}
        </div>
    );
};

export default ListedBook;