import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const Books = useLoaderData();
    const { id } = useParams();
    //   console.log(id,Books)
    const idInt = parseInt(id);
    //   console.log(idInt)
    const book = Books.find(book => book.bookId === idInt)
    console.log(book)
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    console.log(image)
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 my-20">
            <div className="w-auto h-auto p-7 bg-gray-200 flex justify-center items-center rounded-3xl"><img className=" h-[80vh] w-[60vw] md:w-[30vw] mt-3 rounded-3xl " src={image} alt="" /></div>

            <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold Playfair_font">{bookName}</h1>
                <p className="workSense_font text-lg"> By : {author}</p>

                <hr className="w-full h-1  bg-black" />
                <p className="workSense_font text-lg">{category}</p>
                <hr className="w-full h-1 bg-black" />
                <p><span className="font-bold ">Review : </span>{review}</p>
                <div className="flex space-x-3">
                    <p className="workSense_font text-lg font-bold">Tags </p>
                    <p className=" text-[#23BE0A]  rounded-lg  bg-gray-300 p-1 ">
                            {tags[0]}
                        </p>
                        <p className=" text-[#23BE0A]  rounded-lg  bg-gray-300 p-1">
                            {tags[1]}
                        </p>
                </div>
                <hr className="w-full h-1  bg-black" />

                <div className="space-y-3">
                   <p>Number of page :<span className="ml-7 font-bold">{totalPages}</span></p>
                   <p>Publisher :  <span className="ml-20 font-bold">{publisher}</span></p>
                   <p>Year of Publishing : <span className="ml-3 font-bold">{yearOfPublishing}</span></p>
                   <p>Rating : <span className="ml-24 font-bold">{rating}</span></p>
                </div>
<div className="space-x-8">
    <button className="btn text-black font-bold border-2 border-gray-300">Read</button>
    <button className="btn bg-[#59C6D2] font-bold">Wishlist</button>
</div>
            </div>


        </div>
    );
};

export default BookDetails;