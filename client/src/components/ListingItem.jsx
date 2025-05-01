import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://via.placeholder.com/400x300?text=No+Image"
          }
          alt="listing cover"
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {listing.name}
          </h3>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <MdLocationOn className="text-blue-600" />
            {listing.address}
          </p>
          <p className="text-gray-700 mt-2">
            ${listing.offer ? listing.discountPrice : listing.regularPrice}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex gap-4 mt-2 text-sm text-gray-600">
            <span>{listing.bedrooms} Beds</span>
            <span>{listing.bathrooms} Baths</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

ListingItem.propTypes = {
  listing: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    address: PropTypes.string.isRequired,
    offer: PropTypes.bool.isRequired,
    discountPrice: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
  }).isRequired,
};
