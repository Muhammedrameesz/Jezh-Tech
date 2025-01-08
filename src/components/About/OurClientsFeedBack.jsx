
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/CustomSlickSlide.css"
import { Star, StarBorder } from "@mui/icons-material"; 
import Underline from "../../ui/Underline.jsx";
import Pattern from "../../ui/RandomPatterns3.jsx"


const ScrollableCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      title: "Name",
      subTitle: "CEO",
      image:
        "https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?b=1&s=612x612&w=0&k=20&c=aLm7LvcUVsB1sZMMzHhfktuVTXH-tOt2kGuxuM60PL0=",
      description: "The Jezh team delivered a standout Dakshin Sahodaya website, revolutionized school elections with EVMs, and fostered AI skills through Jezh Technology's Robo Fun, demonstrating innovation and commitment to technological advancement.",
      rating: 4,
    },
    {
      id: 2,
      title: "Name",
      subTitle: "CTO",
      image:
        "https://img.freepik.com/free-photo/young-emotional-concentrated-man-suit-pointing-up-isolated-dark-wall_140725-97235.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      description: "The Jezh team delivered a standout Dakshin Sahodaya website, revolutionized school elections with EVMs, and fostered AI skills through Jezh Technology's Robo Fun, demonstrating innovation and commitment to technological advancement.",
      rating: 5,
    },
    {
      id: 3,
      title: "Name",
      subTitle: "Designer",
      image:
        "https://img.freepik.com/premium-photo/businessman-classic-suit-is-pointing-away_85574-5819.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      description: "The Jezh team delivered a standout Dakshin Sahodaya website, revolutionized school elections with EVMs, and fostered AI skills through Jezh Technology's Robo Fun, demonstrating innovation and commitment to technological advancement.",
      rating: 3,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <Star key={i} className="text-yellow-500" /> : <StarBorder key={i} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="bg-white py-20 font-jost relative">
      <Pattern/>
    <div className="max-w-screen-lg mx-auto">
      <div className="max-w-screen-lg mx-auto p-4 mb-5 ">
        <section className="flex flex-col items-center justify-center text-center ">
          <h1 className="text-[#0E314C] text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-5">
          Our Clients Feedback
          </h1>
          <div className="">
          <Underline />
          </div>
          <p className="text-base text-gray-500 leading-6 mb-10 max-w-3xl mx-auto ">
          Jezh team delivered a standout Dakshin Sahodaya website, revolutionized school elections with EVMs in Adarsh Vidya Kendra and Rojavanam International School, and fostered AI skills through Jezh&apos;s RoboFun, demonstrating innovation and commitment to technological advancement. 
          </p>
        </section>

        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="p-2 ">
              <div className="bg-white shadow-md rounded-lg hover:shadow-xl  transition-shadow duration-300 flex ">
                {/* First Column: Image, Title, Subtitle */}
                <div className="w-1/2 p-4 flex flex-col items-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rounded-md w-full h-32 object-cover mb-3"
                  />
                  <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.subTitle}</p>
                </div>

                {/* Second Column: Description, Rating */}
                <div className="w-1/2 p-4 flex flex-col justify-between">
                  <p className="text-gray-600 mb-4 text-sm font-semibold">{card.description}</p>
                  <div className="flex items-center">{renderStars(card.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default ScrollableCards;
