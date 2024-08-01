import EachReadBookDisplay from "../EachReadBookDisplay/EachReadBookDisplay";


const ReadBooks = () => {
    const readBooks = JSON.parse(localStorage.getItem('readBooks'))  ;
    // console.log(readBooks);
   
    return ( 
        <div className="mb-20">
            
         
            {
readBooks?(  readBooks.map(readBook=><EachReadBookDisplay key={readBook.bookId} readBook={readBook}></EachReadBookDisplay>)):<div>There is no Read item</div>
            }
        </div>
    );
};

export default ReadBooks;