import Filter from "../Filter";
import Listing from "../Listing";
import "./style.css";


export default function ListingBody() {
  return (
    <div className="section-listing-body">
      <Filter />
      <Listing />
    </div>
  );
}
