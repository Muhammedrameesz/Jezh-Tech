import useBlogStore from "../../../store/BlogDetails";
import SearchBar from "../../SearchBar";
import { AiOutlineCalendar } from "react-icons/ai";


export default function BlogDetailsPage() {
  const PopularPosts = [
    {
      image:
        "https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?b=1&s=612x612&w=0&k=20&c=rIMVMkPV5kiP2vu0iMk_u4LyzKr1tG02L6wYTHX7yEQ=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.jpg?b=1&s=612x612&w=0&k=20&c=6K9v0tIuP0MFKy9JF1e1IW-pqhnmpoLWTPP4MsGSOmg=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
  ];

  const blogDetails = useBlogStore((state) => state.blogDetails);

  return (
    <div className="py-20 bg-white font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mx-5 md:mx-10 items-start">
       
        <div className="col-span-4 bg-white p-8 rounded-lg ">
          <div className="mb-6">
            <img
              src={blogDetails.image}
              alt="Blog Detail"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <AiOutlineCalendar  className="text-green-500 w-5 h-5 " />
            <p className="text-gray-600 text-sm font-medium">
              {blogDetails.date}
            </p>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {blogDetails.title}
            </h1>
          </div>

          <div className="flex items-start space-x-2">
            <p className="text-gray-600 text-sm">{blogDetails.description}</p>
          </div>
          <div className="flex items-start space-x-2 mt-5">
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quaerat omnis explicabo at! Impedit quidem placeat sapiente provident et beatae veritatis voluptatem esse. Quo ullam minus minima adipisci quod sunt!</p>
          </div>

          <div className="mt-10 flex items-center justify-center p-10 border-l-2 border-green-500 bg-gray-50">
            <h1 className="font-semibold text-gray-700">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>
          </div>
        </div>

        {/* Sidebar Section */}
        <aside className="col-span-2 bg-white p-6 rounded-lg ">
          {/* Search Bar */}
          <SearchBar />

          {/* Popular Posts Section */}
          <div className="mt-10">
            <h1 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Popular Posts
            </h1>
            <div className="mt-4 space-y-4">
              {PopularPosts?.map((data, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 gap-4 items-center border-b pb-3 last:border-none"
                >
                  {/* Image */}
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-20 object-cover rounded-md col-span-1"
                  />
                  {/* Text Content */}
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500">{data.date}</p>
                    <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                      {data.description}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Section */}
          <div className="mt-10">
            <h1 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Category
            </h1>
            <div className="mt-4 space-y-3">
              {[
                "Business",
                "Privacy",
                "Technology",
                "Tips",
                "Uncategorized",
              ].map((category, i) => (
                <div key={i} className="flex items-center space-x-2">
                  {/* Green Square */}
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  {/* Category Text */}
                  <p className="text-xs font-semibold tracking-wider text-gray-700">
                    {category}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags Section */}
          <div className="mt-10">
            <h1 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Tags
            </h1>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                "IT",
                "Spale",
                "Games",
                "Fashion",
                "Travel",
                "Smart",
                "Marketing",
                "Tips",
              ].map((tag, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white text-gray-500 text-xs text-center tracking-wider font-semibold rounded-full border border-gray-300 hover:bg-green-500 hover:text-white cursor-pointer transition-colors duration-300"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
