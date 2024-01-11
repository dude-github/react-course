import PropTypes from "prop-types";

const Card = ({ username, post, city, myArr }) => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="../../public/re1.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              reprehenderit placeat sed. Molestias, maiores mollitia!
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username} {myArr}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}, {city}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

// This is required for props validation
Card.propTypes = {
  username: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  myArr: PropTypes.array.isRequired,
};

Card.defaultProps = {
  username: "Tony",
  post: "not Assigned yet",
  city: "Mumbai",
};

export default Card;
