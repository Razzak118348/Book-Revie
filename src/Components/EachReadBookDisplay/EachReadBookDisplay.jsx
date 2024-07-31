import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
const EachReadBookDisplay = ({ readBook }) => {
  const {bookId,
    bookName,
    image,
    author,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = readBook;
  return (
    <div className=" mt-10 flex flex-col md:flex-row md:justify-start  bg-base-200 w-full shadow-xl rounded-lg">
      <figure className="px-10 p-10 ">
        <img src={image} alt="book image " className="rounded-xl" />
      </figure>
      <div className="p-10 space-y-5">
        <h2 className="card-title text-2xl Playfair_font">{bookName}</h2>
        <p className="workSense_font ">
          <span className="font-bold">By : </span> {author}{" "}
        </p>

        <div className="flex space-x-4">
          <p className="workSense_font text-lg font-bold">Tags :</p>
          <p className=" text-[#23BE0A]  rounded-lg font-bold bg-gray-300 p-1 ">
            #{tags[0]}
          </p>
          <p className=" text-[#23BE0A]  rounded-lg font-bold bg-gray-300 p-1">
            #{tags[1]}
          </p>
          <div className="flex space-x-1  ">
            <p className="mt-1">
              {" "}
              <FaLocationDot className=" w-6 h-6" />
            </p>{" "}
            <p> Year of publishing :{yearOfPublishing}</p>
          </div>
        </div>

        <div className="flex space-x-6 ">
          <div className="flex">
            <div className="flex space-x-3"><p className="mt-1"><IoPeople className="w-6 h-6"></IoPeople></p> <p ><span className="font-bold">Publisher :</span> {publisher}</p></div>
          </div>
          <div className="flex space-x-2">
            <p><MdOutlineContactPage className="w-6 h-6"></MdOutlineContactPage></p>
            <p className="font-bold">Total page :  {totalPages}</p>
          </div>
        </div>


        <hr className="min-h-0.5  bg-black" />

      <div className="flex space-x-8 font-bold workSense_font">
        <p className="bg-[#328EFF26] p-2 rounded-lg"> category : {category}</p>
        <p className="bg-[#FFAC3326] p-2 rounded-lg ">Rating : {rating}</p>
        <Link to={`/SingleBook/${bookId}`}>
        <button className="btn primary bg-green-500">View detais</button>
        </Link>
      </div>

      </div>
    </div>
  );
};
EachReadBookDisplay.propTypes = {
  readBook: PropTypes.object,
};
export default EachReadBookDisplay;
