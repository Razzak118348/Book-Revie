import { FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";



const SingleBook = ({ book }) => {
    console.log(book);
    const { image, bookName, tags, author, category, rating } = book;
    console.log(tags, category, rating);
    return (
        <div className="m-0 p-0 rounded-xl border-2">
            <div className="hero ">
                <div className=" flex flex-col">
                    <div className="bg-base-300 p-6 rounded-lg my-5">
                        <img src={image} className="w-52 rounded-lg shadow-2xl h-52" />
                    </div>

                    <div className="flex justify-between my-2 p-0 workSense_font ">
                        <p className=" text-[#23BE0A]  rounded-lg  bg-gray-300 p-1 ">
                            {tags[0]}
                        </p>
                        <p className=" text-[#23BE0A]  rounded-lg  bg-gray-300 p-1">
                            {tags[1]}
                        </p>
                    </div>
                    <h1 className="text-xl font-bold Playfair_font mb-2">{bookName}</h1>
                    <p className="text-left workSense_font  ">By : {author}</p>

                </div>

            </div>
            <div className="flex justify-center items-center my-2">
                <hr className="w-3/4  text-black h-2" />
            </div>
            <div className="flex justify-around text-black mb-2 workSense_font ">
                <p>{category}</p>
               <div className="flex space-x-1"> <p>{rating} </p><FaRegStar></FaRegStar></div>
            </div>
        </div>
    );
};

SingleBook.propTypes = {
    book: PropTypes.object,
};

export default SingleBook;
