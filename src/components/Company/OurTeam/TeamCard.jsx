import { AnimatedTestimonials } from '../../../ui/Aceternity/Testimonial.jsx';

const MyComponent = () => {
  const testimonials = [
    {
      src: 'https://img.freepik.com/free-photo/3d-render-little-boy-with-laptop-tools_1057-44642.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid',
      name: 'John Doe',
      designation: 'Software Engineer',
      quote: 'This is the best service I have ever used!'
    },
    {
      src: 'https://img.freepik.com/free-photo/3d-illustration-cartoon-man-with-computer-various-objects_1057-46388.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid',
      name: 'Jane Smith',
      designation: 'Product Manager',
      quote: 'An excellent experience from start to finish!'
    },
    {
      src: 'https://img.freepik.com/free-photo/portrait-man-christmas-celebrations_23-2150936477.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid',
      name: 'Samuel Green',
      designation: 'UX Designer',
      quote: 'Highly recommended for anyone looking to improve their workflow.'
    },
    {
      src: 'https://img.freepik.com/free-photo/3d-rendering-boy-playing-piano_23-2150898665.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid',
      name: 'Alex Bruno',
      designation: 'UX Designer',
      quote: 'Highly recommended for anyone looking to improve their workflow.'
    },
    {
      src: 'https://img.freepik.com/free-photo/fun-man-with-laptop-sitting-spaceship-3d-rendering_1057-44735.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid',
      name: ' John Samuel ',
      designation: 'UX Designer',
      quote: 'Highly recommended for anyone looking to improve their workflow.'
    }
  ];

  return (
    <div className='py-20 font-poppins'>
      <h1 className='text-center text-xl md:text-2xl lg:text-4xl py-10 font-bold leading-10'>Our Team</h1>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};

export default MyComponent;
