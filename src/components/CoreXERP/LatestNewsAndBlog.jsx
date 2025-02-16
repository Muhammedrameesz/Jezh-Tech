import { useNavigate } from "react-router-dom";
import useBlogStore from "../../store/BlogDetails";

export default function LatestNewsAndBlog() {
  const setBlogDetails = useBlogStore((state) => state.setBlogDetails);
  const navigate = useNavigate();

  const handleDetails = async (image, title) => {
    try {
      setBlogDetails({ image: image, title: title });
      navigate("/blog/details");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white pb-16 pt-5 p-5 font-jakarta">
      <div className="text-center mb-6">
        <h1 className="text-customBlue text-3xl md:text-4xl font-medium">
          Read Our Latest <span className="font-bold">News & Blog</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">

        <div className="bg-[#fff6ea] p-6 pb-14 rounded-3xl shadow-md relative">
          <section className="flex gap-4 mb-4 text-sm  ">
            <h1 className="bg-customGreen/80 p-1 px-6 rounded-full text-white">
              Articles
            </h1>
            <p className="mt-1 text-gray-500">12 Feb, 2024</p>
          </section>
          <h3 className="text-xl text-customBlue  mb-4 font-medium">
            {" "}
            How a Website Can Help Scale Your Small Business
          </h3>
          <p className="text-gray-500 mb-6 ">
            In today’s digital age, having an online presence is no longer a
            luxury; it’s a necessity. For small businesses, a well-designed
            website can be a powerful tool to enhance visibility, build
            credibility, and drive growth. If you’ve been wondering how a
            website can help scale your small business, this article is for you.
          </p>
          <button
            onClick={() =>
              handleDetails(
                "https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY=",
                "How a Website Can Help Scale Your Small Business")
            }
            className="absolute bottom-7 left-7 text-gray-700 py-2 px-6 rounded-full text-xs font-semibold border border-customGreen hover:bg-customGreen hover:text-white transition-colors duration-300"
          >
            Read More
          </button>
        </div>

        <div className="bg-[#dff7df] p-6 pb-14 rounded-3xl shadow-md relative">
          <section className="flex gap-4 mb-4 text-sm ">
            <h1 className="bg-customGreen/80 p-1 px-6 rounded-full text-white">
              Articles
            </h1>
            <p className="mt-1 text-gray-500">23 Oct, 2024</p>
          </section>
          <h3 className="text-xl text-customBlue  mb-4 font-medium">
            The Role of Software Development in Digital Transformation
          </h3>
          <p className="text-gray-500 mb-6 ">
            Digital transformation is becoming more than just a trend in
            today&apos;s rapidly changing business environment—it is a need. At
            the heart of this transformation lies software development, the
            backbone that powers technological advancement and innovation. From
            startups to multinational corporations.
          </p>
          <button 
           onClick={() =>
            handleDetails(
              "https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?b=1&s=612x612&w=0&k=20&c=rIMVMkPV5kiP2vu0iMk_u4LyzKr1tG02L6wYTHX7yEQ=",
              "The Role of Software Development in Digital Transformation")
          }
          className="absolute bottom-7 left-7 text-gray-700 py-2 px-6 rounded-full text-xs font-semibold border border-customGreen hover:bg-customGreen hover:text-white transition-colors duration-300">
            Read More
          </button>
        </div>

        <div className="bg-[#ffeaf5] p-6 pb-14 rounded-3xl shadow-md relative">
          <section className="flex gap-4 mb-4 text-sm ">
            <h1 className="bg-customGreen/80 p-1 px-6 rounded-full text-white">
              Articles
            </h1>
            <p className="mt-1 text-gray-500">5 Dec, 2024</p>
          </section>
          <h3 className="text-xl text-customBlue  mb-4 font-medium">
            Top 5 Features Every E-Commerce Website Should Have
          </h3>
          <p className="text-gray-500 mb-6 ">
            In today&apos;s hyper-competitive digital landscape, a successful
            e-commerce website is more than just an online storefront. It needs
            to be a seamless and engaging experience for customers, driving
            conversions and building brand loyalty. To achieve this, your
            website must incorporate key features that enhance user experience.
          </p>
          <button 
           onClick={() =>
            handleDetails(
              "https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.jpg?b=1&s=612x612&w=0&k=20&c=6K9v0tIuP0MFKy9JF1e1IW-pqhnmpoLWTPP4MsGSOmg=",
              "Top 5 Features Every E-Commerce Website Should Have")
          }
          className="absolute  bottom-7 left-7 text-gray-700 py-2 px-6 rounded-full text-xs font-semibold border border-customGreen hover:bg-customGreen hover:text-white transition-colors duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
