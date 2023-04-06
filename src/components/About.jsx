import React from 'react';

// import data
import { aboutData } from './data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { plateVariants, staggerContainer, fadeIn } from '../variants';

const Home = () => {
  // destructure data
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section className='min-h-[620px] lg:px-24 px-6'>
      <div className='container mx-auto min-h-[620px]'>
        {/* text & image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='min-h-[620px] flex flex-col lg:flex-row items-center'
        >
          {/* text */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            className='flex-1 text-center lg:text-left'
          >
            <div className='font-semibold text-xl text-orange-600 py-2'>{pretitle}</div>
            <i className='text-black text-2xl lg:text-5xl  font-bold '>{title}</i>
            <p className='mb-8 max-w-[560px]  text-gray-500 pt-4'>{subtitle}</p>
            <button className='btn bg-orange-400 hover:bg-orange-600 py-3 px-6 rounded-3xl border-none text-bold text-white text-xl mx-auto lg:mx-0'>
              {btnText}
            </button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className='-mb-[100px] -mr-[186px] z-10'
          >
            <img src={image} alt='' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
