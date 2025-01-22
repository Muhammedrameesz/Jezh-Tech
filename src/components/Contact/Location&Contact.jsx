import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

export default function Location() {
  return (
    <div className="py-20 font-jost  ">


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-5 md:mx-auto max-w-2xl">
        {/* Email Card */}
        <div className="bg-gradient-to-tl from-green-50 via-transparent to-transparent p-8 rounded-lg border-dashed border-2 transform hover:scale-105 transition-all duration-300 text-center group">
          <div className="text-customGreen text-4xl mb-4 transition duration-300 group-hover:text-white ">
            <EmailOutlinedIcon
              sx={{ fontSize: "55px", transition: "all 0.3s ease" }}
              className="bg-white shadow-lg rounded-full p-4 group-hover:bg-customGreen transition-all duration-300"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Mail Here
          </h2>
          <p className="text-gray-500 mb-2 ">
            <a
              href="mailto:info@jezhtechnologies.com"
              className="hover:underline transition-all duration-500"
            >
              info@jezhtechnologies.com
            </a>
          </p>
          
        </div>

        {/* Location Card */}
        

        {/* Phone Card */}
        <div className="bg-gradient-to-tl from-green-50 via-transparent to-transparent  p-8 rounded-lg border-dashed border-2  transform hover:scale-105 transition-all duration-300 text-center group">
          <div className="text-customGreen text-4xl mb-4 transition duration-300 group-hover:text-white ">
            <PhoneOutlinedIcon
              sx={{ fontSize: "55px", transition: "all 0.3s ease" }}
              className="bg-white shadow-lg rounded-full p-4 group-hover:bg-customGreen transition-all duration-300"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h2>
          <p className="text-gray-500 mb-2">
            <a href="tel:+919385722102" className="hover:underline transition-all duration-500">
              +91 9385722102
            </a>
            ,
          </p>
          <p className="text-gray-500">
            <a href="tel:+918428807007" className="hover:underline duration-500">
              +91 8428807007
            </a>
          </p>
        </div>
      </div>

                  {/* SECOND CARD ROW  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-auto max-w-5xl mt-10">
        {/* Location Card */}
        <div className="bg-gradient-to-tl from-green-50 via-transparent to-transparent p-8 rounded-lg border-dashed border-2  transform hover:scale-105 transition-all duration-300 text-center group">
          <div className="text-customGreen text-4xl mb-4 transition duration-300 group-hover:text-white ">
            <LocationOnOutlinedIcon
              sx={{ fontSize: "55px", transition: "all 0.3s ease" }}
              className="bg-white shadow-lg rounded-full p-4 group-hover:bg-customGreen transition-all duration-300"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
          India - Kanyakumari
          </h2>
          <p className="text-gray-500 mb-1">Sri Sai Complex,</p>
          <p className="text-gray-500">Nagercoil, India - 629001</p>
        </div>

          {/* Location Card */}
          <div className="bg-gradient-to-tl from-green-50 via-transparent to-transparent p-8 rounded-lg border-dashed border-2  transform hover:scale-105 transition-all duration-300 text-center group">
          <div className="text-customGreen text-4xl mb-4 transition duration-300 group-hover:text-white ">
            <LocationOnOutlinedIcon
              sx={{ fontSize: "55px", transition: "all 0.3s ease" }}
              className="bg-white shadow-lg rounded-full p-4 group-hover:bg-customGreen transition-all duration-300"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
          India - Coimbatore
          </h2>
          <p className="text-gray-500 mb-1">SRCAS IC, Nava India,</p>
          <p className="text-gray-500">Coimbatore, India - 641006</p>
        </div>

        {/* Location Card */}
        <div className="bg-gradient-to-tl from-green-50 via-transparent to-transparent p-8 rounded-lg border-dashed border-2  transform hover:scale-105 transition-all duration-300 text-center group">
          <div className="text-customGreen text-4xl mb-4 transition duration-300 group-hover:text-white ">
            <LocationOnOutlinedIcon
              sx={{ fontSize: "55px", transition: "all 0.3s ease" }}
              className="bg-white shadow-lg rounded-full p-4 group-hover:bg-customGreen transition-all duration-300"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
          UAE - Dubai
          </h2>
          <p className="text-gray-500 mb-1">Sapphire Tower Deira,</p>
          <p className="text-gray-500">Dubai, UAE - 780610</p>
        </div>

       
      </div>
    </div>
  );
}
