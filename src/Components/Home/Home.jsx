import { useLoaderData } from "react-router-dom";
import SingleBook from "../SingleBook/SingleBook";


const Home = () => {

    const books = useLoaderData();

    console.log(books);
    return (
        <div className="mt-10 md:mt-15 mb-10">
            {/* banner section */}
         
                <div className="hero bg-[#1313130D] p-8  rounded-3xl">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                        <img
                            src='/src/assets/images/pngwing 1.png'
                            className="w-2/3 lg:w-1/3 rounded-lg " />
                        <div >
                            <h1 className="text-6xl font-bold Playfair_font">Books to freshen <br /> up your bookshelf</h1>
                            
                            <button className="btn bg-[#23BE0A] text-white workSense_font mt-12">View The List</button>
                        </div>
                    </div>
                </div>
          
            <div className="grid grid-cols-3 gap-16 mt-10">
                {
                    books.map(book => <SingleBook key={book.bookId} book={book}></SingleBook>)
                }
            </div>
        </div>
    );
};

export default Home;