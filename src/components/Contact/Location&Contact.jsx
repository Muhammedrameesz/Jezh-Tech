import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

export default function Location() {
  return (
    <div className="py-20 font-poppins  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-4xl">
        {/* Email Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 text-center">
          <div className="text-green-500  text-4xl mb-4 transition duration-300 group-hover:text-white">
            <EmailOutlinedIcon/>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Mail Here</h2>
          <p className="text-gray-600 mb-1">admin@startp.com</p>
          <p className="text-gray-600">info@startp.com</p>
        </div>

        {/* Location Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 text-center">
          <div className="text-green-500 text-4xl mb-4 transition duration-300 group-hover:text-white">
            <LocationOnOutlinedIcon />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h2>
          <p className="text-gray-600">123 Main Street, City, Country</p>
        </div>

        {/* Phone Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 text-center">
          <div className="text-green-500 text-4xl mb-4 transition duration-300 group-hover:text-white">
            <PhoneOutlinedIcon />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h2>
          <p className="text-gray-600">+123-456-7890</p>
          <p className="text-gray-600">+098-765-4321</p>
        </div>
      </div>
    </div>
  );
}
