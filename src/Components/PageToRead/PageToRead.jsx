import { XAxis, YAxis, BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";
const PageToRead = () => {
    const data = [
        { bookName: " Great Gatsby", totalPages: 218 },
        { bookName: "Mockingbird", totalPages: 281 },
        { bookName: "1984", totalPages: 328 },
        { bookName: "Pride Prejudice", totalPages: 279 },
        { bookName: "The Catcher", totalPages: 234 },
        { bookName: "The Hobbit", totalPages: 310 },
        { bookName: "Moby Dick", totalPages: 635 },
        { bookName: "War & Peace", totalPages: 1225 },
        { bookName: "The Alchemist", totalPages: 208 },
      ];
      
 
  return (
    <div className="chart-container">
    {/* from rechart website  */}
   <ResponsiveContainer width="100%" height={400}>
   <BarChart className="my-8" width={1000} height={800} data={data}>
      <XAxis dataKey="bookName" ></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
      <Bar dataKey="totalPages"  fill="#8884d8"></Bar>
    </BarChart>
   </ResponsiveContainer>
  </div>
  );
};

export default PageToRead;
