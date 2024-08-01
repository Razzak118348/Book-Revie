
const FamousWriter = () => {
    const writers=[
        "F. Scott Fitzgerald",
        "Harper Lee",
        "George Orwell",
        "Jane Austen",
        "J.D. Salinger",
        "J.R.R. Tolkien",
        "Herman Melville",
        "Leo Tolstoy",
        "Paulo Coelho"
    ]
    return (
        <div>
            <h2 className="text-4xl">Famous Writer</h2>
            <ul className="text-xl font-bold mt-8 mb-8">
            {
                writers.map((writer,idx)=><li className="my-4 " key={idx}>{writer}</li>)
            }
            </ul>
        </div>
    );
};

export default FamousWriter;