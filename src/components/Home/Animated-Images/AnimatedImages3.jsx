import { motion } from "framer-motion"
import Bin from "../../../assets/images/imageset3/bin.60ce7b76.png"
import Book from "../../../assets/images/imageset3/book.11c1c4b9.png"
import Carpet from "../../../assets/images/imageset3/carpet.d8796c37.png"
import Code from "../../../assets/images/imageset3/code.82d4b3f4.png"
import Desktop from "../../../assets/images/imageset3/dekstop.2c917b9e.png"
import Dot from "../../../assets/images/imageset3/dot.ee19ae91.png"
import Flower1 from "../../../assets/images/imageset3/flower-top-big.bbfe9272.png"
import Flower2 from "../../../assets/images/imageset3/flower-top.20c351ba.png"
import Headphone from "../../../assets/images/imageset3/headphone.60a2794c.png"
import Keyboard from "../../../assets/images/imageset3/keyboard.7abcad8f.png"
import Man from "../../../assets/images/imageset3/man.041b90e9.png"
import Pen from "../../../assets/images/imageset3/pen.2ff0aba4.png"
import Table from "../../../assets/images/imageset3/table.45335d41.png"
import TeaCup from "../../../assets/images/imageset3/tea-cup.6956e3ff.png"


const images = [
    { src: Carpet, alt: "Carpet", className: " w-[470px] h-[220px] bottom-10 " },
    { src: Flower1, alt: "Flower1", className: "z-30 w-[70px] h-[130px] top-[45%] left-[8%]" },
    { src: Man, alt: "Man", className: "z-20 w-[250px] h-[250px]  bottom-8 left-16" },
    { src: Table, alt: "Table", className: "w-[350px] h-[250px]  top-[24%] left-[18%]" },
    { src: Keyboard, alt: "Keyboard", className: "z-10 w-[100px] h-[50px]  top-[45%] left-[50%]" },
    { src: Desktop, alt: "Desktop", className: "z-10 w-[70px] h-[100px]  top-[25%] left-[60%]" },
    { src: Book, alt: "Book", className: "z-10 w-[50px] h-[40px] top-[22%] left-[38%]" },
    { src: Pen, alt: "Pen", className: "z-10 w-[30px] h-[40px]  top-[30%] right-[40%]" },
    { src: Headphone, alt: "Headphone", className: "z-10 w-[40px] h-[25px]  top-[35%] right-[48%]" },
    { src: Flower2, alt: "Flower2", className: "z-10 w-[25px] h-[40px]  top-[40%] right-[18%]" },
    { src: TeaCup, alt: "TeaCup", className: "z-10 w-[20px] h-[40px]  top-[51%] left-[59%]" },
    { src: Bin, alt: "Bin", className: "z-10 w-[80px] h-[100px] bottom-8 right-[15%] " },
    
    { src: Code, alt: "Code", className: "z-10 w-[50px] h-[50px] top-5 right-[40%] " },
    { src: Dot, alt: "Dot", className: " w-[40px] h-[40px]  top-20 right-[20%]" },
    
  ];

export default function Animation2() {
  return (
    <section className=" relative w-[420px] -ml-12 md:ml-0 h-[300px] md:w-[500px] md:h-[400px]   ">
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
