import EachWishlistBookdisplay from "../EachWishlistBookDisplay/EachWishlistBookdisplay";

const Wishlist = () => {
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) ;
  // console.log(storedWishlist)
  return (
    <div className="my-10">
      {storedWishlist ? (
        storedWishlist.map((wishlist) => (
          <EachWishlistBookdisplay
            key={wishlist.bookId}
            wishlist={wishlist}
          ></EachWishlistBookdisplay>
        ))
      ):(
        <div>There is no wishlist item</div>
      )}
    </div>
  );
};

export default Wishlist;
