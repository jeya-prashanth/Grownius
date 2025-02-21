import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../../../assets/logo_.svg';
import mini_logo from '../../../assets/mini_logo.svg';

const Right_Page = ({ question, answer }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigate = () => {
    navigate('/hero-right');
  };

  return (
    <div className='w-[580px] h-[780px] bg-white rounded-[25px] p-10'>
      <div>
        <img src={logo} alt="Main Logo" />
        <div className='border-t border-[#176B872A] mt-[31px]'></div>
      </div>

      <div className='bg-[#176B872A] mt-12 w-53 rounded-[12px] ml-72 '>
        <h1 className='text-[15px] text-[#04364A] px-5 py-2.5 '>{question}</h1>
      </div>

      <div className='flex mt-7.5'>
        <div className='h-7.5 w-7.5 bg-[#176B87] flex items-center justify-center rounded-full '>
          <img className='w-2.4 h-3.7 px-2.5 py-2' src={mini_logo} alt="Mini Logo" />
        </div>
        <textarea 
          className='ml-3 p-3 w-full max-h-[400px] border-0 overflow-y-auto' 
          value={answer} 
          readOnly
          style={{ minHeight: '150px', maxHeight: '400px', overflowY: 'auto' }}
        ></textarea>
      </div>

      <div className='w-[500px] h-15 bg-[#176B87] rounded-[100px] flex mt-[320px] '>
        <button onClick={handleNavigate} className='flex px-40 py-5 text-[15px] font-bold text-white '>
          Start Fresh & Grow Again
        </button>
      </div>
    </div>
  );
};

export default Right_Page;
