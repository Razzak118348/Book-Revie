import EachWishlistBookdisplay from "../EachWishlistBookDisplay/EachWishlistBookdisplay";


const Wishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    // console.log(storedWishlist)
    return (
        <div>
           {
            storedWishlist.map(wishlist=><EachWishlistBookdisplay key={wishlist.bookId} wishlist={wishlist}></EachWishlistBookdisplay>)
           }
        </div>
    );
};

export default Wishlist;