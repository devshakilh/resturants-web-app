import React, { useState } from 'react';
// import data
import { reservationData } from './data';
// import datepicker
import DatePicker from 'react-datepicker';
// import datepicker css
import 'react-datepicker/dist/react-datepicker.css';
// import timepicker
import TimePicker from 'react-time-picker';
// import timepicker css
import '../timepicker.css';
// import icons
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';

const Reservation = () => {
  // destructure reservation data
  const { title, subtitle, modelImg, btnText } = reservationData;
  // date state
  const [startDate, setStartDate] = useState(new Date());
  // clock state
  const [value, setValue] = useState('10:00');

  return (
    <section className='relative top-24 z-30 pb-20 lg:py-[100px] lg:px-24 px-6'>
      <div className='container mx-auto'>
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          className='text-center'
        >
          {/* title */}
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className='text-5xl font-bold italic pb-2'
          >
            {title}
          </motion.h2>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className='mb-8 text-dark text-xl'
          >
            {subtitle}
          </motion.p>
          {/* model */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className='flex justify-center mb-8'
          >
            <img src={modelImg} alt='' />
          </motion.div>
        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn('up', 'tween', 0.7, 1.6)}
          initial='hidden'
          whileInView={'show'}
        >
          <div className='flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8'>
            {/* datepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker
                className='input border-[2px] border-gray-200 font-semibold py-3 px-4 rounded-3xl bg-white'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* timepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker
                className='input border-[2px] border-gray-200 font-semibold py- px-20 rounded-3xl bg-white'
                clearIcon={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
              />
            </div>
            {/* person number */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaUsers />
                <div>How many people?</div>
              </div>
              <input className='input border-[2px] border-gray-200 font-semibold py-2 text-black px-6 rounded-3xl bg-white' type='text' placeholder='1' />
            </div>
          </div>
          {/* button */}
          <div className='max-w-[316px] mx-auto flex justify-center'>
            <button className='btn px-6 pt-2 pb-3 bg-orange-500 hover:bg-orange-600 border-none rounded-3xl font-bold text-white text-xl w-full lg:w-auto '>
              {btnText}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
