import PropTypes from "prop-types";

export default function HDAccordian({ accordianData }) {
  return (
    <div className="w-full font-jost bg-white">
      <h1 className="py-5 text-customBlue text-xl underline ml-2">
        Key Features:
      </h1>
      <section>
        {accordianData?.map((item, i) => (
          <div
            key={i}
            className="collapse collapse-plus bg-white shadow-custom rounded-none mb-2"
          >
            <input
              type="radio"
              name="my-accordion-3"
              id={`accordion-item-${i}`}
              defaultChecked={i === 0} 
            />
            <label
              htmlFor={`accordion-item-${i}`}
              className="collapse-title text-base font-medium text-customBlue cursor-pointer"
            >
              {item.title}
            </label>
            <div className="collapse-content text-gray-500 text-sm">
              <p>{item.quote}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}


HDAccordian.propTypes = {
  accordianData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired, 
    })
  ).isRequired, 
};
