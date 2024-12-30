import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

export default function Location() {
  return (
    <div className="py-20 font-poppins  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-5xl">
        {/* Email Card */}
        <div className="bg-white p-8 rounded-lg shadow-custom  transform hover:scale-105 transition-all duration-300 text-center group">
          <div className="text-green-500 text-4xl mb-4 transition duration-300 group-hover:text-white ">
            <EmailOutlinedIcon
              sx={{ fontSize: "55px" }}
              className="bg-gray-50 rounded-full p-4 group-hover:bg-green-500 transition-all duration-300"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Mail Here
          </h2>
          <p className="text-gray-600 mb-1">admin@startp.com</p>
          <p className="text-gray-600">info@startp.com</p>
        </div>

        {/* Location Card */}
        <div className="bg-white p-8 rounded-lg shadow-custom  transform hover:scale-105 transition-all duration-300 text-center group">
          <div className="text-green-500 text-4xl mb-4 transition duration-300 group-hover:text-white ">
            <LocationOnOutlinedIcon
              sx={{ fontSize: "55px" }}
              className="bg-gray-50 rounded-full p-4 group-hover:bg-green-500 transition-all duration-300"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Our Location
          </h2>
          <p className="text-gray-600">123 Main Street, City, Country</p>
        </div>

        {/* Phone Card */}
        <div className="bg-white p-8 rounded-lg shadow-custom  transform hover:scale-105 transition-all duration-300 text-center group">
          <div className="text-green-500 text-4xl mb-4 transition duration-300 group-hover:text-white ">
            <PhoneOutlinedIcon
              sx={{ fontSize: "55px" }}
              className="bg-gray-50 rounded-full p-4 group-hover:bg-green-500 transition-all duration-300"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h2>
          <p className="text-gray-600">+123-456-7890</p>
          <p className="text-gray-600">+098-765-4321</p>
        </div>
      </div>
          

          {/* Google Map */}
      <div
      className="mt-20"
        style={{
          position: "relative",
          width: "100vw",
          height: "80vh",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d780.3276961322545!2d77.43131!3d8.182218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f124099b7a1f%3A0x1360d2ba2f59de3c!2sCADCenter%20-%20Autodesk%2C%20PTC%20Authorized%20Training%20Center%2C%20Nagercoil!5e1!3m2!1sen!2sin!4v1735560826805!5m2!1sen!2sin"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}


