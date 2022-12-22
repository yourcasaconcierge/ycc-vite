import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';
import BrandLogo from '../brands/BrandLogo';

const Brands = () => {
  const { generic } = useContext(AnimationContext);
  return (
    <m.div
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      id="partners"
      className="h-screen flex items-center bg-dark"
    >
      <m.div
        variants={generic}
        className="container layout-padding grid grid-cols-2"
      >
        <div className="flex items-center justify-center h-40 xl:h-52 w-full border-b border-r border-black">
          <p className="garamond text-xl xl:text-4xl text-center mr-2 text-light">
            The partners we trust
          </p>
        </div>
        <BrandLogo logo="airbnb" borderBottom />
        <BrandLogo logo="homeaway" borderRight borderBottom />
        <BrandLogo logo="vrbo" borderBottom />
        <BrandLogo logo="expedia" borderRight />
        <BrandLogo logo="booking" />
      </m.div>
    </m.div>
  );
};

export default Brands;