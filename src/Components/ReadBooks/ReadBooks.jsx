import EachReadBookDisplay from "../EachReadBookDisplay/EachReadBookDisplay";


const ReadBooks = () => {
    const readBooks = JSON.parse(localStorage.getItem('readBooks'))  ;
    console.log(readBooks);
    for(const item of readBooks){
console.log(item)
    }
    return ( 
        <div className="mb-20">
            This is read book 
            {
                readBooks.map(readBook=><EachReadBookDisplay key={readBook.bookId} readBook={readBook}></EachReadBookDisplay>)
            }
        </div>
    );
};

export default ReadBooks;