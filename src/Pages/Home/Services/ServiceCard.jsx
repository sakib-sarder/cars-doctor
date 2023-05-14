import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <Fade left duration={1000}>
      <div className="rounded-lg bg-base-100 border ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-500">Price: ${price}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ServiceCard;
