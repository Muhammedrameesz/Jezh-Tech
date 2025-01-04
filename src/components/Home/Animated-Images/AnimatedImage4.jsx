import { motion } from "framer-motion"
import Eight from "../../../assets/images/imageset4/eight.70aca56a.png"
import Eleven from "../../../assets/images/imageset4/eleven.293a7573.png"
import Five from "../../../assets/images/imageset4/five.b92d972c.png"
import Four from "../../../assets/images/imageset4/four.e7671f90.png"
import Nine from "../../../assets/images/imageset4/nine.b9401578.png"
import One from "../../../assets/images/imageset4/one.a6414547.png"
import Seven from "../../../assets/images/imageset4/seven.b85c9ff2.png"
import Six from "../../../assets/images/imageset4/six.af2d6337.png"
import Ten from "../../../assets/images/imageset4/ten.c4722db8.png"
import Three from "../../../assets/images/imageset4/three.073734e3.png"
import Two from "../../../assets/images/imageset4/two.6a4c3d7e.png"


export default function AnimatedImage4() {
    const images = [
        { src: One, alt: "Image One",className: "z-20 w-[100px] h-[140px] top-[14%] left-[35%]" },
        { src: Three, alt: "Image Three",className: " w-[260px] h-[160px] bottom-[12%] left-[20%] " },
        { src: Four, alt: "Image Four",className:"z-30 right-[32%] w-[70px] h-[90px] bottom-[38%]" },
        { src: Five, alt: "Image Five",className:"z-30 left-[18%] w-[70px] h-[90px] top-[-5%]" },
        { src: Six, alt: "Image Six" ,className:"z-30 right-[30%] w-[70px] h-[90px] top-[-5%]"},
        { src: Seven, alt: "Image Seven",className:"z-10 w-[100px] h-[200px] right-[12%] top-[3%]" },
        { src: Eight, alt: "Image Eight",className:"z-20 w-[100px] h-[200px] right-[8%] bottom-[4%]" },
        { src: Nine, alt: "Image Nine",className:"z-20 w-[100px] h-[200px] left-[2%] bottom-[8%]" },
        { src: Ten, alt: "Image Ten",className:"z-10 w-[100px] h-[200px] left-[5%] top-[3%]" },
        { src: Two, alt: "Image Two",className:"z-10 left-[29%] top-[16%] w-[170px] h-[260px]" },
        { src: Eleven, alt: "Image Eleven" , className: "w-[90%]  bottom-0"},
        
      ];
      

  return (
    <section className=" relative w-[420px] -ml-12 md:ml-0 h-[300px] md:w-[500px] md:h-[400px] ">
    {images.map((image, index) => (
      <motion.img
      key={image.alt}
      src={image.src}
      alt={image.alt}
      className={`absolute ${image.className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1, 
        duration: 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true }} 
    />
    ))}

   
  </section>
  )
}
